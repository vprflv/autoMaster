'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { sendToTelegram } from '@/actions/actions';

const serviceLabels: Record<string, string> = {
    diagnostics: "Диагностика",
    maintenance: "Техобслуживание",
    engine: "Ремонт двигателя",
    suspension: "Ходовая часть",
    electronics: "Электроника",
    body: "Кузовной ремонт",
    other: "Другое",
};




export function useBookingForm() {
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

        try {
            await new Promise(resolve => setTimeout(resolve, 1200));

            const serviceName = serviceLabels[formData.service] || formData.service || "Не выбрано";
            await sendToTelegram({...formData, service: serviceName });


            toast.success('Заявка успешно отправлена!', {
                description: 'Мы свяжемся с вами в ближайшее время',
                duration: 5000,
                position: 'top-center',
            });


            setFormData({
                name: '',
                phone: '',
                carModel: '',
                service: '',
                message: '',
                callback: true,
                agreedToPolicy: false,
            });

        } catch (error) {
            toast.error('Ошибка при отправке', {
                description: 'Попробуйте ещё раз или позвоните нам',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        setFormData,
        isSubmitting,
        handleInputChange,
        handleSubmit,
    };
}