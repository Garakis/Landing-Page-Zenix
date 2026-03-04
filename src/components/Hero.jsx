import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#3b0764] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zenix-purple/30 bg-zenix-purple/10 text-[#a855f7] text-xs font-semibold uppercase tracking-wider mb-8"
                >
                    <ShieldCheck className="w-4 h-4" />
                    Especialistas no Mercado de Seguros
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-[1.1]"
                >
                    O mercado de seguros parou no tempo. <br className="hidden md:block" />
                    <span className="glow-text">Nós trouxemos o futuro.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                >
                    As seguradoras não dominam código. Os fornecedores tecnológicos não dominam seguros. A <strong className="text-white font-medium">Zenix</strong> é a ponte definitiva entre a estratégia executiva e a execução tecnológica implacável.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <a href="#contato" className="group bg-zenix-purple hover:bg-[#6c32f8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-[0_0_30px_-5px_rgba(93,38,214,0.6)] flex items-center justify-center gap-2">
                        Iniciar Avaliação
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
