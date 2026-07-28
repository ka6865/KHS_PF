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
  title: "Kang Hee Sung Portfolio | Full-stack Developer",
  description:
    "PUBG API 텔레메트리 연동, Supabase Auth/RLS, Gemini AI 분석까지 1인 운영 서비스 BGMS.kr을 구축한 풀스택 개발자 강희성의 포트폴리오입니다.",
  keywords: ["풀스택 개발자", "Next.js", "React", "TypeScript", "Supabase", "BGMS.kr", "강희성"],
  authors: [{ name: "강희성" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "강희성 포트폴리오 | 풀스택 개발자",
    description:
      "실제 운영 서비스 BGMS.kr을 직접 개발·개선하는 풀스택 개발자 강희성의 프로젝트와 구현 사례입니다.",
    url: "https://ka6865.github.io/KHS_PF",
    siteName: "강희성 포트폴리오",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/portfolio-assets/bgms-feature-search.png",
        width: 1200,
        height: 630,
        alt: "강희성 포트폴리오 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "강희성 포트폴리오 | 풀스택 개발자",
    description: "BGMS.kr 운영 서비스 구축 및 풀스택 개발 구현 사례",
    images: ["/portfolio-assets/bgms-feature-search.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
