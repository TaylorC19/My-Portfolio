"use client"

import './globals.css'
import type { Metadata } from 'next'
import { Inter, Offside } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
export const offside = Offside({ subsets: ['latin'], weight:['400']})

export const recipenutrishare = localFont({
  src: [
    {
      path: "../../public/fonts/recipenutrishare/KoHo-Regular.ttf",
      weight: "bold",
      style: "normal",
    },
  ],
  variable: "--recipenutrishare",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${recipenutrishare.variable} font-sans`}>
      <head>
        <title>Taylor Crouch Portfolio</title>
        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
