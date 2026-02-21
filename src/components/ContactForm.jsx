import React from 'react';
import { Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    return (
        <section className="py-20 bg-bg-light">
            <div className="container mx-auto px-4">
                <div className="neo-flat rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Перестаньте бороться с бюрократией — <span className="text-brand-green">начните отгружать</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            Получите бесплатный аудит ваших логистических процессов и расчет окупаемости перехода на СТТ за 24 часа.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                                    <ArrowRight className="w-5 h-5 text-brand-green" />
                                </div>
                                <span className="text-slate-700 font-medium">Бесплатный расчет экономии</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                                    <ArrowRight className="w-5 h-5 text-brand-green" />
                                </div>
                                <span className="text-slate-700 font-medium">Персональная демо-версия системы</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <form className="neo-inset bg-white/30 rounded-3xl p-8 lg:p-10 space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Как вас зовут?</label>
                                <input
                                    type="text"
                                    placeholder="Иван Иванов"
                                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-green/30 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Рабочая почта или телефон</label>
                                <input
                                    type="text"
                                    placeholder="example@company.by"
                                    className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-green/30 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Ваша роль</label>
                                <select className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-green/30 outline-none transition-all appearance-none cursor-pointer">
                                    <option>Логист</option>
                                    <option>Главный бухгалтер</option>
                                    <option>Директор</option>
                                    <option>Другое</option>
                                </select>
                            </div>

                            <button className="w-full bg-brand-orange text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 neo-button hover:bg-opacity-90 transition-all">
                                Получить бесплатный аудит
                                <Send className="w-5 h-5" />
                            </button>

                            <p className="text-center text-[10px] text-slate-400">
                                Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
