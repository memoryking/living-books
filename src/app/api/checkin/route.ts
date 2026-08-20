import { NextRequest, NextResponse } from "next/server";

const NCB_BASE = process.env.NOCODEBACKEND_BASE_URL || "https://api.nocodebackend.com";
const NCB_INSTANCE = "55910_pharma_health_db";
const CHECKIN_TABLE = "ebook_checkins";
const POINTS_PER_CHECKIN = 5;

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

function kstToday() {
  return new Date(Date.now() + 9 * 3600000).toISOString().slice(0, 10);
}
function kstNow() {
  return new Date(Date.now() + 9 * 3600000).toISOString().slice(0, 19).replace("T", " ");
}

// ncbRead — GET with query params (비타코치 패턴과 동일)
async function ncbRead(table: string, filters = "") {
  const res = await fetch(ncbUrl(`/read/${table}`, filters), {
    method: "GET",
    headers: ncbHeaders(),
  });
  return res.json();
}

// ncbCreate — POST
async function ncbCreate(table: string, data: Record<string, unknown>) {
  const res = await fetch(ncbUrl(`/create/${table}`), {
    method: "POST",
    headers: ncbHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
}

// 응답에서 레코드 배열 추출 (nocodebackend 응답 형식 대응)
function extractRecords(response: unknown): Record<string, unknown>[] {
  if (Array.isArray(response)) return response;
  const obj = response as Record<string, unknown>;
  if (Array.isArray(obj?.data)) return obj.data as Record<string, unknown>[];
  if (Array.isArray(obj?.records)) return obj.records as Record<string, unknown>[];
  return [];
}

// GET /api/checkin?book_id=diet-secrets&user_id=recXXX
export async function GET(req: NextRequest) {
  const bookId = req.nextUrl.searchParams.get("book_id") || "";
  const userId = req.nextUrl.searchParams.get("user_id") || "";
  const today = kstToday();

  try {
    // ncbRead로 book_id 필터링 (비타코치 패턴)
    const allData = await ncbRead(CHECKIN_TABLE, `book_id=${encodeURIComponent(bookId)}&limit=5000`);
    const records = extractRecords(allData);

    // 항목별 통계 집계
    const stats: Record<number, { total: number; today: number }> = {};
    const myChecks: Record<number, string> = {};

    for (const r of records) {
      const num = Number(r.item_number);
      if (!num) continue;
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
    // 테이블이 없거나 에러 시 빈 통계 반환 (에러로 인한 UI 깨짐 방지)
    return NextResponse.json({
      book_id: bookId,
      today,
      stats: {},
      myChecks: {},
      totalCheckins: 0,
      _error: String(err),
    });
  }
}

// DELETE /api/checkin — 항목 교체 시 기존 통계 삭제
// body: { book_id, item_number }
export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { book_id, item_number } = body;

    if (!book_id || !item_number) {
      return NextResponse.json({ error: "book_id, item_number 필수" }, { status: 400 });
    }

    // 해당 항목의 모든 체크인 기록 조회
    const allData = await ncbRead(
      CHECKIN_TABLE,
      `book_id=${encodeURIComponent(book_id)}&item_number=${item_number}&limit=5000`
    );
    const records = extractRecords(allData);

    // 각 레코드 삭제
    let deleted = 0;
    for (const r of records) {
      const id = r.id || r.ID || r._id;
      if (id) {
        await fetch(ncbUrl(`/delete/${CHECKIN_TABLE}/${id}`), {
          method: "DELETE",
          headers: ncbHeaders(),
        });
        deleted++;
      }
    }

    return NextResponse.json({
      success: true,
      deleted,
      book_id,
      item_number: Number(item_number),
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

// POST /api/checkin
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { book_id, item_number, user_id, airtable_user_id } = body;

    if (!book_id || !item_number || !user_id) {
      return NextResponse.json({ error: "book_id, item_number, user_id 필수" }, { status: 400 });
    }

    const today = kstToday();

    // 오늘 이미 체크했는지 확인 (ncbRead로 필터)
    const checkData = await ncbRead(
      CHECKIN_TABLE,
      `book_id=${encodeURIComponent(book_id)}&item_number=${item_number}&user_id=${encodeURIComponent(user_id)}&checked_date=${today}&limit=1`
    );
    const existArr = extractRecords(checkData);

    if (existArr.length > 0) {
      return NextResponse.json({ error: "오늘 이미 체크했습니다", already: true }, { status: 409 });
    }

    // 체크인 기록 생성
    const result = await ncbCreate(CHECKIN_TABLE, {
      book_id,
      item_number: Number(item_number),
      user_id: String(user_id),
      checked_date: today,
      created_at: kstNow(),
    });

    // 포인트 적립 (Airtable)
    if (airtable_user_id && POINTS_PER_CHECKIN > 0) {
      try {
        const userRes = await fetch(
          `${AT_BASE}/${process.env.AIRTABLE_BASE_ID}/${AT_USERS_TABLE}?filterByFormula=RECORD_ID()='${airtable_user_id}'&maxRecords=1`,
          { headers: atHeaders(), cache: "no-store" }
        );
        const userData = await userRes.json();
        const userRecords = userData.records || [];
        if (userRecords.length > 0) {
          const currentPoints = Number(userRecords[0].fields?.point || 0);
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
