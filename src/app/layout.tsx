import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lora } from "next/font/google";
import { Azeret_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/content";
import SmoothScroll from "@/components/SmoothScroll";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", style: ["normal", "italic"] });
const azeretMono = Azeret_Mono({ subsets: ["latin"], variable: "--font-azeret" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.tagline,
  icons: { icon: "/w-logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${lora.variable} ${azeretMono.variable} antialiased`}
    >
      <body className="flex flex-col relative bg-black">
        {/* Noise overlay */}
        <div className="noise-overlay" />

        <SmoothScroll>
          {children}
        </SmoothScroll>

        {/* Bottom gradient blur */}
        <div className="bottom-blur" />
      </body>
    </html>
  );
}
