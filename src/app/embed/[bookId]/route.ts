import { generateWidget } from "@/lib/generate-widget";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ bookId: string }> }
) {
  const { bookId } = await params;
  const widgetHtml = generateWidget(bookId);

  if (!widgetHtml) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const CDN = "https://living-books-beta.vercel.app/widget";
  const isPreview = req.nextUrl.searchParams.get("preview") === "1";

  // preview 모드: -next 파일 사용, 일반: 현재 파일 사용
  const cssFile = isPreview ? "eb-style-next.css" : "eb-style.css?v=5";
  const jsFile = (bookId === 'hanja-memory' || bookId === 'hanja') ? 'hanja-reader.js?v=5' : isPreview ? "eb-script-next.js" : "eb-script.js?v=5";

  // HTML에서 기존 <link>와 <script> 태그 제거 (직접 삽입)
  const contentHtml = widgetHtml
    .replace(/<link[^>]*eb-style\.css[^>]*>/gi, "")
    .replace(/<script[^>]*(?:eb-script|hanja-reader)\.js[^>]*><\/script>/gi, "");

  const previewBanner = isPreview
    ? `<div style="position:fixed;top:0;left:0;right:0;background:#f59e0b;color:#78350f;text-align:center;padding:4px;font-size:12px;font-weight:700;z-index:9999;">⚠️ 미리보기 모드 — 사용자에게는 보이지 않습니다</div>`
    : "";

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>살아있는 정보책</title>
  <link rel="stylesheet" href="${CDN}/${cssFile}">
</head>
<body style="margin:0;padding:0;background:#fff;">
${previewBanner}
<script>
(function(){
  try {
    if (window.top === window.self && !${isPreview}) {
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
  var _resizeTimer;
  function sendHeight(){
    if (${(bookId === 'hanja-memory' || bookId === 'hanja')} && document.getElementById('eb-root')?.classList.contains('eb-page-mode')) return;
    var h=document.documentElement.scrollHeight;
    window.parent.postMessage({type:'eb-resize',height:h},'*');
  }
  function debouncedSendHeight(){
    clearTimeout(_resizeTimer);
    _resizeTimer=setTimeout(sendHeight,100);
  }
  new ResizeObserver(debouncedSendHeight).observe(document.body);
  window.addEventListener('load',sendHeight);
  sendHeight();
})();
</script>
<script src="${CDN}/${jsFile}"></script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Security-Policy": isPreview
        ? "frame-ancestors *"
        : "frame-ancestors vipup.site *.vipup.site",
      "X-Frame-Options": isPreview ? "ALLOWALL" : "SAMEORIGIN",
      "Cache-Control": isPreview
        ? "no-cache, no-store"
        : "public, max-age=300, s-maxage=3600",
    },
  });
}
