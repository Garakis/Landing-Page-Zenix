import React from 'react';
import { motion } from 'framer-motion';
import { Settings2, ShoppingCart, Activity, Users, Box } from 'lucide-react';

export default function TechPlatform() {
    return (
        <section aria-labelledby="platform-heading" id="plataforma" className="py-24 relative z-10 border-t border-zenix-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        id="platform-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        Plataforma Tecnológica Completa
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto font-light"
                    >
                        Nossa metodologia assegura atuação em diversos ramos e em toda a cadeia de valor dos mercados de seguros, unificando processos do pré-venda ao sinistro.
                    </motion.p>
                </div>

                {/* Platform Architecture */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zenix-surface/80 backdrop-blur-2xl border border-zenix-primary/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_-15px_rgba(93,38,214,0.4)]"
                >
                    <div className="space-y-8">
                        {/* Gestão */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-lg bg-zenix-primary/20 flex items-center justify-center flex-shrink-0">
                                <Settings2 className="w-6 h-6 text-zenix-primary" aria-hidden="true" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Módulo GESTÃO</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">Soluções tecnológicas para gestão de força de vendas direta e indireta, controlando comissões, hierarquias e performance em tempo real.</p>
                            </div>
                        </div>

                        {/* Vendas */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-lg bg-zenix-accent/20 flex items-center justify-center flex-shrink-0">
                                <ShoppingCart className="w-6 h-6 text-zenix-accent" aria-hidden="true" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Módulo VENDAS</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">Experiência completa de venda assistida e autocompra. Jornadas fluidas para cotação, emissão e renovação automática de seguros.</p>
                            </div>
                        </div>

                        {/* Operações */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                <Activity className="w-6 h-6 text-blue-400" aria-hidden="true" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Módulo OPERAÇÕES</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">Integração core para a experiência de pré e pós-venda. Recursos automatizados de acionamento de sinistro, endosso e cancelamento.</p>
                            </div>
                        </div>

                        {/* Engajamento */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                <Users className="w-6 h-6 text-emerald-400" aria-hidden="true" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Módulo ENGAJAMENTO</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">Ferramentas que permeiam toda a plataforma, garantindo a comunicação correta nos melhores momentos da jornada com o cliente.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-full min-h-[400px] flex items-center justify-center rounded-2xl bg-zenix-bg border border-white/5 overflow-hidden group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(93,38,214,0.1)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(93,38,214,0.2)_0%,transparent_70%)] transition-colors duration-700"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <Box className="w-24 h-24 text-zenix-primary mb-6 animate-pulse" aria-hidden="true" />
                            <div className="bg-zenix-surface-alt border border-zenix-secondary rounded-lg px-6 py-3 font-mono text-sm text-zenix-accent flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Ecosystem API Integrated
                            </div>
                            <div className="mt-8 text-center text-xs text-gray-500 uppercase tracking-widest">
                                Data Lake • Core Systems • Partners
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
