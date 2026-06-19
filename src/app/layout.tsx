import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

const SITE_URL = "https://kiitos-base-website.vercel.app";
const SITE_NAME = "kiitos!BASE";
const SITE_DESC =
  "株式会社水平線が運営する児童発達支援事業所。船橋市前貝塚町の「kiitos!BASE」は、2〜6歳の未就学児の心身の根っこをすくすく育てる療育教室です。見学・体験を随時受付中。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "kiitos!BASE｜児童発達支援（千葉県船橋市）",
    template: "%s｜kiitos!BASE",
  },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  keywords: [
    "児童発達支援",
    "船橋市",
    "前貝塚町",
    "塚田駅",
    "kiitos",
    "BASE",
    "療育",
    "未就学児",
    "発達支援",
  ],
  authors: [{ name: "株式会社水平線" }],
  openGraph: {
    title: "kiitos!BASE｜児童発達支援",
    description: SITE_DESC,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "kiitos!BASE｜児童発達支援",
    description: SITE_DESC,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#FFFDF0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
