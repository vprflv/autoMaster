'use client';

import React from 'react';

export default function Hero() {
    return (
        <section className="pt-36 md:pt-52 pb-20 md:pb-40 overflow-hidden relative min-h-[90dvh] flex items-center">

            {/* Фон */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/hero-bg.jpg')",
                    filter: "blur(1px)",
                    transform: "scale(1.08)"
                }}
            />
            <div className="absolute inset-0 bg-black/75" />

            {/* Контент */}
            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter mb-6 md:mb-10 opacity-0 animate-slideFromLeft leading-tight">
                    <span className="text-[#82b84a]">Лучший</span> сервис
                </h1>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter mb-12 md:mb-16 opacity-0 animate-slideFromLeft delay-300 text-white leading-tight">
                    для вашего авто
                </h1>

                <p className="text-lg sm:text-xl text-[#82b84a] max-w-2xl mx-auto mb-16 md:mb-24 opacity-0 animate-fadeIn delay-700 font-medium px-4">
                    Качественный ремонт • Адекватные цены • Гарантия на работу
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeIn delay-900 px-4">
                    <a
                        href="#booking"
                        className="bg-transparent border-3 border-[#82b84a] text-[#82b84a]
                        px-8 sm:px-12 md:px-14 py-4 sm:py-5 md:py-6 rounded-3xl
                        font-medium text-base sm:text-lg transition-all
                        hover:shadow-[0_0_20px_#82b84a]
                        hover:shadow-[#82b84a]/70
                        hover:border-[#82b84a]"
                    >
                        Записаться сейчас
                    </a>
                </div>
            </div>
        </section>
    );
}