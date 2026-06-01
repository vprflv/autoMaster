import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#020003] text-zinc-400 py-16 md:py-20 border-t border-zinc-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

                    {/* Контакты */}
                    <div>
                        <div className="text-white font-medium mb-6 text-lg">Контакты</div>
                        <div className="space-y-4 text-sm">
                            <a href="tel:+74951234567" className="flex items-center gap-3 hover:text-[#82b84a] transition-colors">
                                <Phone className="w-5 h-5 text-[#941dc5] flex-shrink-0" />
                                +7 (495) 123-45-67
                            </a>
                            <a href="mailto:info@automaster.ru" className="flex items-center gap-3 hover:text-[#82b84a] transition-colors">
                                <Mail className="w-5 h-5 text-[#941dc5] flex-shrink-0" />
                                info@automaster.ru
                            </a>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-[#82b84a] flex-shrink-0" />
                                Москва, ул. Автомобильная, 15
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-[#82b84a] flex-shrink-0" />
                                Пн–Вс: 08:00 – 22:00
                            </div>
                        </div>
                    </div>

                    {/* Соцсети + копирайт */}
                    <div className="md:col-start-3 flex flex-col justify-between">
                        <div>
                            <div className="text-white font-medium mb-4">Мы в соцсетях</div>
                            <div className="flex gap-6 text-3xl">
                                <a
                                    href="https://vk.com/automaster"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 hover:text-[#82b84a] transition-all hover:scale-110"
                                >
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg"
                                        alt="VK"
                                        className="w-9 h-9 opacity-70 hover:opacity-100"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="text-xs text-zinc-500 mt-10 md:mt-0">
                            © 2026 АвтоМастер. Все права защищены.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}