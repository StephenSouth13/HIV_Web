import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${montserrat.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'QuachThanhLong',
      title: 'HIV Project',
      description: 'A project for managing HIV-related data',
      keywords: ['HIV', 'healthcare', 'data management'],
      favico: 'https://www.quachthanhlong.com/Logo.png',
      authors: [
        {
          name: 'Quach Thanh Long',
          url: 'https://github.com/StephenSouth13',
        },
      ],
    };
