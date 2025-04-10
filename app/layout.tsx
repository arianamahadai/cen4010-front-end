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
  title: "SkyCast",
  description: "Weather made clear",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>SkyCast</title>
        <meta name="description" content="Weather made clear" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="p-4 flex justify-center items-center border-b border-gray-200 dark:border-gray-800">
          <img src="/globe.svg" alt="SkyCast Logo" className="h-10" />
        </header>
        {children}
      </body>
    </html>
  );
}

