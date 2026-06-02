import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Dancing_Script } from 'next/font/google';
import "./globals.css";
import { Toaster } from 'sonner';

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
    description: "Автосервис в Москве",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable}`}>
        <body className="min-h-full flex flex-col antialiased">
        {children}


        <Toaster
            position="top-center"
            richColors
            closeButton
            theme="dark"
            duration={5000}
        />
        </body>
        </html>
    );
}