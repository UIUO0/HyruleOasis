import type { Metadata } from "next";
import { Cairo, Noto_Kufi_Arabic, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap"
});

const kufi = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-kufi",
  display: "swap"
});

const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-naskh",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Hyrule Oasis | أسطورة زيلدا بالعربي",
  description: "منصة عربية غامرة لعالم أسطورة زيلدا مع تجربة تمرير سردية وبدون حرق."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${kufi.variable} ${naskh.variable}`}>{children}</body>
    </html>
  );
}
