import "./globals.css";
import type { Metadata } from "next";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Taylor Crouch | Full-stack Web Engineer",
  description:
    "Tokyo-based full-stack web engineer building production web applications across frontend, backend, databases, infrastructure, and multilingual product delivery.",
  openGraph: {
    title: "Taylor Crouch | Full-stack Web Engineer",
    description:
      "Tokyo-based full-stack web engineer building production web applications across frontend, backend, databases, infrastructure, and multilingual product delivery.",
  },
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
