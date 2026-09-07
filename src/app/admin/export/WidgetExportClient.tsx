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

function CopyButton({ html, label }: { html: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = html;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-6 py-3 rounded-xl font-semibold text-white transition-all text-sm ${
        copied
          ? "bg-green-500 hover:bg-green-600"
          : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      {copied ? "✅ 복사 완료!" : label}
    </button>
  );
}

function PreviewModal({
  widget,
  onClose,
}: {
  widget: WidgetData;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl w-[90vw] h-[85vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-bold">
            {widget.emoji} {widget.title} — 미리보기
          </h3>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm font-medium"
          >
            닫기
          </button>
        </div>
        <iframe
          srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;padding:16px">${widget.html}</body></html>`}
          className="flex-1 w-full border-none"
          title="미리보기"
        />
      </div>
    </div>
  );
}

export default function WidgetExportClient({
  widgets,
}: {
  widgets: WidgetData[];
}) {
  const [previewWidget, setPreviewWidget] = useState<WidgetData | null>(null);
  const [showCode, setShowCode] = useState<string | null>(null);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-2">
          아임웹 위젯 내보내기
        </h1>
        <p className="text-gray-500">
          각 책의 &quot;코드 복사&quot; 버튼을 눌러 아임웹 코드 위젯에
          붙여넣으세요.
        </p>
        <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-800">
          <strong>사용법:</strong> 아임웹 관리자 → 디자인 모드 → 페이지
          편집 → 위젯 추가 → &quot;코드&quot; 위젯 → HTML 탭에 코드를
          통째로 붙여넣기 → 저장
        </div>
      </header>

      <div className="space-y-6">
        {widgets.map((w) => (
          <div
            key={w.id}
            className="p-6 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">{w.emoji}</span>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{w.title}</h2>
                <p className="text-gray-500 text-sm mb-3">{w.subtitle}</p>
                <p className="text-xs text-gray-400 mb-4">
                  코드 크기: {(w.charCount / 1024).toFixed(1)}KB ·{" "}
                  {w.charCount.toLocaleString()}자
                </p>

                <div className="flex flex-wrap gap-3">
                  <CopyButton html={w.html} label="📋 코드 복사" />
                  <button
                    onClick={() => setPreviewWidget(w)}
                    className="px-6 py-3 rounded-xl font-semibold border border-gray-300 hover:border-blue-400 hover:text-blue-600 transition-all text-sm"
                  >
                    👁 미리보기
                  </button>
                  <button
                    onClick={() =>
                      setShowCode(showCode === w.id ? null : w.id)
                    }
                    className="px-6 py-3 rounded-xl font-semibold border border-gray-300 hover:border-gray-500 transition-all text-sm"
                  >
                    {showCode === w.id ? "코드 숨기기" : "코드 보기"}
                  </button>
                </div>

                {showCode === w.id && (
                  <div className="mt-4 relative">
                    <pre className="p-4 rounded-xl bg-gray-900 text-gray-200 text-xs overflow-auto max-h-96 leading-relaxed">
                      <code>{w.html}</code>
                    </pre>
                    <div className="absolute top-2 right-2">
                      <CopyButton html={w.html} label="복사" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16 p-6 rounded-2xl bg-gray-50 border border-gray-200">
        <h2 className="text-lg font-bold mb-4">아임웹 설치 가이드</h2>
        <ol className="space-y-3 text-sm text-gray-700">
          <li>
            <strong>1.</strong> 위의 책에서 &quot;코드 복사&quot; 버튼을
            클릭합니다.
          </li>
          <li>
            <strong>2.</strong> 아임웹 관리자 페이지에서 결제 후 1개월
            열람 권한이 걸리는 보호 페이지로 이동합니다.
          </li>
          <li>
            <strong>3.</strong> 디자인 편집 모드에서 &quot;위젯 추가&quot;
            → &quot;코드&quot; 위젯을 선택합니다.
          </li>
          <li>
            <strong>4.</strong> HTML 탭에 복사한 코드를 통째로 붙여넣고
            저장합니다.
          </li>
          <li>
            <strong>5.</strong> 미리보기로 확인하세요. 글자 크기 버튼과
            목차 이동이 정상 작동하는지 확인합니다.
          </li>
        </ol>
        <div className="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-200 text-sm text-blue-800">
          <strong>팁:</strong> 아임웹 사이트 상단에 고정 메뉴바가 있으면
          글자 크기 버튼 줄이 메뉴에 가려질 수 있습니다. CSS의{" "}
          <code className="bg-blue-100 px-1 rounded">
            .eb-bar{"{"}top:0{"}"}
          </code>{" "}
          값을 메뉴 높이만큼 늘려주세요 (예: top:60px).
        </div>
      </section>

      {previewWidget && (
        <PreviewModal
          widget={previewWidget}
          onClose={() => setPreviewWidget(null)}
        />
      )}
    </main>
  );
}
