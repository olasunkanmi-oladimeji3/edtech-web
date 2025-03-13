
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import PageLayout from "@/components/page-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TLS - The Learning Space",
  description: "Nigeria's Premier EdTech Platform",
  icons: {
    icon: "/black-Icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <PageLayout>
            <main className="flex-grow">{children}</main>
          </PageLayout>
          <Footer />
        </div>
      </body>
    </html>
  )
}