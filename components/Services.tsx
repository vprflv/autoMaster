'use client';

import React from 'react';
import {services} from "@/config/services";

export default function Services() {


    return (
        <section id="services" className="py-16 md:py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <div className="uppercase tracking-widest text-xs text-white mb-3">НАШИ УСЛУГИ</div>
                    <h2 className="text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tight text-white">
                        Что мы ремонтируем
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden cursor-pointer rounded-3xl aspect-[4/3] bg-zinc-800
                                        transition-all duration-500"
                        >
                            {/* Фото */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-500
                                           "
                            />

                            {/* Градиент затемнения */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                            {/* Текст */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 transition-all">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>


                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#82b84a]
                                          transition-all duration-300 rounded-3xl" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}