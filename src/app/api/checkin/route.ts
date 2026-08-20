import { NextRequest, NextResponse } from "next/server";

const NCB_BASE = "https://api.nocodebackend.com";
const NCB_INSTANCE = "55910_pharma_health_db";
const CHECKIN_TABLE = "ebook_checkins";
const POINTS_PER_CHECKIN = 5;

// Airtable config (same as vitacoach)
const AT_BASE = "https://api.airtable.com/v0";
const AT_USERS_TABLE = "tblQMtkyFsQ8krin9";

function ncbUrl(path: string, extra = "") {
  const sep = extra ? "&" : "";
  return `${NCB_BASE}${path}?Instance=${NCB_INSTANCE}${sep}${extra}`;
}
function ncbHeaders() {
  return {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Bearer ${process.env.NOCODEBACKEND_API_TOKEN}`,
  };
}
function atHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
  };
}

// KST date string (YYYY-MM-DD)
function kstToday() {
  return new Date(Date.now() + 9 * 3600000).toISOString().slice(0, 10);
}
function kstNow() {
  return new Date(Date.now() + 9 * 3600000).toISOString().slice(0, 19).replace("T", " ");
}

// GET /api/checkin?book_id=diet-secrets
// → 통계: 각 항목별 총 체크 수 + 오늘 체크 수
// → user_id 있으면 내 체크 기록도
export async function GET(req: NextRequest) {
  const bookId = req.nextUrl.searchParams.get("book_id") || "";
  const userId = req.nextUrl.searchParams.get("user_id") || "";
  const today = kstToday();

  try {
    // 전체 체크인 기록 가져오기
    const allRes = await fetch(
      ncbUrl(`/search/${CHECKIN_TABLE}`),
      {
        method: "POST",
        headers: ncbHeaders(),
        body: JSON.stringify({ book_id: bookId }),
      }
    );
    const allData = await allRes.json();
    const records = Array.isArray(allData) ? allData : allData.data || [];

    // 항목별 통계 집계
    const stats: Record<number, { total: number; today: number }> = {};
    const myChecks: Record<number, string> = {}; // item_number → checked_date

    for (const r of records) {
      const num = Number(r.item_number);
      if (!stats[num]) stats[num] = { total: 0, today: 0 };
      stats[num].total++;
      if (String(r.checked_date) === today) stats[num].today++;
      if (userId && String(r.user_id) === userId && String(r.checked_date) === today) {
        myChecks[num] = String(r.checked_date);
      }
    }

    return NextResponse.json({
      book_id: bookId,
      today,
      stats,
      myChecks,
      totalCheckins: records.length,
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

// POST /api/checkin
// body: { book_id, item_number, user_id, airtable_user_id }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { book_id, item_number, user_id, airtable_user_id } = body;

    if (!book_id || !item_number || !user_id) {
      return NextResponse.json({ error: "book_id, item_number, user_id 필수" }, { status: 400 });
    }

    const today = kstToday();

    // 오늘 이미 체크했는지 확인
    const checkRes = await fetch(
      ncbUrl(`/search/${CHECKIN_TABLE}`),
      {
        method: "POST",
        headers: ncbHeaders(),
        body: JSON.stringify({
          book_id,
          item_number: Number(item_number),
          user_id: String(user_id),
          checked_date: today,
        }),
      }
    );
    const existing = await checkRes.json();
    const existArr = Array.isArray(existing) ? existing : existing.data || [];

    if (existArr.length > 0) {
      return NextResponse.json({ error: "오늘 이미 체크했습니다", already: true }, { status: 409 });
    }

    // 체크인 기록 생성
    const record = {
      book_id,
      item_number: Number(item_number),
      user_id: String(user_id),
      checked_date: today,
      created_at: kstNow(),
    };

    const createRes = await fetch(ncbUrl(`/create/${CHECKIN_TABLE}`), {
      method: "POST",
      headers: ncbHeaders(),
      body: JSON.stringify(record),
    });
    const result = await createRes.json();

    // 포인트 적립 (Airtable)
    if (airtable_user_id && POINTS_PER_CHECKIN > 0) {
      try {
        const userRes = await fetch(
          `${AT_BASE}/${process.env.AIRTABLE_BASE_ID}/${AT_USERS_TABLE}?filterByFormula=RECORD_ID()='${airtable_user_id}'&maxRecords=1`,
          { headers: atHeaders(), cache: "no-store" }
        );
        const userData = await userRes.json();
        const records = userData.records || [];
        if (records.length > 0) {
          const currentPoints = Number(records[0].fields?.point || 0);
          await fetch(
            `${AT_BASE}/${process.env.AIRTABLE_BASE_ID}/${AT_USERS_TABLE}/${airtable_user_id}`,
            {
              method: "PATCH",
              headers: atHeaders(),
              body: JSON.stringify({ fields: { point: currentPoints + POINTS_PER_CHECKIN }, typecast: true }),
            }
          );
        }
      } catch {
        // 포인트 적립 실패해도 체크인은 유지
      }
    }

    return NextResponse.json({
      success: true,
      points_earned: POINTS_PER_CHECKIN,
      ...result,
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
