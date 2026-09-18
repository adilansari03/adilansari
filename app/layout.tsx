import { siteData } from "./data";
import type { Metadata } from "next";
import { Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  ...siteData,
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    title: siteData.title,
    description: siteData.description,
    siteName: siteData.title,
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.title,
    description: siteData.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050506] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
