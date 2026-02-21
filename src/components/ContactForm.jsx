import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    return (
        <section id="контакты" className="py-32 bg-black overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 leading-tight">
                            Готовы к <br />
                            <span className="text-gradient">трансформации?</span>
                        </h2>

                        <div className="space-y-10">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-brand-green" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Центральный офис</div>
                                    <div className="text-white font-medium">220084, г. Минск, ул. Академика Купревича, 1/2, каб. 302</div>
                                    <div className="text-slate-400 text-sm mt-1">Парк Высоких Технологий</div>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-brand-green" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Отдел продаж и поддержки</div>
                                    <div className="text-white font-medium">+375 (17) 336-88-77</div>
                                    <div className="text-white font-medium">+375 (29) 336-88-77</div>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-brand-green" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Электронная почта</div>
                                    <div className="text-white font-medium">info@ctt.by</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <form className="bg-[#0c0c0c] border border-white/5 p-10 md:p-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 -translate-y-1/2 translate-x-1/2 blur-2xl" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <input type="text" placeholder="Имя" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-brand-green transition-colors text-white" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Фамилия" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-brand-green transition-colors text-white" />
                                </div>
                            </div>
                            <div className="mb-8">
                                <input type="email" placeholder="Рабочая почта" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-brand-green transition-colors text-white" />
                            </div>
                            <div className="mb-12">
                                <textarea placeholder="Ваш вопрос или задача" rows="4" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-brand-green transition-colors text-white resize-none"></textarea>
                            </div>

                            <button className="epam-button-primary w-full md:w-auto flex items-center justify-center gap-3">
                                Обсудить проект
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
