import React from 'react';
import { ShieldCheck, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden neon-mesh">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center gap-4 mb-8">
                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                                Резидент ПВТ
                            </span>
                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                                Партнер GS1
                            </span>
                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                                Top-3 EDI СНГ
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                            Боитесь, что <br />
                            <span className="text-gradient">система ляжет?</span> <br />
                            Фуры не встанут.
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            СТТ EDI — Гарантия надежности №1 в Беларуси. Мы обеспечиваем бесперебойный обмен электронными накладными, когда другие останавливаются.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="epam-button-primary group px-10 py-5">
                                <span>Подключиться без риска</span>
                                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="epam-button-secondary flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <Play className="w-4 h-4 fill-white" />
                                </div>
                                <span>Смотреть демо</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Absolute Bottom Badge - EPAM Style */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 opacity-50">
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold">Safe</div>
                <div className="w-px h-8 bg-slate-800" />
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold">Reliable</div>
                <div className="w-px h-8 bg-slate-800" />
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold">Enterprise</div>
            </div>
        </section>
    );
};

export default Hero;
