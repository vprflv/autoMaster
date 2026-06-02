'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#020003] text-white flex items-center">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <div className="text-[120px] md:text-[180px] font-bold tracking-tighter text-[#82b84a] opacity-20 mb-8">
                    404
                </div>

                <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6">
                    Страница не найдена
                </h1>

                <p className="text-xl text-zinc-400 mb-12">
                    К сожалению, страница, которую вы ищете, не существует или была перемещена.
                </p>

                <Link
                    href="/"
                    className="inline-block bg-[#82b84a] hover:bg-[#6fa13d] text-black font-semibold px-10 py-5 rounded-3xl text-lg transition-all hover:scale-105 active:scale-95"
                >
                    Вернуться на главную
                </Link>
            </div>
        </div>
    );
}