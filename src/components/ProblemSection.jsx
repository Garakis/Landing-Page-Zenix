import React from 'react';
import { motion } from 'framer-motion';
import { MonitorX, Clock4, Lightbulb } from 'lucide-react';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProblemSection() {
    return (
        <section id="o-gap" className="py-24 lg:py-32 relative z-10 border-t border-zenix-border/50 bg-zenix-surface/30 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:w-2/3">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        O problema não é a tecnologia.<br />É a falha de comunicação.
                    </h2>
                    <p className="text-lg text-gray-400 font-light leading-relaxed">
                        Existe um desalinhamento crônico entre as necessidades reais do mercado de seguros e o que os provedores de tecnologia entregam. O resultado é o desperdício financeiro e a frustração das equipas.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-6 auto-rows-fr"
                >
                    {/* Bento Box 1 */}
                    <motion.div variants={item} className="glass-card rounded-2xl p-8 hover-glow flex flex-col relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-0"></div>
                        <MonitorX className="text-red-400 w-10 h-10 mb-6" />
                        <h3 className="text-xl font-semibold text-white mb-3">Baixa maturidade digital</h3>
                        <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                            Processos críticos sustentados por soluções inadequadas. Compra-se software com especificações erradas e a operação sofre com sistemas que não se comunicam.
                        </p>
                    </motion.div>

                    {/* Bento Box 2 */}
                    <motion.div variants={item} className="glass-card rounded-2xl p-8 hover-glow flex flex-col relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-0"></div>
                        <Clock4 className="text-orange-400 w-10 h-10 mb-6" />
                        <h3 className="text-xl font-semibold text-white mb-3">Processos obsoletos</h3>
                        <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                            Softwares "de prateleira" genéricos impostos a operações complexas. Falta compreensão das nuances regulatórias e operacionais do seguro.
                        </p>
                    </motion.div>

                    {/* Bento Box 3 */}
                    <motion.div variants={item} className="glass-card rounded-2xl p-8 hover-glow md:col-span-1 md:row-span-1 flex flex-col relative overflow-hidden group border-[#5D26D6]/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5D26D6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Lightbulb className="text-[#a855f7] w-10 h-10 mb-6" />
                        <h3 className="text-xl font-semibold text-white mb-3">Oportunidade de Inovação Real</h3>
                        <p className="text-gray-400 text-sm leading-relaxed flex-grow relative z-10">
                            A Zenix elimina este atrito com um portfólio de soluções focado em governança e resultados tangíveis. Traduzimos as necessidades de negócio para os padrões de engenharia.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
