import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
    const partners = [
        "Альфа-Банк", "БНБ-Банк", "Приорбанк", "Нацбанк РБ",
        "Технобанк", "Белагропромбанк", "Сбер Банк", "МТБанк",
        "Савушкин продукт", "Гранит", "Евроопт", "Корона"
    ];

    return (
        <section id="клиенты" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-500"
                    >
                        Нам доверяют лидеры рынка
                    </motion.h2>
                </div>

                <div className="relative group grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 0.4 }}
                                whileHover={{ opacity: 1, scale: 1.1 }}
                                className="text-xl md:text-3xl font-black text-white hover:text-brand-green transition-all duration-500 cursor-default"
                            >
                                {partner}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background subtle light streak */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
        </section>
    );
};

export default Partners;
