import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "АэроБалтСервис - Авиаперевозки грузов из Санкт-Петербурга",
  description: "Профессиональные авиаперевозки грузов. 27 лет опыта. Грузовой агент Аэрофлот.",
  generator: "v0.app",
  icons: {
    icon: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`font-sans antialiased max-w-[1200px] mx-auto`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
