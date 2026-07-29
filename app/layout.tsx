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
    icon: "favicon.svg",
    shortcut: "favicon.svg",
  },
  openGraph: {
    title: "Kang Hee Sung Portfolio | Full-stack Developer",
    description:
      "PUBG API 텔레메트리 연동, Supabase Auth/RLS, Gemini AI 분석까지 1인 운영 서비스 BGMS.kr을 구축한 풀스택 개발자 강희성의 포트폴리오입니다.",
    url: "https://ka6865.github.io/KHS_PF/",
    siteName: "Kang Hee Sung Portfolio",
    images: [
      {
        url: "portfolio-assets/bgms-feature-search.png",
        width: 1200,
        height: 630,
        alt: "Kang Hee Sung Portfolio BGMS Feature Preview",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kang Hee Sung Portfolio | Full-stack Developer",
    description:
      "PUBG API 텔레메트리 연동, Supabase Auth/RLS, Gemini AI 분석까지 1인 운영 서비스 BGMS.kr을 구축한 풀스택 개발자 강희성의 포트폴리오입니다.",
    images: ["portfolio-assets/bgms-feature-search.png"],
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
