import type React from "react"
import { NavBar } from "@/components/nav-bar"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Future-Vision",
  description: "A Next.js application with auto-playing videos",
   
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        <NavBar />
        <main className="">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'