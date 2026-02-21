import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Решения', href: '#решения' },
        { name: 'Клиенты', href: '#клиенты' },
        { name: 'Сертификаты', href: '#сертификаты' },
        { name: 'Контакты', href: '#контакты' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6">
            <div className="container mx-auto px-6">
                <div className={`
          glass-panel rounded-full px-8 py-3 flex items-center justify-between
          transition-all duration-500 ${isScrolled ? 'mx-4 scale-95' : 'mx-0'}
        `}>
                    <div className="flex items-center gap-12">
                        <a href="/" className="text-xl font-black tracking-tighter flex items-center gap-2">
                            <span className="text-brand-green">CTT</span>
                            <span className="opacity-50">.</span>
                            <span>EDI</span>
                        </a>

                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-brand-green transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden sm:flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                            <span className="text-brand-green">RU</span>
                            <span className="w-px h-3 bg-white/10" />
                            <span className="hover:text-white cursor-pointer transition-colors">EN</span>
                        </div>

                        <button className="flow-button py-2 px-6 text-[10px] uppercase tracking-[0.2em] font-black border-white/10 hover:border-brand-green">
                            Личный кабинет
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
