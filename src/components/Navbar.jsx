import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-xl py-4 border-b border-white/5" : "bg-transparent py-8"
            }`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <div className="text-2xl font-black tracking-tighter text-white">
                        СТТ<span className="text-brand-green">.EDI</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-8">
                        {['Решения', 'Клиенты', 'Сертификаты', 'Контакты'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-white transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-green transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <button className="text-[11px] uppercase tracking-[0.2em] font-bold text-white hover:text-brand-green transition-colors">
                        Ru
                    </button>
                    <div className="w-px h-4 bg-slate-800" />
                    <button className="epam-button-primary py-3 px-6 text-[10px]">
                        Личный кабинет
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
