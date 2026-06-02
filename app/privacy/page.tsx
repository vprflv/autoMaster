'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#020003] text-white">
            <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[#82b84a] hover:text-[#a8fc85] transition-colors mb-12"
                >
                    ← Вернуться на главную
                </Link>

                <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-10">
                    Политика конфиденциальности
                </h1>

                <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed space-y-8 text-[15px] md:text-base">
                    <p>
                        Мы в «АвтоМастер» серьёзно относимся к защите ваших персональных данных.
                        Эта политика объясняет, какую информацию мы собираем и как её используем.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-12">1. Какие данные мы собираем</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>ФИО</li>
                        <li>Номер телефона</li>
                        <li>Марка и модель автомобиля</li>
                        <li>Дополнительная информация из формы записи</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-12">2. Для каких целей</h2>
                    <p>Мы используем ваши данные исключительно для:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Обработки заявки на запись</li>
                        <li>Связь с вами для подтверждения записи</li>
                        <li>Улучшения качества обслуживания</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-12">3. Передача третьим лицам</h2>
                    <p>Мы не продаём и не передаём ваши данные третьим лицам, кроме случаев, предусмотренных законодательством РФ.</p>

                    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 mt-16">
                        <p className="text-[#82b84a] font-medium">Последнее обновление: 01 июня 2026 года</p>
                    </div>
                </div>
            </div>
        </div>
    );
}