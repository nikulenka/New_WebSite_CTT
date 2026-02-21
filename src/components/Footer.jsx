import React from 'react';

const Footer = () => {
    return (
        <footer className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="glass-panel rounded-[32px] p-12 md:p-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="md:col-span-2">
                            <a href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-8">
                                <span className="text-brand-green">CTT</span>
                                <span className="opacity-50">.</span>
                                <span>EDI</span>
                            </a>
                            <p className="text-slate-400 max-w-sm leading-relaxed font-medium">
                                Лидер в области электронного документооборота в Республике Беларусь.
                                Обеспечиваем надежность вашего бизнеса 24/7.
                            </p>

                            <div className="flex gap-6 mt-10">
                                {['LinkedIn', 'Facebook', 'Telegram'].map(social => (
                                    <a key={social} href="#" className="font-mono text-[10px] uppercase tracking-widest text-slate-500 hover:text-brand-green transition-colors">
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500 mb-8 underline decoration-brand-green/30 offset-8">Сервисы</h4>
                            <ul className="space-y-4">
                                {['Электронные накладные', 'EDI для ритейла', 'e-Факторинг', 'Прослеживаемость'].map(item => (
                                    <li key={item}>
                                        <a href="#" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500 mb-8 underline decoration-brand-green/30 offset-8">Компания</h4>
                            <ul className="space-y-4">
                                {['О компании', 'Новости', 'Тарифы', 'Контакты'].map(item => (
                                    <li key={item}>
                                        <a href="#" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="font-mono text-[9px] tracking-widest text-slate-600 uppercase">
                            © 2026 ООО «СОВРЕМЕННЫЕ ТЕХНОЛОГИИ ТОРГОВЛИ»
                        </div>
                        <div className="flex gap-8">
                            <a href="#" className="font-mono text-[9px] text-slate-600 hover:text-slate-400 transition-colors uppercase tracking-widest">
                                Политика конфиденциальности
                            </a>
                            <a href="#" className="font-mono text-[9px] text-slate-600 hover:text-slate-400 transition-colors uppercase tracking-widest">
                                Условия использования
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Absolute bottom light bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
        </footer>
    );
};

export default Footer;
