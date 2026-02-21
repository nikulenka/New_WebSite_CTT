import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-slate-900 text-slate-400">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                    <div className="text-2xl font-black text-white tracking-tighter">
                        СТТ<span className="text-brand-green">EDI</span>
                    </div>
                    <div className="flex gap-8 text-sm">
                        <a href="#" className="hover:text-white">Помощь</a>
                        <a href="#" className="hover:text-white">Безопасность</a>
                        <a href="#" className="hover:text-white">API</a>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© 2024 ООО «Современные технологии торговли». Все права защищены.</p>
                    <p>Сделано для вашей надежности</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
