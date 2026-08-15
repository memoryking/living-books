import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "살아있는 정보책 | Living Books",
  description: "사람들이 진짜 궁금해하는 것들에 대한 시원한 답변. 계속 업데이트되는 살아있는 정보책.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* embed 모드: 비타코치 iframe에서 열릴 때 "전체 목록으로" 링크 숨김 */}
        <script dangerouslySetInnerHTML={{ __html: `
          if(window.location.search.includes('embed=true')){
            document.documentElement.classList.add('embed-mode');
          }
        `}} />
        <style dangerouslySetInnerHTML={{ __html: `
          .embed-mode a[href="/"] { display: none !important; }
          .embed-mode footer { display: none !important; }
        `}} />
      </body>
    </html>
  );
}
