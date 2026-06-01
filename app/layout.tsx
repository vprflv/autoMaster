import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Dancing_Script } from 'next/font/google';
import "./globals.css";

const dancingScript = Dancing_Script({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-dancing',
    display: 'swap',
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    title: "АвтоМастер",
    description: "Автосервис АвтоМастер",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"   // ← важно!
            className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} font-sans h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}