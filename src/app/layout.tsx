import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Jonathan Yue - Full Stack Developer",
  description: "Personal portfolio and resume of Jonathan Yue, Full Stack Developer and Game Developer",
  keywords: ["developer", "portfolio", "resume", "full stack", "game developer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-24 md:py-28">
          {children}
        </main>
        <footer className="py-8 text-center text-secondary-text text-sm mt-12">
          <p>&copy; {new Date().getFullYear()} Jonathan Yue. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
