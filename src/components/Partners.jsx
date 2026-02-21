import React from 'react';

const Partners = () => {
    const partners = [
        "Альфа-Банк", "БНБ-Банк", "Приорбанк", "Нацбанк РБ",
        "Технобанк", "Белагропромбанк", "Сбер Банк", "МТБанк",
        "Савушкин продукт", "Гранит", "Евроопт", "Корона"
    ];

    return (
        <section id="клиенты" className="py-24 bg-black border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-slate-500">
                        Нам доверяют лидеры рынка
                    </h2>
                </div>

                {/* Infinite Ticker Concept */}
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <div key={index} className="text-lg md:text-2xl font-black text-white px-4 border-r border-white/10 last:border-none">
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
