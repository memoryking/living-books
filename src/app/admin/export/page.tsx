import { generateAllWidgets } from "@/lib/generate-widget";
import { generateAllDetails } from "@/lib/generate-detail-page";
import WidgetExportClient from "./WidgetExportClient";

export const metadata = {
  title: "위젯 내보내기 — 관리자",
  robots: "noindex",
};

export default function ExportPage() {
  const widgets = generateAllWidgets();
  const details = generateAllDetails();

  return (
    <WidgetExportClient
      widgets={widgets.map((w) => ({
        id: w.book.id,
        title: w.book.title,
        emoji: w.book.emoji,
        subtitle: w.book.subtitle,
        html: w.html,
        charCount: w.html.length,
      }))}
      details={details.map((d) => ({
        id: d.id,
        title: d.title,
        emoji: d.emoji,
        detailHtml: d.detailHtml,
        detailSize: d.detailSize,
        coverPrompt: d.coverPrompt,
        marketingCopy: d.marketingCopy,
      }))}
    />
  );
}
