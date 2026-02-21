import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    return (
        <section id="контакты" className="py-40 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-green mb-6 block"
                        >
                            Connection
                        </motion.span>
                        <h2 className="text-5xl md:text-[80px] font-black uppercase mb-12 leading-[0.85] tracking-tight">
                            Готовы к <br />
                            <span className="text-gradient">трансформации?</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="glass-panel p-8 rounded-[24px] group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6 text-brand-green">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div className="text-[10px] uppercase tracking-widest font-black text-slate-500 mb-2">Office</div>
                                <div className="text-white font-bold text-sm leading-relaxed">
                                    г. Минск, ул. Академика Купревича, 1/2, каб. 302
                                </div>
                                <div className="font-mono text-[9px] text-brand-green mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    HTP RESIDENT
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="glass-panel p-8 rounded-[24px] group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6 text-brand-green">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div className="text-[10px] uppercase tracking-widest font-black text-slate-500 mb-2">Sales</div>
                                <div className="text-white font-bold text-sm">
                                    +375 (17) 336-88-77
                                </div>
                                <div className="text-slate-400 text-xs mt-1">+375 (29) 336-88-77</div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="glass-panel p-8 rounded-[24px] group lg:col-span-2"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] uppercase tracking-widest font-black text-slate-500">Email</div>
                                        <div className="text-white font-bold underline decoration-brand-green/30 hover:decoration-brand-green transition-all">info@ctt.by</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <form className="glass-panel p-10 md:p-14 rounded-[32px] relative overflow-hidden group">
                            {/* Inner glow effect */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 -translate-y-1/2 translate-x-1/2 blur-3xl" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="relative">
                                    <input type="text" placeholder="Имя" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-brand-green transition-colors text-white font-medium" />
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder="Фамилия" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-brand-green transition-colors text-white font-medium" />
                                </div>
                            </div>
                            <div className="mb-8">
                                <input type="email" placeholder="Рабочая почта" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-brand-green transition-colors text-white font-medium" />
                            </div>
                            <div className="mb-12">
                                <textarea placeholder="Ваш вопрос или задача" rows="4" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-brand-green transition-colors text-white resize-none font-medium"></textarea>
                            </div>

                            <button className="flow-button w-full flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.2em] py-5">
                                Обсудить проект
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
