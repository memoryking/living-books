import { NextResponse } from "next/server";

// 전자책 목록 API — 비타코치 등 외부 앱에서 자동 연동용
// 새 책이 추가되면 여기에 추가 → 비타코치 건강정보에 자동 반영

const books = [
  {
    id: "home-medicine",
    type: "health",
    emoji: "💊",
    title: "가정에서 꼭 필요한 상비약과 사용법",
    subtitle: "유원소망약국 김약사가 친절하게 알려드립니다",
    tags: ["건강", "상비약", "응급처치"],
    url: "/books/home-medicine",
    lastUpdated: "2026-08-05",
    version: 2,
  },
  {
    id: "pet-medicine",
    type: "health",
    emoji: "🐾",
    title: "김약사가 알려주는 동물의약품",
    subtitle: "우리 아이 약, 약국에서도 살 수 있어요",
    tags: ["반려동물", "동물의약품", "강아지", "고양이"],
    url: "/books/pet-medicine",
    lastUpdated: "2026-08-05",
    version: 1,
  },
  {
    id: "relationships",
    type: "guide",
    emoji: "🤝",
    title: "인간관계를 좋게 하는 방법",
    subtitle: "듣고, 외우고, 실천하는 살아있는 가이드",
    tags: ["인간관계", "소통", "자기계발"],
    url: "/guides/relationships",
    lastUpdated: "2026-08-13",
    version: 1,
  },
];

export async function GET() {
  return NextResponse.json(
    { data: books, total: books.length },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}
