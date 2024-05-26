import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/customs/Navbar";
import SocialMedia from "@/components/customs/SocialMedia";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "h-screen relative flex flex-col w-full dark theme-green max-w-[2100px] mx-auto"
        )}
      >
        {/* <MousepointerBG /> */}

        <div className="w-[90%] bg-red-500/0 mx-auto">
          <SocialMedia />
        </div>
        {children}
        <div className="lg:absolute lg:right-[1rem] lg:top-1/2 lg:-translate-y-1/2">
          <Navbar />
        </div>
      </body>
    </html>
  );
}
