import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter"
})

export const metadata: Metadata = {
    title: "Jochem Meurer - Software Engineer",
    description: "Portfolio of Jochem, Software Engineer from The Netherlands specializing in Laravel",
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
