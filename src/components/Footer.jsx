import React from 'react';

const Footer = () => {
    return (
        <footer className="py-20 bg-black border-t border-white/5 text-slate-500">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-black tracking-tighter text-white mb-6">
                            СТТ<span className="text-brand-green">.EDI</span>
                        </div>
                        <p className="max-w-sm text-sm leading-relaxed mb-8">
                            Лидер в области электронного документооборота и логистических данных в Республике Беларусь. Обеспечиваем надежность вашего бизнеса 24/7.
                        </p>
                        <div className="flex gap-6">
                            {['Linkedin', 'Facebook', 'Telegram'].map(social => (
                                <a key={social} href="#" className="text-xs uppercase tracking-widest font-black hover:text-white transition-colors">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Сервисы</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-brand-green">Электронные накладные</a></li>
                            <li><a href="#" className="hover:text-brand-green">EDI для ритейла</a></li>
                            <li><a href="#" className="hover:text-brand-green">e-Факторинг</a></li>
                            <li><a href="#" className="hover:text-brand-green">Прослеживаемость</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Компания</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-brand-green">О компании</a></li>
                            <li><a href="#" className="hover:text-brand-green">Новости</a></li>
                            <li><a href="#" className="hover:text-brand-green">Тарифы</a></li>
                            <li><a href="#" className="hover:text-brand-green">Контакты</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[10px] uppercase tracking-widest font-bold">
                    <div>© 2024 ООО «Современные технологии торговли»</div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white">Политика конфиденциальности</a>
                        <a href="#" className="hover:text-white">Условия использования</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
