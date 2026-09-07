"use client";

import { useState } from "react";

interface WidgetData {
  id: string;
  title: string;
  emoji: string;
  subtitle: string;
  html: string;
  charCount: number;
}

interface DetailData {
  id: string;
  title: string;
  emoji: string;
  detailHtml: string;
  detailSize: number;
  coverPrompt: string;
  marketingCopy: string;
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-4 py-2 rounded-lg font-semibold text-white transition-all text-sm ${
        copied
          ? "bg-green-500"
          : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      {copied ? "✅ 복사됨!" : label}
    </button>
  );
}

function PreviewModal({
  html,
  title,
  onClose,
}: {
  html: string;
  title: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl w-[90vw] h-[85vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-bold">{title}</h3>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm font-medium"
          >
            닫기
          </button>
        </div>
        <iframe
          srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;padding:0">${html}</body></html>`}
          className="flex-1 w-full border-none"
          title="미리보기"
        />
      </div>
    </div>
  );
}

/* ── 위젯 카드 (전자책 뷰어) ── */
function WidgetCard({ w }: { w: WidgetData }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="p-5 rounded-xl border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-500">
          전자책 뷰어 위젯 · {(w.charCount / 1024).toFixed(1)}KB
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        <CopyButton text={w.html} label="📋 뷰어 코드 복사" />
        <button
          onClick={() => setShowCode(!showCode)}
          className="px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-500 text-sm"
        >
          {showCode ? "숨기기" : "코드 보기"}
        </button>
      </div>
      {showCode && (
        <pre className="mt-3 p-3 rounded-lg bg-gray-900 text-gray-200 text-xs overflow-auto max-h-60">
          <code>{w.html.slice(0, 2000)}...</code>
        </pre>
      )}
    </div>
  );
}

/* ── 상세페이지 카드 ── */
function DetailCard({
  d,
  onPreview,
}: {
  d: DetailData;
  onPreview: () => void;
}) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="p-5 rounded-xl border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-500">
          아임웹 상세페이지 · {(d.detailSize / 1024).toFixed(1)}KB
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        <CopyButton text={d.detailHtml} label="📋 상세페이지 코드 복사" />
        <button
          onClick={onPreview}
          className="px-4 py-2 rounded-lg border border-gray-300 hover:border-blue-400 hover:text-blue-600 text-sm"
        >
          👁 미리보기
        </button>
        <button
          onClick={() => setShowCode(!showCode)}
          className="px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-500 text-sm"
        >
          {showCode ? "숨기기" : "코드 보기"}
        </button>
      </div>
      {showCode && (
        <pre className="mt-3 p-3 rounded-lg bg-gray-900 text-gray-200 text-xs overflow-auto max-h-60">
          <code>{d.detailHtml.slice(0, 2000)}...</code>
        </pre>
      )}
    </div>
  );
}

/* ── 프롬프트/마케팅 카드 ── */
function TextCard({ label, text }: { label: string; text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-5 rounded-xl border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-500">{label}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <CopyButton text={text} label={`📋 ${label} 복사`} />
        <button
          onClick={() => setOpen(!open)}
          className="px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-500 text-sm"
        >
          {open ? "숨기기" : "내용 보기"}
        </button>
      </div>
      {open && (
        <pre className="mt-3 p-3 rounded-lg bg-gray-50 text-gray-700 text-sm overflow-auto max-h-80 whitespace-pre-wrap leading-relaxed">
          {text}
        </pre>
      )}
    </div>
  );
}

/* ── 메인 ── */
export default function WidgetExportClient({
  widgets,
  details,
}: {
  widgets: WidgetData[];
  details: DetailData[];
}) {
  const [previewHtml, setPreviewHtml] = useState<{
    html: string;
    title: string;
  } | null>(null);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-2">
          아임웹 위젯 내보내기
        </h1>
        <p className="text-gray-500 mb-4">
          각 책의 코드를 복사해서 아임웹에 붙여넣으세요.
        </p>
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-800">
          <strong>사용법:</strong> 아임웹 관리자 → 디자인 모드 → 코드
          위젯 → HTML 탭에 붙여넣기 → 저장
        </div>
      </header>

      {widgets.map((w) => {
        const d = details.find((dd) => dd.id === w.id);
        return (
          <div
            key={w.id}
            className="mb-10 p-6 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all"
          >
            {/* 헤더 */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{w.emoji}</span>
              <div>
                <h2 className="text-xl font-bold">{w.title}</h2>
                <p className="text-gray-500 text-sm">{w.subtitle}</p>
              </div>
            </div>

            {/* 4개 탭 */}
            <div className="space-y-4">
              <WidgetCard w={w} />

              {d && (
                <>
                  <DetailCard
                    d={d}
                    onPreview={() =>
                      setPreviewHtml({
                        html: d.detailHtml,
                        title: `${d.emoji} ${d.title} — 상세페이지`,
                      })
                    }
                  />
                  <TextCard
                    label="표지 프롬프트"
                    text={d.coverPrompt}
                  />
                  <TextCard
                    label="마케팅문구 (SNS 5종)"
                    text={d.marketingCopy}
                  />
                </>
              )}
            </div>
          </div>
        );
      })}

      {/* 설치 가이드 */}
      <section className="mt-12 p-6 rounded-2xl bg-gray-50 border border-gray-200">
        <h2 className="text-lg font-bold mb-4">아임웹 설치 가이드</h2>
        <ol className="space-y-3 text-sm text-gray-700">
          <li>
            <strong>1. 전자책 뷰어:</strong> 결제 후 열람되는 보호
            페이지에 코드 위젯으로 붙여넣기
          </li>
          <li>
            <strong>2. 상세페이지:</strong> 쇼핑 상품의 상세 설명에
            HTML로 붙여넣기
          </li>
          <li>
            <strong>3. 표지 프롬프트:</strong> 나노바나나 또는 ChatGPT에
            복사해서 표지 이미지 생성
          </li>
          <li>
            <strong>4. 마케팅문구:</strong> 인스타그램·스레드·블로그에
            홍보용으로 사용
          </li>
        </ol>
        <div className="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-200 text-sm text-blue-800">
          <strong>팁:</strong> 상단 고정 메뉴가 있으면 뷰어 CSS의{" "}
          <code className="bg-blue-100 px-1 rounded">
            .eb-bar{"{"}top:0{"}"}
          </code>{" "}
          값을 메뉴 높이만큼 늘려주세요 (예: top:60px).
        </div>
      </section>

      {previewHtml && (
        <PreviewModal
          html={previewHtml.html}
          title={previewHtml.title}
          onClose={() => setPreviewHtml(null)}
        />
      )}
    </main>
  );
}
