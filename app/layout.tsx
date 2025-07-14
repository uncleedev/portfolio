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
  title: "Portfolio",
  description: "UncleDev's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <meta name="google-site-verification" content="dIR1o7kxZOClQRWIzwH4dN774AJJWQ8AB17iEsyVbV4" />
      <meta name="keywords" content="uncledev, Developer," />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-[#053133] via-[#4A7C7A] to-[#053133]`}
      >
        {children}
      </body>
    </html>
  );
}
