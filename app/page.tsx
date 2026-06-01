'use client';

import React, {useEffect, useState} from 'react';
import {
    Phone,
    Clock,
    Shield,
    Star,
    MapPin,
    Check,
    ChevronDown,
    Mail,
} from 'lucide-react';
import Link from "next/link";
import Image from 'next/image';
import * as Select from '@radix-ui/react-select';
import * as Checkbox from '@radix-ui/react-checkbox';


export default function AutoServiceLanding() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        carModel: '',
        service: '',
        message: '',
        callback: true,
        agreedToPolicy: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Симуляция отправки (в реальном проекте используйте Resend, Nodemailer или серверное действие)
        await new Promise(resolve => setTimeout(resolve, 1500));

        alert('✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
        setFormData({
            name: '',
            phone: '',
            carModel: '',
            service: '',
            message: '',
            callback: true,
            agreedToPolicy: false,
        });
        setIsSubmitting(false);
    };

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen  text-white font-sans">
            {/* Navbar */}
            <nav className="bg-[#020003] sticky top-0 z-50 border-b border-[#82b84a]">
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                    {/* Логотип слева */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="block w-24 h-24 relative group"
                        >
                            <Image
                                src="/logo.png"
                                alt="АвтоМастер"
                                fill
                                sizes="96px"
                                className="object-contain transition-all duration-300
                                group-hover:drop-shadow-[0_0_20px_#beff8d]
                                group-hover:drop-shadow-[0_0_35px_#beff8d]"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Меню по центру */}
                    <div className="hidden md:flex items-center gap-10 text-sm font-medium absolute left-1/2 -translate-x-1/2">
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

                    {/* Контакты справа */}
                    <div className="hidden md:flex flex-col items-end gap-2 text-sm flex-shrink-0">
                        <p  className="flex items-center gap-2 hover:text-white transition-colors font-medium">
                            <Phone className="w-4 h-4 text-[#941dc5]" />
                            <span className="text-[#82b84a]">+7 (495) 123-45-67</span>
                        </p>
                        <div className="flex items-center gap-2 text-white">
                            <MapPin className="w-4 h-4 text-[#941dc5]" />
                            Москва, ул. Автомобильная, 15
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t bg-white">
                        <div className="px-6 py-8 flex flex-col gap-6 text-lg">
                            <a href="#services" className="hover:text-zinc-500" onClick={() => setIsMenuOpen(false)}>Услуги</a>
                            <a href="#advantages" className="hover:text-zinc-500" onClick={() => setIsMenuOpen(false)}>Преимущества</a>
                            <a href="#booking" className="hover:text-zinc-500" onClick={() => setIsMenuOpen(false)}>Записаться</a>

                        </div>
                    </div>
                )}
            </nav>

            <section className="pt-52 pb-40 overflow-hidden relative">

                {/* Размытое фоновое изображение */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/hero-bg.jpg')",
                        filter: "blur(1px)",
                        transform: "scale(1.08)"
                    }}
                />

                {/* Тёмный overlay */}
                <div className="absolute inset-0 bg-black/75" />

                {/* Контент */}
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

                    <h1 className="text-6xl text-white md:text-7xl font-semibold tracking-tighter mb-10 opacity-0 animate-slideFromLeft">
                        <span className="text-[#82b84a]">Лучший</span> сервис
                    </h1>

                    <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-16 opacity-0 animate-slideFromLeft delay-300 text-white">
                        для вашего авто
                    </h1>

                    <p className="text-xl text-[#82b84a] max-w-2xl mx-auto mb-24 opacity-0 animate-fadeIn delay-700 font-medium">
                        Качественный ремонт • Адекватные цены • Гарантия на работу
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeIn delay-900">
                        <a
                            href="#booking"
                            className="bg-transparent border-3 border-[#82b84a] text-[#82b84a]
                            px-14 py-6 rounded-3xl font-medium text-lg transition-all
                            hover:shadow-[0_0_20px_#82b84a]
                            hover:shadow-[#82b84a]/70
                            hover:border-[#82b84a]"
                        >
                            Записаться сейчас
                        </a>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-20 bg-zinc-700">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="uppercase tracking-widest text-xs text-white mb-3">НАШИ УСЛУГИ</div>
                        <h2 className="text-5xl font-semibold tracking-tight text-white">Что мы ремонтируем</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Диагностика",
                                desc: "Компьютерная и визуальная диагностика всех систем",
                                image: "/services/diagnostics.jpg"
                            },
                            {
                                title: "Техническое обслуживание",
                                desc: "ТО-1, ТО-2, замена масла, фильтров, тормозов",
                                image: "/services/maintenance.jpg"
                            },
                            {
                                title: "Ремонт двигателя",
                                desc: "Капитальный ремонт, ГРМ, турбины, охлаждение",
                                image: "/services/engine.jpg"
                            },
                            {
                                title: "Ходовая часть",
                                desc: "Подвеска, рулевое управление, ступицы, ШРУСы",
                                image: "/services/suspension.jpg"
                            },
                            {
                                title: "Электроника",
                                desc: "ЭБУ, датчики, аккумуляторы, генераторы",
                                image: "/services/electronics.jpg"
                            },
                            {
                                title: "Кузовной ремонт",
                                desc: "Покраска, рихтовка, полировка, антикоррозия",
                                image: "/services/body.jpg"
                            },
                        ].map((service, i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden cursor-pointer rounded-3xl aspect-[4/3] bg-zinc-800"
                            >
                                {/* Фото */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 "
                                />

                                {/* Градиент затемнения */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                {/* Текст */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                                    <p className="text-zinc-300 leading-relaxed">{service.desc}</p>
                                </div>

                                {/* Неоновая подсветка при наведении */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#82b84a] transition-all duration-300 rounded-3xl" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section id="advantages" className="py-20 text-[#82b84a] bg-[#020003]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="uppercase text-xs tracking-widest text-white mb-4">ПОЧЕМУ МЫ</div>
                            <h2 className="text-5xl font-semibold tracking-tighter leading-tight">
                                Качество, которому<br />можно доверять
                            </h2>
                            <div className="mt-10 space-y-8">
                                {[
                                    { icon: <Shield className="w-8 h-8 text-[#941dc5]"  />, title: "Гарантия до 1 года", desc: "На все работы и запчасти" },
                                    { icon: <Clock className="w-8 h-8 text-[#941dc5]" />, title: "Прозрачные цены", desc: "Без скрытых платежей" },
                                    { icon: <Star className="w-8 h-8 text-[#941dc5]" />, title: "Опытные мастера", desc: "Средний стаж — 12 лет" },
                                ].map((adv, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="text-zinc-900">{adv.icon}</div>
                                        <div>
                                            <div className="font-semibold text-xl">{adv.title}</div>
                                            <div className=" text-white mt-1">{adv.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 aspect-[4/3] flex items-center justify-center relative overflow-hidden">

                            {/* Фоновое изображение */}
                            <img
                                src="/advantages.jpg"
                                alt="Автосервис"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Тёмный overlay для читаемости */}
                            <div className="absolute inset-0 bg-black/60" />

                            {/* Контент */}
                            <div className="absolute inset-0 flex items-center justify-center">

                                    <div className="text-6xl md:text-7xl font-semibold mb-4 text-zinc-900"><span className="text-[#82b84a]">98%</span></div>
                                    <div className="ml-7 font-medium text-white leading-tight">
                                        Клиентов возвращаются<br />к нам снова
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Form */}
            <section id="booking" className="py-24 bg-zinc-900 text-white">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="uppercase tracking-widest text-[#82b84a] text-sm mb-3">БЫСТРАЯ ЗАПИСЬ</div>
                        <h2 className="text-5xl font-semibold tracking-tight">Запишитесь на сервис</h2>
                        <p className="text-[#82b84a] mt-4 text-lg">Мы перезвоним в течение 15 минут для подтверждения</p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-zinc-800 border-1 border-[#82b84a] rounded-3xl p-10 md:p-12 space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-white mb-2">Имя и фамилия</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#82b84a] transition-colors"
                                    placeholder="Иван Иванов"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-white mb-2">Телефон <span className="text-red-400">*</span></label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#82b84a] transition-colors"
                                    placeholder="+7 (999) 123-45-67"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-white mb-2">Марка и модель авто</label>
                                <input
                                    type="text"
                                    name="carModel"
                                    value={formData.carModel}
                                    onChange={handleInputChange}
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#82b84a] transition-colors"
                                    placeholder="Toyota Camry 2022"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-white mb-2">Услуга</label>

                                <Select.Root
                                    value={formData.service}
                                    onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                                >
                                    <Select.Trigger
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 flex items-center justify-between focus:outline-none focus:border-[#82b84a] hover:border-zinc-500 transition-all"
                                    >
                                        <Select.Value placeholder="Выберите услугу" className="text-white" />
                                        <Select.Icon>
                                            <ChevronDown className="w-5 h-5 text-zinc-400" />
                                        </Select.Icon>
                                    </Select.Trigger>

                                    <Select.Portal>
                                        <Select.Content
                                            className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl z-50"
                                            position="popper"
                                            sideOffset={8}
                                        >
                                            <Select.Viewport className="p-2">
                                                {[
                                                    { value: "diagnostics", label: "Диагностика" },
                                                    { value: "maintenance", label: "Техобслуживание" },
                                                    { value: "engine", label: "Ремонт двигателя" },
                                                    { value: "suspension", label: "Ходовая часть" },
                                                    { value: "electronics", label: "Электроника" },
                                                    { value: "body", label: "Кузовной ремонт" },
                                                    { value: "other", label: "Другое" },
                                                ].map((service) => (
                                                    <Select.Item
                                                        key={service.value}
                                                        value={service.value}
                                                        className="flex items-center px-15 py-3 text-white hover:bg-zinc-800 rounded-xl cursor-pointer outline-none data-[highlighted]:bg-zinc-800 transition-colors"
                                                    >
                                                        <Select.ItemText>{service.label}</Select.ItemText>
                                                        <Select.ItemIndicator className="ml-6">
                                                            <Check className="w-4 h-4 text-[#941dc5]" />
                                                        </Select.ItemIndicator>
                                                    </Select.Item>
                                                ))}
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-white mb-2">Дополнительная информация</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full bg-zinc-900 border border-zinc-700 rounded-3xl px-6 py-4 focus:outline-none focus:border-[#82b84a] transition-colors resize-y"
                                placeholder="Укажите удобное время, симптомы неисправности и т.д."
                            />
                        </div>

                        {/* Чекбокс с политикой */}
                        <label className="flex items-start gap-3 group">
                            <Checkbox.Root
                                checked={formData.agreedToPolicy}
                                onCheckedChange={(checked) =>
                                    setFormData(prev => ({ ...prev, agreedToPolicy: !!checked }))
                                }
                                className="mt-0.5 w-6 h-6 bg-zinc-900 border-2 border-zinc-600 rounded-xl flex items-center justify-center
                   hover:border-[#941dc5] focus:outline-none
                   data-[state=checked]:bg-[#941dc5] data-[state=checked]:border-[#941dc5]
                   transition-all cursor-pointer"
                            >
                                <Checkbox.Indicator className="transition-transform">
                                    <Check className="w-4 h-4 text-black" />
                                </Checkbox.Indicator>
                            </Checkbox.Root>

                            <span className="text-zinc-200 leading-relaxed select-none">
                                Согласен с <a href="/privacy" className="text-[#82b84a] hover:underline">политикой конфиденциальности</a> и обработкой персональных данных
                            </span>
                        </label>

                        <button
                            type="submit"
                            disabled={isSubmitting || !formData.agreedToPolicy}
                            className="w-full border-2 border-[#82b84a] text-[#82b84a]
               py-5 rounded-2xl font-semibold text-xl transition-all duration-300
               disabled:opacity-70 flex items-center justify-center gap-3
               hover:shadow-[0_0_15px_#82b84a] hover:shadow-[#82b84a]/50
               active:scale-[0.985]"
                        >
                            {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                        </button>

                        <p className="text-center text-xs text-zinc-500">
                            Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                        </p>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#020003] text-zinc-400 py-20 border-t border-zinc-800">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">



                        {/* Контакты */}
                        <div>
                            <div className="text-white font-medium mb-6 text-lg">Контакты</div>
                            <div className="space-y-4 text-sm">
                                <a href="tel:+74951234567" className="flex items-center gap-3 hover:text-[#82b84a] transition-colors">
                                    <Phone className="w-5 h-5 text-[#941dc5]"  />
                                    +7 (495) 123-45-67
                                </a>
                                <a href="mailto:info@automaster.ru" className="flex items-center gap-3 hover:text-[#82b84a] transition-colors">
                                    <Mail className="w-5 h-5 text-[#941dc5]" />
                                    info@automaster.ru
                                </a>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-[#82b84a]" />
                                    Москва, ул. Автомобильная, 15
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-[#82b84a]"  />
                                    Пн–Вс: 08:00 – 22:00
                                </div>
                            </div>
                        </div>

                        {/* Правая колонка */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <div className="text-white font-medium mb-4">Мы в соцсетях</div>
                                <div className="flex gap-6 text-3xl">


                                    <a
                                        href="https://vk.com/automaster"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-[#82b84a] transition-all hover:scale-110"
                                    >
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg" alt="VK" className="w-8 h-8 opacity-70 hover:opacity-100" />
                                    </a>
                                </div>
                            </div>

                            <div className="text-xs text-zinc-500 mt-12 md:mt-0">
                                © 2026 АвтоМастер. Все права защищены.<br />

                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {showScrollTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 w-14 h-14 bg-[#82b84a] hover:bg-[#6fa13d]
                   text-white cursor-pointer rounded-full flex items-center justify-center shadow-xl
                   transition-all duration-300 hover:scale-110 active:scale-95 z-50
                   hover:shadow-[0_0_25px_#82b84a] hover:shadow-[#82b84a]/70
                   border border-white/30"
                    aria-label="Наверх"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.75}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
}