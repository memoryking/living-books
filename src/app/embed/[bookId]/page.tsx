import { generateWidget } from "@/lib/generate-widget";
import { notFound } from "next/navigation";
import Script from "next/script";

export const dynamic = "force-dynamic";

export const metadata = {
  robots: "noindex, nofollow",
};

export default async function EmbedPage({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const { bookId } = await params;
  const html = generateWidget(bookId);
  if (!html) notFound();

  const now = Date.now();
  const CDN = "https://living-books-beta.vercel.app/widget";

  // HTML에서 <script> 태그 제거 (Script 컴포넌트로 별도 로드)
  const htmlWithoutScripts = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/eb-style\.css\?v=\d+/, `eb-style.css?v=${now}`);

  // iframe 보안 + 높이 전송 인라인 스크립트
  const guardCode = `
(function(){
  try {
    if (window.top === window.self) {
      document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;color:#666;text-align:center;padding:20px;"><div><p style="font-size:48px;margin-bottom:16px;">🔒</p><p style="font-size:18px;font-weight:600;">이 페이지는 직접 접속할 수 없습니다.</p><p style="font-size:14px;margin-top:8px;color:#999;">구매 페이지를 통해 접속해주세요.</p></div></div>';
      return;
    }
  } catch(e) {}
  function sendHeight(){
    var h=document.documentElement.scrollHeight;
    window.parent.postMessage({type:'eb-resize',height:h},'*');
  }
  new ResizeObserver(sendHeight).observe(document.body);
  window.addEventListener('load',sendHeight);
  sendHeight();
})();
`;

  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>살아있는 정보책</title>
        <link rel="stylesheet" href={`${CDN}/eb-style.css?v=${now}`} />
      </head>
      <body
        style={{ margin: 0, padding: 0, background: "#fff" }}
        dangerouslySetInnerHTML={{ __html: htmlWithoutScripts }}
      />
      <Script id="eb-guard" strategy="beforeInteractive">{guardCode}</Script>
      <Script src={`${CDN}/eb-script.js?v=${now}`} strategy="afterInteractive" />
    </html>
  );
}
