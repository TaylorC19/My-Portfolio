import "./globals.css";
import type { Metadata } from "next";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Taylor Crouch | Full-Stack Software Engineer",
  description:
    "Tokyo-based full-stack software engineer with 3+ years building production web applications and internal business systems across TypeScript, Vue, Go, Java, PHP, SQL/NoSQL, and AWS.",
  openGraph: {
    title: "Taylor Crouch | Full-Stack Software Engineer",
    description:
      "Tokyo-based full-stack software engineer with 3+ years building production web applications and internal business systems across TypeScript, Vue, Go, Java, PHP, SQL/NoSQL, and AWS.",
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
