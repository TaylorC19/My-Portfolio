import "./globals.css";
import type { Metadata } from "next";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Taylor Crouch | Full-stack Web Developer",
  description:
    "Portfolio of Taylor Crouch, a Tokyo-based full-stack web developer building multilingual web applications across modern stacks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <body className={`${inter.className} text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
