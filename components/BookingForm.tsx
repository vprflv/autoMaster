'use client';

import React from 'react';
import * as Select from '@radix-ui/react-select';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, ChevronDown } from 'lucide-react';

interface FormData {
    name: string;
    phone: string;
    carModel: string;
    service: string;
    message: string;
    callback: boolean;
    agreedToPolicy: boolean;
}

interface BookingFormProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    isSubmitting: boolean;
    handleSubmit: (e: React.FormEvent) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export default function BookingForm({
                                        formData,
                                        setFormData,
                                        isSubmitting,
                                        handleSubmit,
                                        handleInputChange,
                                    }: BookingFormProps) {
    return (
        <section id="booking" className="py-16 md:py-24 bg-zinc-900 text-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 md:mb-12">
                    <div className="uppercase tracking-widest text-[#82b84a] text-sm mb-3">БЫСТРАЯ ЗАПИСЬ</div>
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Запишитесь на сервис</h2>
                    <p className="text-[#82b84a] mt-4 text-base sm:text-lg">Мы перезвоним в течение 15 минут для подтверждения</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-zinc-800 border border-[#82b84a] rounded-3xl p-6 sm:p-8 md:p-12 space-y-7 md:space-y-8">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                        <div>
                            <label className="block text-sm text-white mb-2">Имя и фамилия</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-[#82b84a] transition-colors"
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
                                className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-[#82b84a] transition-colors"
                                placeholder="+7 (999) 123-45-67"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                        <div>
                            <label className="block text-sm text-white mb-2">Марка и модель авто</label>
                            <input
                                type="text"
                                name="carModel"
                                value={formData.carModel}
                                onChange={handleInputChange}
                                className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-[#82b84a] transition-colors"
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
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 flex items-center justify-between focus:outline-none focus:border-[#82b84a] hover:border-zinc-500 transition-all text-base"
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
                                                    className="flex items-center px-10 py-3 text-white hover:bg-zinc-800 rounded-xl cursor-pointer outline-none data-[highlighted]:bg-zinc-800 transition-colors"
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
                            className="w-full bg-zinc-900 border border-zinc-700 rounded-3xl px-5 py-4 focus:outline-none focus:border-[#82b84a] transition-colors resize-y text-base"
                            placeholder="Укажите удобное время, симптомы неисправности и т.д."
                        />
                    </div>

                    {/* Чекбокс с политикой */}
                    <label className="flex items-start gap-3 group ">
                        <Checkbox.Root
                            checked={formData.agreedToPolicy}
                            onCheckedChange={(checked) =>
                                setFormData(prev => ({ ...prev, agreedToPolicy: !!checked }))
                            }
                            className="mt-0.5 w-6 h-6 min-w-[24px] cursor-pointer bg-zinc-900 border-2 border-zinc-600 rounded-xl
                   flex items-center justify-center hover:border-[#941dc5]
                   data-[state=checked]:bg-[#941dc5] data-[state=checked]:border-[#941dc5]
                   transition-all flex-shrink-0"
                        >
                            <Checkbox.Indicator>
                                <Check className="w-4 h-4 text-black" />
                            </Checkbox.Indicator>
                        </Checkbox.Root>

                        <span className="text-zinc-200 leading-relaxed text-sm sm:text-base select-none pt-0.5">
        Согласен с <a href="/privacy" className="text-[#82b84a] hover:underline">политикой конфиденциальности</a>
        и обработкой персональных данных
    </span>
                    </label>

                    <button
                        type="submit"
                        disabled={isSubmitting || !formData.agreedToPolicy}
                        className="w-full border-2 border-[#82b84a] text-[#82b84a] py-5 rounded-2xl font-semibold text-lg sm:text-xl transition-all duration-300 disabled:opacity-70 hover:shadow-[0_0_25px_#82b84a] hover:shadow-[#82b84a]/60 active:scale-[0.985]"
                    >
                        {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                    </button>

                    <p className="text-center text-xs text-zinc-500">
                        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                    </p>
                </form>
            </div>
        </section>
    );
}