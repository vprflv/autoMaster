'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Advantages from '@/components/Advantages';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
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
    const [showScrollTop, setShowScrollTop] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen text-white font-sans">
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Hero />
            <Services />
            <Advantages />
            <BookingForm
                formData={formData}
                setFormData={setFormData}
                isSubmitting={isSubmitting}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
            />
            <Footer />
            <ScrollToTop showScrollTop={showScrollTop} />
        </div>
    );
}