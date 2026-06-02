'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-[#020003] text-white flex items-center">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <div className="flex justify-center mb-8">
                    <CheckCircle className="w-24 h-24 text-[#82b84a]" />
                </div>

                <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6">
                    Заявка отправлена!
                </h1>

                <p className="text-xl text-[#82b84a] mb-4">
                    Спасибо! Мы получили вашу заявку.
                </p>
                <p className="text-zinc-400 text-lg mb-12">
                    Наш менеджер свяжется с вами в ближайшее время (обычно в течение 15 минут).
                </p>

                <div className="space-y-4">
                    <Link
                        href="/"
                        className="inline-block bg-[#82b84a] hover:bg-[#6fa13d] text-black font-semibold px-12 py-5 rounded-3xl text-lg transition-all hover:scale-105 active:scale-95"
                    >
                        Вернуться на главную
                    </Link>

                    <p className="text-sm text-zinc-500 mt-8">
                        Если у вас есть вопросы — звоните:<br />
                        <a href="tel:+74951234567" className="text-[#82b84a] hover:underline">+7 (495) 123-45-67</a>
                    </p>
                </div>
            </div>
        </div>
    );
}