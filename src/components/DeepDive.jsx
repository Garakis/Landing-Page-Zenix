import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, ShieldAlert, Cpu } from 'lucide-react';

export default function DeepDive() {
    return (
        <section aria-labelledby="deepdive-heading" id="zdd" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        id="deepdive-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        A Nossa Abordagem
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
                    >
                        Um modelo de engajamento desenhado para gerar valor tangível, eliminando promessas vazias e focando na execução em engenharia.
                    </motion.p>
                </div>

                {/* ZDD Dashboard Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-zenix-surface/80 backdrop-blur-2xl border border-zenix-primary/30 rounded-2xl relative overflow-hidden shadow-[0_0_50px_-15px_rgba(93,38,214,0.4)]"
                >
                    {/* Dashboard Header */}
                    <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5 relative">
                        <div className="flex gap-2 absolute left-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="mx-auto flex items-center gap-2 text-xs font-mono text-gray-400">
                            <Terminal className="w-3 h-3" />
                            zenix-deep-dive.sh
                        </div>
                    </div>

                    <div className="p-6 md:p-10 flex flex-col lg:flex-row gap-12 items-center bg-zenix-bg/50">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-zenix-primary text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                                Core Service
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Zenix Deep Dive</h3>
                            <p className="text-zenix-accent font-medium mb-6 text-lg">Imersão & Diagnóstico Situacional</p>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                                Mapeamos organogramas, fluxos de negócio e realizamos auditorias técnicas profundas para cruzar a estratégia da diretoria com a dor da operação real.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    { icon: Database, text: 'Auditoria de Arquitetura de Dados' },
                                    { icon: ShieldAlert, text: 'Análise de Gaps de Segurança & Compliance' },
                                    { icon: Cpu, text: 'Roadmap Estratégico de Refatoração' }
                                ].map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (idx * 0.1) }}
                                        className="flex items-center gap-3 text-sm text-gray-300"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-4 h-4 text-zenix-accent" aria-hidden="true" />
                                        </div>
                                        {item.text}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:w-1/2 w-full flex flex-col gap-4">
                            <div className="bg-zenix-surface-alt border border-white/5 rounded-xl p-6 font-mono text-xs md:text-sm text-gray-400">
                                <div className="text-zenix-accent mb-3">// System Analysis Phase</div>
                                <div className="text-green-400 mb-1">✓ Dependency tree mapped</div>
                                <div className="text-green-400 mb-1">✓ Legacy APIs identified [42]</div>
                                <div className="text-yellow-400 mb-3">! Technical debt ratio: HIGH</div>
                                <div className="mt-4 text-white/40">Analyzing integration points...</div>
                                <div className="w-full h-1 bg-white/5 rounded-full mt-3 overflow-hidden" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">
                                    <div className="w-2/3 h-full bg-zenix-primary relative">
                                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zenix-surface-alt border border-white/5 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div>
                                    <div className="text-gray-500 text-xs font-mono uppercase tracking-wider mb-2">OpEx Efficiency</div>
                                    <div className="text-sm text-gray-400 border-l-2 border-zenix-primary pl-3 py-1">Potential identified via modernization</div>
                                </div>
                                <div className="text-4xl sm:text-5xl font-light text-white">
                                    +40<span className="text-zenix-primary text-3xl">%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
