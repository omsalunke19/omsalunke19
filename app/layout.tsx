import type { Metadata, Viewport } from "next";
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
  title: "Om Salunke | AI & Data Engineer",
  description:
    "Master of Science in Artificial Intelligence at University at Buffalo. Specializing in distributed systems, NLP pipelines, and cloud architecture.",
  keywords: [
    "Om Salunke",
    "AI Engineer",
    "Data Engineer",
    "Machine Learning",
    "Databricks",
    "AWS",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Om Salunke" }],
  openGraph: {
    title: "Om Salunke | AI & Data Engineer",
    description:
      "Master of Science in Artificial Intelligence at University at Buffalo",
    type: "website",
    siteName: "Om Salunke Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Salunke | AI & Data Engineer",
    description:
      "Master of Science in Artificial Intelligence at University at Buffalo",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
