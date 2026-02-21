import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-light/80 backdrop-blur-md border-b border-slate-200">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="text-2xl font-black text-slate-900 tracking-tighter">
                    СТТ<span className="text-brand-green">EDI</span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
                    <a href="#services" className="hover:text-brand-green">Сервисы</a>
                    <a href="#team" className="hover:text-brand-green">Команда</a>
                    <a href="#pricing" className="hover:text-brand-green">Тарифы</a>
                </div>
                <button className="bg-brand-green text-white px-4 py-2 rounded-lg text-sm font-bold neo-button">
                    Вход
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
