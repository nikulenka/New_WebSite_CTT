import React from 'react';
import { ArrowRight, Play, ShieldCheck, Globe, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
            {/* Animated Mesh Gradient Background is handled in index.css */}
            <div className="animated-mesh" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                    <div className="lg:w-3/5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex gap-3 mb-10">
                                {[
                                    { label: 'Резидент ПВТ', icon: <ShieldCheck className="w-3 h-3" /> },
                                    { label: 'Партнер GS1', icon: <Globe className="w-3 h-3" /> },
                                    { label: 'TOP-3 EDI СНГ', icon: <Star className="w-3 h-3" /> }
                                ].map((item, i) => (
                                    <motion.span
                                        key={item.label}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                                        className="glass-panel px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-black text-slate-300 flex items-center gap-2 border-white/5"
                                    >
                                        <span className="text-brand-green">{item.icon}</span>
                                        {item.label}
                                    </motion.span>
                                ))}
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black mb-10 leading-[0.9] tracking-[-0.04em] uppercase">
                                Боитесь, что <br />
                                <span className="text-gradient">система ляжет?</span> <br />
                                Фуры не встанут.
                            </h1>

                            <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-medium max-w-2xl">
                                СТТ EDI — Гарантия надежности №1 в Беларуси. Мы обеспечиваем бесперебойный обмен электронными накладными, когда другие останавливаются.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <button className="flow-button text-xs font-black uppercase tracking-[0.2em] px-10 py-5">
                                    Подключиться без риска <ArrowRight className="w-4 h-4 inline-block ml-2 mb-0.5" />
                                </button>
                                <button className="glass-panel px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-white/5 transition-all duration-500">
                                    <span className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center">
                                        <Play className="w-3 h-3 text-brand-green fill-brand-green" />
                                    </span>
                                    Смотреть демо
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 10 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:w-2/5 relative"
                    >
                        <div className="relative z-10 glass-panel p-4 rounded-[40px] border-white/10 shadow-[0_0_100px_rgba(15,168,95,0.15)]">
                            <img
                                src="/hero-illustration.png"
                                alt="Liquid Glass Connectivity"
                                className="w-full h-auto rounded-[32px] object-cover"
                            />
                            {/* Decorative refractive ring */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/10 to-transparent pointer-events-none rounded-[40px]" />
                        </div>

                        {/* Background glow behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-green/10 blur-[120px] -z-10" />
                    </motion.div>
                </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-12 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500"
            >
                <span>Safe</span>
                <span className="w-1 h-1 bg-brand-green rounded-full" />
                <span>Reliable</span>
                <span className="w-1 h-1 bg-brand-green rounded-full" />
                <span>Enterprise</span>
            </motion.div>
        </section>
    );
};

export default Hero;
