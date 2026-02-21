import React from 'react';
import { UserPlus, PhoneIncoming, FileArchive } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: "Онбординг «под ключ»",
            description: "Больше никакой бюрократии. Мы сами настроим ключи ЭЦП и справочники товаров вместо вас, чтобы вы начали работать сразу.",
            icon: <UserPlus className="w-8 h-8 text-brand-green" />,
        },
        {
            title: "Экстренная линия 24/7",
            description: "Ваши логисты не останутся одни. Круглосуточно решаем вопросы со стоящими на рампе фурами и ошибками систем.",
            icon: <PhoneIncoming className="w-8 h-8 text-brand-orange" />,
        },
        {
            title: "Прозрачный архив",
            description: "Ваши данные принадлежат вам. Удобная и бесплатная выгрузка документов в любое время без привязки к провайдеру.",
            icon: <FileArchive className="w-8 h-8 text-blue-500" />,
        },
    ];

    return (
        <section className="py-20 bg-bg-light">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Сервисы, созданные для спокойствия
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Мы понимаем страхи бизнеса и предлагаем решения, которые реально работают в условиях реальной логистики.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="neo-flat rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white neo-inset flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
