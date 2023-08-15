import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/dom/Header";
import CustomCanvas from "@/components/webgl/CustomCanvas";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CustomCanvas />
        <Header />
        {children}
      </body>
    </html>
  );
}
