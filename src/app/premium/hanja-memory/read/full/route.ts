import { generateWidget } from '@/lib/generate-widget';

export const dynamic = 'force-static';

// Direct reading and exported embeds use exactly the same classic reader.
export function GET() {
  const widget = generateWidget('hanja-memory');
  if (!widget) return new Response('Not Found', { status: 404 });
  const body = widget.replaceAll('https://living-books-beta.vercel.app', '');
  return new Response(`<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>그림으로 기억하는 한자 453 — 전체 본문</title><style>body{margin:0;background:#fff}</style></head><body>${body}</body></html>`, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
