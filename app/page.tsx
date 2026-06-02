'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Advantages from '@/components/Advantages';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useBookingForm } from '@/hooks/useBookingForm';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const {
        formData,
        setFormData,
        isSubmitting,
        handleInputChange,
        handleSubmit,
    } = useBookingForm();


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