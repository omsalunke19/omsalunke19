import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Om Salunke - Creative Developer | AI Engineer",
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
};

export const viewport: Viewport = {
  themeColor: "#0b080c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans`}>{children}</body>
    </html>
  );
}
