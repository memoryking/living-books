import { generateWidget, getBookIds } from "@/lib/generate-widget";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getBookIds().map((id) => ({ bookId: id }));
}

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

  // iframe 보안 + 높이 자동 전송 스크립트
  const embedScript = `<script>
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
</script>`;

  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>살아있는 정보책</title>
      </head>
      <body
        style={{ margin: 0, padding: 0, background: "#fff" }}
        dangerouslySetInnerHTML={{ __html: embedScript + html }}
      />
    </html>
  );
}
