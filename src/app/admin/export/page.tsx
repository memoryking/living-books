import { generateAllWidgets } from "@/lib/generate-widget";
import { generateAllDetails } from "@/lib/generate-detail-page";
import WidgetExportClient from "./WidgetExportClient";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "위젯 내보내기 — 관리자",
  robots: "noindex",
};

function readBookMarkdown(bookId: string): string {
  const contentDir = path.join(process.cwd(), "data", bookId, "content");
  try {
    const files = fs.readdirSync(contentDir).sort();
    return files
      .filter((f) => f.endsWith(".md"))
      .map((f) => fs.readFileSync(path.join(contentDir, f), "utf-8"))
      .join("\n\n---\n\n");
  } catch {
    return "";
  }
}

export default function ExportPage() {
  const widgets = generateAllWidgets();
  const details = generateAllDetails();

  return (
    <WidgetExportClient
      widgets={[{id:'hanja-memory',title:'그림으로 기억하는 한자 453 · 암기앱',emoji:'字',subtitle:'오늘 학습 · 미리 복습 · 메타 학습 · 쓰기 비교',html:'',charCount:0,markdown:''}, ...widgets.map((w) => ({
        id: w.book.id === 'hanja-memory' ? 'hanja' : w.book.id,
        title: w.book.title + (w.book.id === 'hanja-memory' ? ' · 전자책' : ''),
        emoji: w.book.emoji,
        subtitle: w.book.subtitle,
        html: w.html,
        charCount: w.html.length,
        markdown: readBookMarkdown(w.book.id),
      }))]}
      details={details.map((d) => ({
        id: d.id,
        title: d.title,
        emoji: d.emoji,
        detailHtml: d.detailHtml,
        detailSize: d.detailSize,
        coverPrompt: d.coverPrompt,
        marketingCopy: d.marketingCopy,
        thumbnailPrompt: d.thumbnailPrompt,
        metaDesc: d.metaDesc,
      }))}
    />
  );
}
