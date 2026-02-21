import React from 'react';
import { Truck, FileCheck, Layers, Globe, Zap, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: "Электронные накладные",
            category: "Logistics",
            description: "Полный цикл ТТН и ТН в электронном виде с гарантией юридической значимости и бесперебойности.",
            icon: <Truck className="w-6 h-6 text-brand-green" />,
        },
        {
            title: "EDI для Retail",
            category: "Supply Chain",
            description: "Автоматизация цепочек поставок: заказы (ORDERS), уведомления об отгрузке (DESADV) и акты приемки.",
            icon: <Database className="w-6 h-6 text-brand-green" />,
        },
        {
            title: "e-CMR & ТЭДО",
            category: "International",
            description: "Трансграничный электронный документооборот с партнерами из РФ и стран ЕАЭС.",
            icon: <Globe className="w-6 h-6 text-brand-green" />,
        },
        {
            title: "Электронный факторинг",
            category: "Fintech",
            description: "Платформа для быстрого финансирования поставок с использованием электронных документов.",
            icon: <Zap className="w-6 h-6 text-brand-green" />,
        },
        {
            title: "Прослеживаемость & Маркировка",
            category: "Regulatory",
            description: "Готовые решения для работы с маркированным товаром и системами прослеживаемости в РБ.",
            icon: <FileCheck className="w-6 h-6 text-brand-green" />,
        },
        {
            title: "Интеграция 1С & ERP",
            category: "Technical",
            description: "Бесшовное соединение вашей учетной системы с EDI-платформой без ручного ввода.",
            icon: <Layers className="w-6 h-6 text-brand-green" />,
        },
    ];

    return (
        <section id="решения" className="py-32 bg-[#0c0c0c] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">
                            Решения для <br />
                            <span className="text-gradient">цифровой устойчивости</span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Мы трансформируем сложные регуляторные требования в простые и надежные интерфейсы для вашего бизнеса.
                        </p>
                    </div>
                    <button className="epam-button-secondary py-3 px-6 text-[10px]">
                        Все сервисы
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/5">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="p-10 border-r border-b border-white/5 group relative overflow-hidden transition-all duration-500 hover:bg-white/5"
                        >
                            <div className="absolute top-0 left-0 w-1 h-0 bg-brand-green transition-all duration-500 group-hover:h-full" />

                            <div className="mb-8 p-4 w-fit rounded-lg bg-white/5 border border-white/10">
                                {service.icon}
                            </div>
                            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-4">
                                {service.category}
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-brand-green transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-brand-green">
                                Подробнее <ArrowRight className="w-3 h-3" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
