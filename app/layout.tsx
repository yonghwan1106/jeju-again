import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JejU-Again - 제주어게인",
  description: "데이터 기반 관광약자-지역상생 맞춤형 내비게이션",
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
        <Navigation />
        {children}
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏝️</span>
                <div>
                  <p className="font-bold text-lg">JejU-Again (제주어게인)</p>
                  <p className="text-sm text-gray-400">
                    2025 제주관광 데이터 활용 공모전 출품작
                  </p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm text-gray-400">
                  데이터 기반 관광약자-지역상생 맞춤형 내비게이션
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  COPYRIGHT © 2025 JejU-Again
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
