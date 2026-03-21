import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingBanner from "@/components/ui/FloatingBanner";
import GrandOpeningPopup from "@/components/ui/GrandOpeningPopup";
import AppProviders from "@/components/providers/AppProviders";

// 힙한 영문 폰트: Inter (모던하고 깔끔한 산세리프)
const inter = Inter({
  variable: "--font-en-title",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// 영문 본문 폰트: Inter (동일하게 적용)
const interBody = Inter({
  variable: "--font-en-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// 큰 글자용 영문 폰트: Playfair Display (우아한 세리프)
const playfairDisplay = Playfair_Display({
  variable: "--font-en-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// 한글 UI: globals.css @font-face Paperlogy (--font-kr-heading / --font-kr-body)

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "HOMMAGE CLINIC | 우리는 당신의 아름다움에 경의를 표합니다",
  description:
    "오마쥬 클리닉 - 여성의학, 피부, 바디 클리닉. 우리는 당신의 아름다움에 경의를 표합니다. 미술관 전시회처럼 고급스럽고 깔끔한 케어를 경험하세요.",
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${interBody.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="font-body-kr antialiased">
        <AppProviders>
          <SmoothScroll>
            <Header />
            <div className="min-h-screen pb-20 lg:pb-0">
              {children}
            </div>
            <Footer />
          </SmoothScroll>
          <FloatingBanner />
          <GrandOpeningPopup />
        </AppProviders>
      </body>
    </html>
  );
}
