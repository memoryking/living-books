"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   Types
   ───────────────────────────────────────────── */

export interface TopItem {
  number: number;
  title: string;
  oneLiner: string;
  description: string;
  situation: string; // 상황 트리거
  action: string; // 구체적 실천법
  mission: string; // 오늘의 미션
}

export interface ContentSection {
  id: string;
  title: string;
  body: React.ReactNode;
}

export interface UpdateLog {
  version: number;
  date: string;
  changes: string[];
}

export interface GuideBookProps {
  bookId: string;
  title: string;
  emoji: string;
  subtitle: string;
  topItems: TopItem[];
  sections: ContentSection[];
  updateLogs: UpdateLog[];
  currentVersion: number;
}

/* ─────────────────────────────────────────────
   TTS Button
   ───────────────────────────────────────────── */

function TTSButton({ items }: { items: TopItem[] }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentIndex(-1);
  }, []);

  const speakItem = useCallback(
    (index: number) => {
      if (index >= items.length) {
        setIsPlaying(false);
        setCurrentIndex(-1);
        return;
      }

      setCurrentIndex(index);
      const item = items[index];
      const text = `${item.number}번째. ${item.title}.`;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ko-KR";
      utterance.rate = 0.9;
      utterance.onend = () => speakItem(index + 1);
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [items]
  );

  const play = useCallback(() => {
    if (isPlaying) {
      stop();
      return;
    }
    setIsPlaying(true);
    speakItem(0);
  }, [isPlaying, stop, speakItem]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={play}
        className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-white transition-all ${
          isPlaying
            ? "bg-red-500 hover:bg-red-600"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isPlaying ? (
          <>
            <span className="text-lg">⏹</span> 멈추기
          </>
        ) : (
          <>
            <span className="text-lg">🔊</span> 10가지 읽어주기
          </>
        )}
      </button>
      {currentIndex >= 0 && (
        <span className="text-sm text-gray-500">
          {currentIndex + 1} / {items.length} 재생 중...
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Checklist (localStorage)
   ───────────────────────────────────────────── */

function Checklist({
  bookId,
  items,
}: {
  bookId: string;
  items: TopItem[];
}) {
  const storageKey = `checklist-${bookId}`;
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setChecked(JSON.parse(saved));
    } catch {}
  }, [storageKey]);

  const toggle = (num: number) => {
    const next = { ...checked, [num]: !checked[num] };
    setChecked(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
  };

  const count = Object.values(checked).filter(Boolean).length;
  const messages = [
    "시작이 반입니다!",
    "좋은 출발이에요!",
    "잘 하고 있어요!",
    "절반 가까이 왔어요!",
    "절반 넘었어요! 대단해요!",
    "정말 잘 하고 있어요!",
    "거의 다 왔어요!",
    "놀라워요!",
    "한 개만 더!",
    "완벽해요! 모두 실천했어요! 🎉",
  ];

  return (
    <div className="mt-8 p-5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold text-lg mb-1">오늘의 실천 체크리스트</h3>
      <p className="text-sm text-gray-500 mb-4">
        실천한 항목을 체크하세요. 기록은 브라우저에 저장됩니다.
      </p>
      <div className="space-y-2">
        {items.map((item) => (
          <label
            key={item.number}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
              checked[item.number]
                ? "bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <input
              type="checkbox"
              checked={!!checked[item.number]}
              onChange={() => toggle(item.number)}
              className="w-5 h-5 rounded accent-green-500"
            />
            <span
              className={
                checked[item.number]
                  ? "line-through text-gray-400"
                  : ""
              }
            >
              <strong>#{item.number}</strong> {item.title}
            </span>
          </label>
        ))}
      </div>
      <div className="mt-4 text-center">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(count / items.length) * 100}%` }}
          />
        </div>
        <p className="text-sm font-medium">
          {count}/{items.length} 실천 완료 —{" "}
          {messages[Math.min(count, messages.length) - 1] || "체크를 시작해보세요!"}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Daily Mission
   ───────────────────────────────────────────── */

function DailyMission({
  bookId,
  items,
}: {
  bookId: string;
  items: TopItem[];
}) {
  const [todayItem, setTodayItem] = useState<TopItem | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // 날짜 기반으로 미션 순환
    const today = new Date();
    const dayIndex =
      (today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate()) %
      items.length;
    setTodayItem(items[dayIndex]);

    const key = `mission-${bookId}-${today.toISOString().slice(0, 10)}`;
    setDone(localStorage.getItem(key) === "done");
  }, [bookId, items]);

  const completeMission = () => {
    const key = `mission-${bookId}-${new Date().toISOString().slice(0, 10)}`;
    localStorage.setItem(key, "done");
    setDone(true);
  };

  if (!todayItem) return null;

  return (
    <div
      className={`p-5 rounded-xl border-2 transition-all ${
        done
          ? "border-green-400 bg-green-50 dark:bg-green-950"
          : "border-blue-400 bg-blue-50 dark:bg-blue-950"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-lg">
          {done ? "✅ 오늘의 미션 완료!" : "🎯 오늘의 미션"}
        </h3>
        <span className="text-xs text-gray-500">
          #{todayItem.number}에서 발췌
        </span>
      </div>
      <p className="text-lg font-medium mb-2">{todayItem.mission}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        💡 상황: {todayItem.situation}
      </p>
      {!done && (
        <button
          onClick={completeMission}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          미션 완료!
        </button>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Update History
   ───────────────────────────────────────────── */

function UpdateHistory({ logs }: { logs: UpdateLog[] }) {
  const [open, setOpen] = useState(false);

  if (logs.length === 0) return null;

  return (
    <div className="mt-8">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1"
      >
        <span>{open ? "▼" : "▶"}</span> 업데이트 히스토리 (v
        {logs[0].version})
      </button>
      {open && (
        <div className="mt-3 space-y-3">
          {logs.map((log) => (
            <div
              key={log.version}
              className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900 text-sm"
            >
              <div className="font-semibold mb-1">
                v{log.version} — {log.date}
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                {log.changes.map((change, i) => (
                  <li key={i}>{change}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Top 10 Card
   ───────────────────────────────────────────── */

function TopItemCard({
  item,
  isHighlighted,
}: {
  item: TopItem;
  isHighlighted: boolean;
}) {
  return (
    <div
      className={`p-5 rounded-xl border transition-all ${
        isHighlighted
          ? "border-blue-400 bg-blue-50 dark:bg-blue-950 ring-2 ring-blue-300"
          : "border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
          {item.number}
        </span>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-1">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            {item.description}
          </p>

          {/* 상황 트리거 카드 */}
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 mb-2">
            <p className="text-sm">
              <span className="font-semibold">🔔 이럴 때 적용하세요:</span>{" "}
              {item.situation}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
            <p className="text-sm">
              <span className="font-semibold">✅ 실천법:</span> {item.action}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TOC (Table of Contents) for content tab
   ───────────────────────────────────────────── */

function TOC({
  sections,
  onNavigate,
}: {
  sections: ContentSection[];
  onNavigate: (id: string) => void;
}) {
  return (
    <nav
      id="toc"
      className="p-5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 mb-8 scroll-mt-24"
    >
      <h3 className="font-bold text-lg mb-3">📋 목차</h3>
      <ol className="space-y-2">
        {sections.map((section, i) => (
          <li key={section.id}>
            <button
              onClick={() => onNavigate(section.id)}
              className="text-left text-blue-600 dark:text-blue-400 hover:underline"
            >
              {i + 1}. {section.title}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   Back to TOC Button
   ───────────────────────────────────────────── */

function BackToTOC() {
  const scrollToTOC = () => {
    document.getElementById("toc")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTOC}
      className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-blue-500 transition-colors mt-8 mb-4"
    >
      ↑ 목차로 돌아가기
    </button>
  );
}

/* ─────────────────────────────────────────────
   Main GuideBook Component
   ───────────────────────────────────────────── */

export default function GuideBook({
  bookId,
  title,
  emoji,
  subtitle,
  topItems,
  sections,
  updateLogs,
  currentVersion,
}: GuideBookProps) {
  const [activeTab, setActiveTab] = useState<"top10" | "content">("top10");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
        >
          ← 전체 목록으로
        </Link>
      </div>

      <header className="text-center mb-10">
        <span className="text-5xl mb-4 block">{emoji}</span>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
        <p className="text-xs text-gray-400 mt-2">
          v{currentVersion} · 계속 업데이트됩니다
        </p>
      </header>

      {/* Tab Switcher */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
        <button
          onClick={() => setActiveTab("top10")}
          className={`flex-1 py-3 text-center font-semibold transition-all border-b-2 ${
            activeTab === "top10"
              ? "border-blue-500 text-blue-600 dark:text-blue-400"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          🏆 꼭 알아야 할 10가지
        </button>
        <button
          onClick={() => setActiveTab("content")}
          className={`flex-1 py-3 text-center font-semibold transition-all border-b-2 ${
            activeTab === "content"
              ? "border-blue-500 text-blue-600 dark:text-blue-400"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          📖 전체 내용
        </button>
      </div>

      {/* ─── Top 10 Tab ─── */}
      {activeTab === "top10" && (
        <div>
          {/* TTS */}
          <div className="mb-6">
            <TTSButton items={topItems} />
            <p className="text-xs text-gray-400 mt-2">
              출퇴근길에 반복 청취하면 자연스럽게 암기됩니다.
              <br />
              &quot;5번째는 뭐였지?&quot; → 바로 떠올릴 수 있을 때까지.
            </p>
          </div>

          {/* Daily Mission */}
          <div className="mb-8">
            <DailyMission bookId={bookId} items={topItems} />
          </div>

          {/* Top 10 Cards */}
          <div className="space-y-4">
            {topItems.map((item) => (
              <TopItemCard key={item.number} item={item} isHighlighted={false} />
            ))}
          </div>

          {/* Checklist */}
          <Checklist bookId={bookId} items={topItems} />

          {/* Update History */}
          <UpdateHistory logs={updateLogs} />
        </div>
      )}

      {/* ─── Content Tab ─── */}
      {activeTab === "content" && (
        <div>
          <TOC sections={sections} onNavigate={scrollTo} />

          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-16 scroll-mt-24"
            >
              <h2 className="text-2xl font-bold mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                {section.title}
              </h2>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                {section.body}
              </div>
              <BackToTOC />
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
