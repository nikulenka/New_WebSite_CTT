import React from 'react';
import { Medal, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Trust = () => {
    const items = [
        {
            title: "Аттестованный EDI-провайдер",
            desc: "Официальный статус, подтвержденный РУП «ИУС», действующий до 2027 года.",
            code: "AUTH-ID: 2027-EDI-BY",
            icon: <CheckCircle className="w-6 h-6" />
        },
        {
            title: "Цифровая платформа года",
            desc: "Победитель республиканской премии за вклад в цифровизацию торговли и логистики.",
            code: "AWARD: REG-DIGITAL-24",
            icon: <Medal className="w-6 h-6" />
        },
        {
            title: "ISO 27001 Certified",
            desc: "Международный стандарт информационной безопасности при передаче данных.",
            code: "STD: ISO-27001-ISMS",
            icon: <Award className="w-6 h-6" />
        }
    ];

    return (
        <section id="сертификаты" className="py-40 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-10 rounded-[32px] group hover:bg-white/5 transition-all duration-500"
                        >
                            <div className="mb-10 w-12 h-12 rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-4 group-hover:text-brand-green transition-colors">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">{item.desc}</p>

                            <div className="mt-4 pt-6 border-t border-white/5">
                                <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                                    {item.code}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
