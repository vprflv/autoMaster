'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Menu, X } from 'lucide-react';

interface NavbarProps {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
    return (
        <nav className="bg-[#020003] sticky top-0 z-50 border-b border-[#82b84a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                {/* Логотип */}
                <div className="flex-shrink-0">
                    <Link
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setIsMenuOpen(false);
                        }}
                        className="block w-20 h-20 sm:w-24 sm:h-24 relative group scale-150"
                    >
                        <Image
                            src="/logo.png"
                            alt="АвтоМастер"
                            fill
                            sizes="(max-width: 640px) 80px, 96px"
                            className="object-contain transition-all duration-300
                            group-hover:drop-shadow-[0_0_20px_#beff8d]
                            group-hover:drop-shadow-[0_0_35px_#beff8d]"
                            priority
                        />
                    </Link>
                </div>

                {/* Десктопное меню */}
                <div className="hidden md:flex items-center gap-10 text-md font-medium absolute left-1/2 -translate-x-1/2">
                    <a
                        href="#services"
                        className="group relative px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-[#82b84a]"
                    >
                        Услуги
                        <span className="absolute -bottom-1 left-0 h-[2.5px] w-0 bg-[#a8fc85] group-hover:w-full transition-all duration-300 origin-left rounded-full"></span>
                    </a>
                    <a
                        href="#advantages"
                        className="group relative px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-[#82b84a]"
                    >
                        Преимущества
                        <span className="absolute -bottom-1 left-0 h-[2.5px] w-0 bg-[#a8fc85] group-hover:w-full transition-all duration-300 origin-left rounded-full"></span>
                    </a>
                    <a
                        href="#booking"
                        className="group relative px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-[#82b84a]"
                    >
                        Записаться
                        <span className="absolute -bottom-1 left-0 h-[2.5px] w-0 bg-[#a8fc85] group-hover:w-full transition-all duration-300 origin-left rounded-full"></span>
                    </a>
                </div>

                {/* Контакты (десктоп) */}
                <div className="hidden md:flex flex-col items-start gap-3 text-md flex-shrink-0">

                    <p

                        className="flex items-center gap-3 hover:text-white transition-colors font-medium"
                    >
                        <Phone className="w-4 h-4 text-[#941dc5] flex-shrink-0" />
                        <span className="text-[#82b84a]">+7 (495) 123-45-67</span>
                    </p>

                    <div className="flex items-center gap-3 text-white text-xs">
                        <MapPin className="w-4 h-4 text-[#941dc5] flex-shrink-0" />
                        <span>Москва, ул. Автомобильная, 15</span>
                    </div>
                </div>

                {/* Кнопка гамбургер (мобильные) */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white p-2 focus:outline-none"
                    aria-label="Открыть меню"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Мобильное меню */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#020003] border-t border-[#82b84a]">
                    <div className="px-6 py-10 flex flex-col gap-8 text-lg font-medium">
                        <a
                            href="#services"
                            className="hover:text-[#82b84a] transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Услуги
                        </a>
                        <a
                            href="#advantages"
                            className="hover:text-[#82b84a] transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Преимущества
                        </a>
                        <a
                            href="#booking"
                            className="hover:text-[#82b84a] transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Записаться
                        </a>

                        {/* Контакты в мобильном меню */}
                        <div className="pt-6 border-t border-zinc-800 flex flex-col gap-4 text-sm">

                            <a
                                href="tel:+74951234567"
                                className="flex items-center gap-3 text-[#82b84a] hover:text-white transition-colors"
                            >
                                <div className="w-5 flex justify-center">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span>+7 (495) 123-45-67</span>
                            </a>

                            <div className="flex items-center gap-3 text-white">
                                <div className="w-5 flex justify-center">
                                    <MapPin className="w-5 h-5 text-[#941dc5]" />
                                </div>
                                <span>Москва, ул. Автомобильная, 15</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}