import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Cpu, Search, CheckCircle2, TrendingUp } from 'lucide-react';

export default function Differentiators() {
    const differentiators = [
        {
            icon: Search,
            title: "Diagnóstico Situacional Profundo",
            desc: "Auditoria independente de arquitetura corporativa e dívida técnica."
        },
        {
            icon: CheckCircle2,
            title: "Modelo Robusto e Escalável",
            desc: "Framework próprio desenhado para absorver fluxos operacionais massivos."
        },
        {
            icon: Layers,
            title: "Domínio de Bancassurance",
            desc: "Metodologias maduras de integração em canais B2B2C e balcões bancários."
        },
        {
            icon: Cpu,
            title: "Plataforma Tecnológica Completa",
            desc: "Uso estratégico da nuvem e APIs modernas para destravar ecossistemas legados."
        },
        {
            icon: TrendingUp,
            title: "Performance Sólida (OpEx/CapEx)",
            desc: "Foco brutal em redução de custo operacional sem sacrificar time-to-market."
        },
        {
            icon: Zap,
            title: "Execução Implacável",
            desc: "Aceleração no delivery de software através de governança rígida sobre vendors."
        }
    ];

    return (
        <section className="py-24 relative z-10 bg-zenix-surface-alt">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
                    >
                        Nossos Diferenciais
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-400 font-light"
                    >
                        Um modelo de negócio único no setor de seguros e crédito tech.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {differentiators.map((diff, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="bg-zenix-bg border border-white/5 rounded-xl p-8 hover:border-zenix-primary/50 transition-colors flex flex-col items-start group"
                        >
                            <div className="w-14 h-14 rounded-lg bg-zenix-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <diff.icon className="w-6 h-6 text-zenix-accent" aria-hidden="true" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">{diff.title}</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {diff.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
