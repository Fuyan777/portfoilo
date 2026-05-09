import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "FuyanTech | Fuya Yamada Portfolio",
    template: "%s | FuyanTech",
  },
  description:
    "個人開発者 Fuya Yamada のポートフォリオサイト。iOSアプリ・Web・生成AIを活用した個人開発の制作物と、その制作プロセスを発信しています。",
  metadataBase: new URL("https://fuyantech.jp"),
  openGraph: {
    title: "FuyanTech | Fuya Yamada Portfolio",
    description:
      "個人開発者 Fuya Yamada のポートフォリオサイト。iOSアプリ・Web・生成AIを活用した個人開発の制作物と、その制作プロセスを発信しています。",
    url: "https://fuyantech.jp",
    siteName: "FuyanTech",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
