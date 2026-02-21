import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const reviews = [
        {
            name: "Николай",
            role: "Логист",
            text: "Раньше боялись ночных смен. В СТТ поддержка реально на связи 24/7, решили проблему с ЭТТН в три часа ночи. Фуры ушли вовремя.",
        },
        {
            name: "Марина",
            role: "Главбух",
            text: "СТТ взяли всю бюрократию на себя, подключили нас «под ключ» за несколько дней. Регистрация в ePass больше не наша головная боль.",
        },
        {
            name: "Виталий",
            role: "Директор",
            text: "В СТТ все честно: понятные тарифы и никакой подокументной тарификации за каждый чих. Планировать бюджет стало намного проще.",
        },
    ];

    return (
        <section className="py-20 bg-bg-light overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
                    Что говорят те, кто уже спит спокойно
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="neo-inset bg-white/50 rounded-3xl p-8 relative"
                        >
                            <Quote className="absolute top-6 right-8 w-10 h-10 text-brand-green/10" />
                            <p className="text-slate-600 italic mb-8 relative z-10">
                                «{review.text}»
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-200 neo-button" />
                                <div>
                                    <div className="font-bold text-slate-900">{review.name}</div>
                                    <div className="text-sm text-brand-green font-medium">{review.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
