import React from 'react';
import { Check, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
    const tiers = [
        {
            name: "Легкий старт",
            price: "45",
            description: "Для тех, кто хочет быстро и без бюрократии войти в ЭДО.",
            features: [
                "Полный онбординг включен",
                "Настройка ePass и ЭЦП",
                "Справочники товаров",
                "Архив документов",
            ],
            highlight: false,
        },
        {
            name: "Безопасная логистика",
            price: "149",
            description: "Для активных отгрузок, где цена простоя слишком высока.",
            features: [
                "Линия 24/7 для логистов",
                "Приоритетное решение ошибок",
                "Безлимитные ЭТТН/ЭТН",
                "Поддержка ночных смен",
            ],
            highlight: true,
        },
        {
            name: "Корпоративный / Эксперт",
            price: "600",
            description: "Для лидеров рынка с огромными оборотами документов.",
            features: [
                "Персональный менеджер",
                "Безлимитный трансграничный ЭДО",
                "Индивидуальная интеграция 1С",
                "SLA 99.99% надежности",
            ],
            highlight: false,
        },
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Выберите ваш уровень надежности
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto italic">
                        Мы не просто продаем софт, мы гарантируем стабильность ваших бизнес-процессов. Никаких скрытых платежей за каждый документ.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative rounded-3xl p-8 ${tier.highlight
                                    ? "neo-flat bg-white border-2 border-brand-green/20 lg:py-12"
                                    : "neo-inset bg-slate-100 lg:py-8"
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green text-white px-4 py-1 rounded-full text-sm font-bold">
                                    Популярный выбор
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                            <p className="text-sm text-slate-500 mb-6 min-h-[40px]">{tier.description}</p>

                            <div className="mb-8">
                                <span className="text-sm text-slate-500">от</span>
                                <span className="text-4xl font-black text-slate-900 mx-1">{tier.price}</span>
                                <span className="text-slate-500 font-medium">BYN/мес</span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-brand-green" />
                                        </div>
                                        <span className="text-slate-700 text-sm leading-tight">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.highlight
                                    ? "bg-brand-orange text-white neo-button shadow-lg shadow-brand-orange/20"
                                    : "bg-white text-slate-900 neo-button border border-slate-200"
                                }`}>
                                Начать работу
                            </button>

                            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                                <Info className="w-3 h-3" />
                                <span>Фиксированная стоимость</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
