'use client';

import React from 'react';
import { Shield, Clock, Star } from 'lucide-react';

export default function Advantages() {
    const advantages = [
        {
            icon: <Shield className="w-8 h-8 text-[#941dc5]" />,
            title: "Гарантия до 1 года",
            desc: "На все работы и запчасти"
        },
        {
            icon: <Clock className="w-8 h-8 text-[#941dc5]" />,
            title: "Прозрачные цены",
            desc: "Без скрытых платежей"
        },
        {
            icon: <Star className="w-8 h-8 text-[#941dc5]" />,
            title: "Опытные мастера",
            desc: "Средний стаж — 12 лет"
        },
    ];

    return (
        <section id="advantages" className="py-16 md:py-20 text-[#82b84a] bg-[#020003]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                    {/* Левая колонка - текст */}
                    <div>
                        <div className="uppercase text-xs tracking-widest text-white mb-4">ПОЧЕМУ МЫ</div>
                        <h2 className="text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tighter leading-tight">
                            Качество, которому<br />можно доверять
                        </h2>

                        <div className="mt-10 md:mt-12 space-y-8 md:space-y-10">
                            {advantages.map((adv, i) => (
                                <div key={i} className="flex gap-5 md:gap-6">
                                    <div className="text-zinc-900 flex-shrink-0 mt-1">
                                        {adv.icon}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-lg md:text-xl">{adv.title}</div>
                                        <div className="text-white mt-1 text-sm md:text-base leading-relaxed">
                                            {adv.desc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Правая колонка - блок 98% */}
                    <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 aspect-[4/3] sm:aspect-[5/4] md:aspect-[4/3]
                                   flex items-center justify-center relative overflow-hidden mt-8 md:mt-0">

                        {/* Фоновое изображение */}
                        <img
                            src="/advantages.jpg"
                            alt="Автосервис"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Тёмный overlay */}
                        <div className="absolute inset-0 bg-black/60" />

                        {/* Контент 98% */}
                        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                            <div>
                                <div className="text-6xl sm:text-7xl md:text-8xl font-semibold text-zinc-900 mb-4">
                                    <span className="text-[#82b84a]">98%</span>
                                </div>
                                <div className="font-medium text-white text-lg md:text-xl leading-tight">
                                    Клиентов возвращаются<br />к нам снова
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}