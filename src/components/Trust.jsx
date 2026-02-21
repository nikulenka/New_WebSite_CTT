import React from 'react';
import { Medal, Award, CheckCircle } from 'lucide-react';

const Trust = () => {
    const items = [
        {
            title: "Аттестованный EDI-провайдер",
            desc: "Официальный статус, подтвержденный РУП «ИУС», действующий до 2027 года.",
            icon: <CheckCircle className="w-8 h-8 text-brand-green" />
        },
        {
            title: "Цифровая платформа года",
            desc: "Победитель республиканской премии за вклад в цифровизацию торговли и логистики.",
            icon: <Medal className="w-8 h-8 text-brand-green" />
        },
        {
            title: "ISO 27001 Certified",
            desc: "Международный стандарт информационной безопасности при передаче данных.",
            icon: <Award className="w-8 h-8 text-brand-green" />
        }
    ];

    return (
        <section id="сертификаты" className="py-32 bg-[#0c0c0c]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {items.map((item, index) => (
                        <div key={index} className="flex gap-8 items-start">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
