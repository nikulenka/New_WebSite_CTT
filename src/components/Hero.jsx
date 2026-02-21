import React from 'react';
import { ShieldCheck, Truck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold mb-6">
                                Надежность №1 в Беларуси
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                                Боитесь, что система ляжет, <span className="text-brand-green">груз зависнет</span>, и прилетят штрафы?
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 max-w-lg">
                                <span className="font-bold text-slate-900">Фуры не встанут:</span> ЭДО с гарантией надежности. Берем на себя бюрократию с ePass и гарантируем отгрузки 24/7.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="neo-button bg-brand-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-colors">
                                    Подключиться без риска
                                </button>
                                <div className="flex items-center gap-2 text-slate-500 text-sm">
                                    <ShieldCheck className="w-5 h-5 text-brand-green" />
                                    <span>Полный онбординг включен</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="neo-flat rounded-3xl p-8 aspect-video flex items-center justify-center relative overflow-hidden"
                        >
                            {/* Abstract decorative elements representing shipping/logistics */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                            <div className="relative z-10 grid grid-cols-2 gap-6 w-full">
                                <div className="neo-inset rounded-2xl p-6 flex flex-col gap-4">
                                    <Truck className="w-10 h-10 text-brand-green" />
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900 leading-none">24/7</div>
                                        <div className="text-sm text-slate-500">Контроль отгрузок</div>
                                    </div>
                                </div>
                                <div className="neo-inset rounded-2xl p-6 flex flex-col gap-4">
                                    <Clock className="w-10 h-10 text-brand-orange" />
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900 leading-none">0 мин</div>
                                        <div className="text-sm text-slate-500">Простоя в ePass</div>
                                    </div>
                                </div>
                                <div className="col-span-2 neo-inset rounded-2xl p-6 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">Гарантия СТТ</div>
                                            <div className="text-xs text-slate-500">Бесперебойная работа 99.9%</div>
                                        </div>
                                    </div>
                                    <div className="h-2 w-24 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-green w-[99%]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
