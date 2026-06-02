import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Toaster } from 'sonner';



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

    icons: {
        icon: [
            'icons/icon-512.png',
            'icons/icon-192.png',
            'icons/icon-32.png',
            'icons/icon-16.png',
        ],
        apple: 'icons/apple-touch-icon.png',
        shortcut: 'icons/icon-16.png',
    },

    openGraph: {
        title: 'Автосервис в Москве',
        description: 'Гарантия качества, лучшие цены ',
        images: [
            {
                url: 'icons/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'АвтоМастер — Автосервис',
            },
        ],
        type: 'website',
        locale: 'ru_RU',
    },

};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
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