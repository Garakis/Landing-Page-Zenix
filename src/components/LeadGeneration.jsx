import React from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';

export default function LeadGeneration() {
    return (
        <section id="contato" className="py-24 relative z-10 bg-[#050508] border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        Inicie sua Transformação
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto"
                    >
                        Programe uma conversa executiva para avaliarmos o gap tecnológico e a estratégia de modernização da sua operação.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-[#0a0a0c]/80 backdrop-blur-xl border border-zenix-purple/20 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_-15px_rgba(93,38,214,0.3)] relative overflow-hidden"
                >
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-zenix-purple/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <form
                        action="https://formsubmit.co/contato@zenixtech.co"
                        method="POST"
                        className="relative z-10 space-y-6"
                    >
                        {/* Configurações do FormSubmit */}
                        <input type="hidden" name="_subject" value="Novo Lead - Zenix Landing Page" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="true" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Nome Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Ex: João Silva"
                                    className="w-full bg-[#020204]/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-zenix-purple focus:ring-1 focus:ring-zenix-purple transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Corporativo</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="joao@empresa.com.br"
                                    className="w-full bg-[#020204]/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-zenix-purple focus:ring-1 focus:ring-zenix-purple transition-colors"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-gray-300">Empresa</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    required
                                    placeholder="Nome da Seguradora/Corretora"
                                    className="w-full bg-[#020204]/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-zenix-purple focus:ring-1 focus:ring-zenix-purple transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="role" className="text-sm font-medium text-gray-300">Cargo</label>
                                <input
                                    type="text"
                                    id="role"
                                    name="role"
                                    required
                                    placeholder="Ex: CTO, Diretor de Inovação"
                                    className="w-full bg-[#020204]/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-zenix-purple focus:ring-1 focus:ring-zenix-purple transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">Qual o seu principal desafio tecnológico hoje?</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="4"
                                placeholder="Descreva brevemente o cenário atual e o que buscam solucionar..."
                                className="w-full bg-[#020204]/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-zenix-purple focus:ring-1 focus:ring-zenix-purple transition-colors resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="group w-full md:w-auto bg-zenix-purple hover:bg-[#6c32f8] text-white px-8 py-4 rounded-lg font-semibold text-base transition-all hover:shadow-[0_0_20px_-5px_rgba(93,38,214,0.6)] flex items-center justify-center gap-2 mx-auto"
                            >
                                Solicitar Contato Executivo
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>

                        <p className="text-center text-xs text-gray-500 mt-6">
                            Seus dados estão seguros. Entraremos em contato em até 24 horas úteis.
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
