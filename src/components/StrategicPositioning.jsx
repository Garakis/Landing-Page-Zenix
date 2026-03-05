import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Building2, Users2 } from 'lucide-react';

export default function StrategicPositioning() {
    return (
        <section id="posicionamento" className="py-24 relative z-10 border-t border-zenix-secondary/50 bg-zenix-surface/30 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center md:text-left md:w-2/3 mx-auto md:mx-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        Direcionamos uma estratégia única através de 3 eixos de atuação.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-400 font-light leading-relaxed"
                    >
                        Modelos operacionais complementares desenhados para capturar a máxima sinergia entre o negócio segurador e a engenharia de tecnologia.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Eixo 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-card rounded-2xl p-8 hover-glow flex flex-col group border-zenix-primary/20"
                    >
                        <Shield className="text-zenix-primary w-12 h-12 mb-6" aria-hidden="true" />
                        <h3 className="text-2xl font-bold text-white mb-4">Core de Seguros</h3>
                        <p className="text-gray-400 leading-relaxed flex-grow">
                            Rentabilização e modernização de plataformas legadas. Atuamos direto no coração da seguradora, otimizando motores de regras, faturamento e sinistros para máxima performance corporativa.
                        </p>
                    </motion.div>

                    {/* Eixo 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass-card rounded-2xl p-8 hover-glow flex flex-col group border-zenix-primary/20"
                    >
                        <Building2 className="text-zenix-accent w-12 h-12 mb-6" aria-hidden="true" />
                        <h3 className="text-2xl font-bold text-white mb-4">Corporate & Bancassurance</h3>
                        <p className="text-gray-400 leading-relaxed flex-grow">
                            Gestão de integrações complexas B2B2C. Estruturamos a fundação técnica necessária para que grandes balcões bancários e canais de varejo distribuam seguros sem fricção.
                        </p>
                    </motion.div>

                    {/* Eixo 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="glass-card rounded-2xl p-8 hover-glow flex flex-col group border-zenix-primary/20"
                    >
                        <Users2 className="text-gray-300 w-12 h-12 mb-6" aria-hidden="true" />
                        <h3 className="text-2xl font-bold text-white mb-4">Governança de Parceiros</h3>
                        <p className="text-gray-400 leading-relaxed flex-grow">
                            Tiramos a venda casada do fornecedor tech. Avaliamos, homologamos e gerenciamos third-party vendors para garantir que as fábricas de software entreguem valor contínuo e métricas claras.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
