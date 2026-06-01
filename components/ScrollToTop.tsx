'use client';

import React from 'react';

interface ScrollToTopProps {
    showScrollTop: boolean;
}

export default function ScrollToTop({ showScrollTop }: ScrollToTopProps) {
    if (!showScrollTop) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8
                       w-12 h-12 md:w-14 md:h-14
                       bg-[#82b84a] hover:bg-[#6fa13d]
                       text-white cursor-pointer rounded-full
                       flex items-center justify-center shadow-xl
                       transition-all duration-300 hover:scale-110 active:scale-95 z-50
                       hover:shadow-[0_0_25px_#82b84a] hover:shadow-[#82b84a]/70
                       border border-white/30"
            aria-label="Наверх"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.75}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7" />
            </svg>
        </button>
    );
}