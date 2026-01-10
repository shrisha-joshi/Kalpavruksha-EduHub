import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalpavruksha EduHub | High-Quality Academic Projects & Resources",
  description: "Get affordable, high-quality academic projects, expert classes, and comprehensive study resources for university students. VTU & Autonomous college support with timely delivery.",
  keywords: ["academic projects", "VTU projects", "study resources", "university notes", "PYQ", "backlog classes", "semester projects", "minor projects", "major projects"],
  authors: [{ name: "Kalpavruksha EduHub" }],
  creator: "Kalpavruksha EduHub",
  publisher: "Kalpavruksha EduHub",
  metadataBase: new URL('https://kalpavrukshaedu.vercel.app'),
  verification: {
    google: "3I9iGHeDeDLRzzePUKbtqKY6yzL7APZbnHEZcIYOhJw",
  },
  openGraph: {
    title: "Kalpavruksha EduHub | Academic Excellence",
    description: "High-quality, affordable academic projects and resources for university students",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalpavruksha EduHub",
    description: "Academic projects and resources for university students",
  },
  icons: {
    icon: [
      { url: '/kalpa-tree.png', sizes: 'any' },
    ],
    apple: '/kalpa-tree.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
