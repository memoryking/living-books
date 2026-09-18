import { NextRequest, NextResponse } from "next/server";

const NCB_BASE = process.env.NOCODEBACKEND_BASE_URL || "https://api.nocodebackend.com";
const NCB_INSTANCE = "55910_pharma_health_db";
const LIKE_TABLE = "ebook_chapter_likes";

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

function extractRecords(response: unknown): Record<string, unknown>[] {
  if (Array.isArray(response)) return response;
  const obj = response as Record<string, unknown>;
  if (Array.isArray(obj?.data)) return obj.data as Record<string, unknown>[];
  if (Array.isArray(obj?.records)) return obj.records as Record<string, unknown>[];
  return [];
}

// GET /api/chapter-like?book_id=diet-secrets
// → 챕터별 좋아요 수 반환
export async function GET(req: NextRequest) {
  const bookId = req.nextUrl.searchParams.get("book_id") || "";

  try {
    // 전체 레코드 읽기 후 필터링 (nocodebackend 호환)
    const res = await fetch(ncbUrl(`/read/${LIKE_TABLE}`, `limit=5000`), {
      method: "GET",
      headers: ncbHeaders(),
    });
    const data = await res.json();
    const records = extractRecords(data);

    // 챕터별 카운트 집계 (book_id 필터)
    const counts: Record<number, number> = {};
    for (const r of records) {
      if (bookId && String(r.book_id) !== bookId) continue;
      const ch = Number(r.chapter);
      counts[ch] = (counts[ch] || 0) + 1;
    }

    return NextResponse.json({ book_id: bookId, counts, _total: records.length });
  } catch (err) {
    return NextResponse.json({ book_id: bookId, counts: {}, _error: String(err) });
  }
}

// POST /api/chapter-like
// body: { book_id, chapter }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { book_id, chapter } = body;

    if (!book_id || chapter === undefined) {
      return NextResponse.json({ error: "book_id, chapter 필수" }, { status: 400 });
    }

    const kstNow = new Date(Date.now() + 9 * 3600000).toISOString().slice(0, 19).replace("T", " ");

    const createRes = await fetch(ncbUrl(`/create/${LIKE_TABLE}`), {
      method: "POST",
      headers: ncbHeaders(),
      body: JSON.stringify({
        book_id,
        chapter: Number(chapter),
        created_at: kstNow,
      }),
    });
    const createData = await createRes.json();

    return NextResponse.json({ success: true, book_id, chapter: Number(chapter), _ncb: createData });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
