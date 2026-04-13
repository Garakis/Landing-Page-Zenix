import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Zenix Deep Dive (Diagnóstico Express)",
    time: "5 dias úteis",
    description: "Mapeamos todas as suas ferramentas, identificamos gargalos e calculamos os custos reais da sua ineficiência. Entrega: Relatório de diagnóstico completo e roadmap de tecnologia rápido."
  },
  {
    number: "02",
    title: "Implementação",
    time: "10-20 dias úteis",
    description: "No lugar de relatórios estáticos, nós colocamos as ferramentas para funcionar: construímos as automações, parametrizamos software, capacitamos a sua equipe na base da operação."
  },
  {
    number: "03",
    title: "Copiloto Mensal",
    time: "Contínuo",
    description: "Monitoramos e otimizamos as automações continuamente. Avaliamos renovações tecnológicas e gerimos licenças. Sua infraestrutura evolui como a sua empresa."
  }
];

export default function Methodology() {
  return (
    <section id="metodologia" className="py-24 relative z-10 bg-zenix-bg border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                >
                    Como nós entregamos
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto"
                >
                    Um método triplo focado na agilidade inerente a pequenos e médios negócios. Não perca meses planejando o que pode ser escalado agora.
                </motion.p>
            </div>

            <div className="relative">
                {/* Linha de conexão invisivel no mobile, visivel no md */}
                <div className="hidden lg:block absolute top-[60px] left-8 right-8 h-px bg-gradient-to-r from-transparent via-zenix-primary/50 to-transparent"></div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col pt-8"
                        >
                            <div className="w-16 h-16 rounded-full bg-zenix-surface-alt border-2 border-zenix-primary flex items-center justify-center text-xl font-bold text-white mb-8 mx-auto lg:mx-0 shadow-[0_0_20px_rgba(93,38,214,0.4)]">
                                {step.number}
                            </div>
                            
                            <div className="bg-zenix-surface border border-white/5 rounded-2xl p-8 flex-1 glass-card text-center lg:text-left">
                                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-1 mb-6 text-sm">
                                    <span className="bg-zenix-primary/20 text-zenix-accent px-3 py-1 rounded-full font-semibold border border-zenix-primary/30">
                                        Tempo: {step.time}
                                    </span>
                                </div>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
