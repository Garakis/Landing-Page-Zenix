import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Target, Truck, Cog, LineChart, Users } from 'lucide-react';

const modules = [
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Zenix Finanças",
    description: "Automação de contas, integração bancária, fluxo de caixa e relatórios em tempo real sem planilhas arcaicas.",
    tools: "Bling, Conta Azul, Asaas, Open Finance",
    color: "from-blue-600 to-blue-400"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Zenix Vendas",
    description: "Estruturação de CRM, visibilidade completa do pipeline comercial e follow-up ágil e automatizado dos seus leads.",
    tools: "Pipedrive, HubSpot, RD Station, WhatsApp API",
    color: "from-green-600 to-green-400"
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Zenix Supply Chain",
    description: "Chega de compras no feeling. Integração total entre estoque, logística e o seu ERP para otimizar a cadeia.",
    tools: "Tiny, Magazord, Loggi, Melhor Envio",
    color: "from-orange-600 to-orange-400"
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: "Zenix Operações",
    description: "Eliminação de processos manuais via aprovações ágeis, gestão de tarefas com SLAs internos que funcionam de verdade.",
    tools: "ClickUp, Monday, n8n, Make",
    color: "from-purple-600 to-purple-400"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Zenix Inteligência",
    description: "Conexão das fontes de dados, dashboards empresariais visíveis e aplicação de IA generativa para resumos rápidos.",
    tools: "Power BI, Metabase, Looker Studio",
    color: "from-pink-600 to-pink-400"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Zenix RH",
    description: "Processos de recrutamento e admissão automatizados, folha nativa integrada com financeiro e melhor gestão da equipe.",
    tools: "Gupy, Flash, Sólides",
    color: "from-teal-600 to-teal-400"
  }
];

export default function ModulesSection() {
  return (
    <section id="modulos" className="py-24 relative z-10 bg-zenix-surface-alt border-t border-white/5 overflow-hidden">
        {/* Background Decorative element */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-zenix-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                >
                    A Arquitetura: <span className="text-zenix-accent">Os 6 Módulos Zenix</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto"
                >
                    Não vendemos horas, entregamos soluções. Cada módulo arruma uma dor específica da sua empresa. Atacamos as áreas onde sua empresa mais sangra dinheiro.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {modules.map((module, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-zenix-surface/80 border border-white/10 rounded-2xl p-8 hover:border-zenix-primary/50 transition-all duration-300 group hover:shadow-[0_0_30px_-10px_rgba(93,38,214,0.3)] shadow-lg"
                    >
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${module.color} bg-opacity-20 text-white shadow-inner mb-6`}>
                            {module.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{module.title}</h3>
                        <p className="text-gray-400 mb-6 min-h-[80px]">
                            {module.description}
                        </p>
                        <div className="pt-4 border-t border-white/5">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest block mb-2">Stack Típico</span>
                            <span className="text-sm text-gray-300 font-medium">{module.tools}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
