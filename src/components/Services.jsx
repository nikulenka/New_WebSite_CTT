import React from 'react';
import { Truck, FileCheck, Layers, Globe, Zap, Database, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: "Электронные накладные",
            category: "Logistics",
            description: "Полный цикл ТТН и ТН в электронном виде с гарантией юридической значимости и бесперебойности.",
            icon: <Truck className="w-8 h-8" />,
            colSpan: "lg:col-span-2",
            rowSpan: "lg:row-span-2",
            color: "from-brand-green/20 to-transparent",
            image: "/services-bg.png"
        },
        {
            title: "EDI для Retail",
            category: "Supply Chain",
            description: "Автоматизация цепочек поставок: заказы (ORDERS) и уведомления.",
            icon: <Database className="w-6 h-6" />,
            colSpan: "lg:col-span-1",
            color: "from-blue-500/10 to-transparent"
        },
        {
            title: "e-CMR",
            category: "International",
            description: "Трансграничный документооборот с партнерами из РФ и ЕАЭС.",
            icon: <Globe className="w-6 h-6" />,
            colSpan: "lg:col-span-1",
            color: "from-cyan-500/10 to-transparent"
        },
        {
            title: "Электронный факторинг",
            category: "Fintech",
            description: "Платформа для быстрого финансирования поставок.",
            icon: <Zap className="w-6 h-6" />,
            colSpan: "lg:col-span-1",
            color: "from-yellow-500/10 to-transparent"
        },
        {
            title: "Интеграция 1С & ERP",
            category: "Technical",
            description: "Бесшовное соединение вашей учетной системы с EDI-платформой.",
            icon: <Layers className="w-8 h-8" />,
            colSpan: "lg:col-span-2",
            color: "from-brand-green/10 to-transparent"
        },
    ];

    return (
        <section id="решения" className="py-40 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-green mb-6 block"
                        >
                            Solutions
                        </motion.span>
                        <h2 className="text-5xl md:text-8xl font-black uppercase mb-8 leading-[0.9]">
                            Решения для <br />
                            <span className="text-gradient">цифровой устойчивости</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-medium">
                            Мы трансформируем сложные регуляторные требования в простые и надежные интерфейсы.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className={`
                                glass-panel p-10 rounded-[32px] group relative overflow-hidden transition-all duration-700
                                hover:scale-[1.02] hover:-translate-y-2 ${service.colSpan || ''} ${service.rowSpan || ''}
                            `}
                        >
                            {/* Decorative background image for specific cards */}
                            {service.image && (
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                                    <img src={service.image} className="w-full h-full object-cover grayscale brightness-50" alt="" />
                                </div>
                            )}

                            {/* Decorative background glow */}
                            <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-12 p-5 w-fit rounded-2xl bg-white/5 border border-white/10 text-brand-green group-hover:scale-110 group-hover:bg-brand-green/20 transition-all duration-500">
                                    {service.icon}
                                </div>
                                <div className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-500 mb-4">
                                    {service.category}
                                </div>
                                <h3 className="text-2xl font-black mb-6 group-hover:text-brand-green transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 text-base leading-relaxed mb-12 font-medium">
                                    {service.description}
                                </p>

                                <div className="mt-auto">
                                    <button className="flex items-center gap-3 text-[11px] uppercase tracking-widest font-black text-slate-500 group-hover:text-brand-green transition-all duration-300">
                                        Подробнее
                                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-green transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
