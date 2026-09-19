import { generateWidget } from "@/lib/generate-widget";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ bookId: string }> }
) {
  const { bookId } = await params;
  const widgetHtml = generateWidget(bookId);

  if (!widgetHtml) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const now = Date.now();
  const CDN = "https://living-books-beta.vercel.app/widget";

  // HTML에서 기존 <link>와 <script> 태그 제거 (직접 삽입)
  const contentHtml = widgetHtml
    .replace(/<link[^>]*eb-style\.css[^>]*>/gi, "")
    .replace(/<script[^>]*eb-script\.js[^>]*><\/script>/gi, "");

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>살아있는 정보책</title>
  <link rel="stylesheet" href="${CDN}/eb-style.css?v=${now}">
</head>
<body style="margin:0;padding:0;background:#fff;">
<script>
(function(){
  try {
    if (window.top === window.self) {
      document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;color:#666;text-align:center;padding:20px;"><div><p style="font-size:48px;margin-bottom:16px;">🔒</p><p style="font-size:18px;font-weight:600;">이 페이지는 직접 접속할 수 없습니다.</p><p style="font-size:14px;margin-top:8px;color:#999;">구매 페이지를 통해 접속해주세요.</p></div></div>';
    }
  } catch(e) {}
})();
</script>

${contentHtml}

<script>
// 높이 자동 전송
(function(){
  try { if(window.top===window.self) return; } catch(e){}
  function sendHeight(){
    var h=document.documentElement.scrollHeight;
    window.parent.postMessage({type:'eb-resize',height:h},'*');
  }
  new ResizeObserver(sendHeight).observe(document.body);
  window.addEventListener('load',sendHeight);
  sendHeight();
})();
</script>
<script src="${CDN}/eb-script.js?v=${now}"></script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Security-Policy": "frame-ancestors vipup.site *.vipup.site",
      "X-Frame-Options": "SAMEORIGIN",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}
