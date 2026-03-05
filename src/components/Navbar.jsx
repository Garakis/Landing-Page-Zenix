import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#020204]/80 backdrop-blur-md border-b border-[#2A1F4C]' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src="/zenix-favicon.svg" alt="Zenix Technology Consulting" className="h-6 w-auto" />
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#o-gap" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">O Gap do Mercado</a>
                        <a href="#zdd" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">A Nossa Abordagem</a>
                        <a href="#contato" className="bg-[#5D26D6] hover:bg-[#6c32f8] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all hover:shadow-[0_0_20px_-5px_rgba(93,38,214,0.6)]">
                            Agendar Diagnóstico
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
