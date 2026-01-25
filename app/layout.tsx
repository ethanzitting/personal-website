import { BackgroundDots } from "@/src/components/backgroundDots";
import { Footer } from "@/src/components/footer";
import { NavBar } from "@/src/components/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
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
  title: "Ethan Zitting",
  description: "My personal website. I build and maintain high-scale web products with real business impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <BackgroundDots />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen max-w-275 mx-auto bg-[#161616] text-[#9a9a9a]`}
      >
        <NavBar />
        {children}
        <Footer className="mt-auto"/>
      </body>
    </html>
  );
}
