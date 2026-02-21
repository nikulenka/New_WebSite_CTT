import React from 'react';
import { Cpu, Scale, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Team = () => {
    const teamRoles = [
        {
            role: "Архитекторы надежности",
            description: "Обеспечивают бесперебойную работу инфраструктуры даже при миллионных оборотах документов.",
            icon: <Cpu className="w-6 h-6 text-brand-green" />,
        },
        {
            role: "Эксперты по регуляторике",
            description: "Переводят тяжелый язык законов в простые и понятные интерфейсы для вашего бизнеса.",
            icon: <Scale className="w-6 h-6 text-brand-green" />,
        },
        {
            role: "Интеграторы 1С",
            description: "Разработчики бесшовного обмена данными, исключающие риск ошибок ручного ввода.",
            icon: <Code className="w-6 h-6 text-brand-green" />,
        },
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
                            Команда, которая стоит за вашим результатом
                        </h2>
                        <div className="space-y-8">
                            {teamRoles.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 items-start"
                                >
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-white neo-button flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">{item.role}</h3>
                                        <p className="text-slate-600">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="h-64 rounded-3xl bg-slate-200 animate-pulse neo-flat" />
                                <div className="h-48 rounded-3xl bg-brand-green/10 neo-flat flex items-center justify-center text-brand-green font-bold">
                                    Expert Support
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="h-48 rounded-3xl bg-brand-orange/10 neo-flat flex items-center justify-center text-brand-orange font-bold text-center p-4">
                                    Seamless Integration
                                </div>
                                <div className="h-64 rounded-3xl bg-slate-200 animate-pulse neo-flat" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
