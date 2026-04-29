import "./globals.css";
import type { Metadata } from "next";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Taylor Crouch | Full-stack Web Engineer",
  description:
    "Portfolio of Taylor Crouch, a Tokyo-based full-stack web engineer building multilingual web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
