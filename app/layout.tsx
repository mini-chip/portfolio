import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MINHEE's Portfolio",
  description: "포트폴리오",
  generator: "Minhee",
  icons: {
    icon: "/logo.png"
  },
  openGraph: {
    title: "MINHEE's Portfolio",
    description: "포트폴리오",
    url: "https://your-domain.com",
    siteName: "MINHEE's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MINHEE's Portfolio"
      }
    ],
    locale: "ko_KR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
