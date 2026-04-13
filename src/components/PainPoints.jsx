import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, TrendingDown, Layers, FileSpreadsheet } from 'lucide-react';

const pains = [
  {
    icon: <Layers className="w-6 h-6 text-red-400" />,
    title: "Muitas ferramentas, zero integração",
    description: "Você paga 8 ferramentas por mês e nenhuma conversa com a outra. O resultado é retrabalho diário movendo dados manualmente entre sistemas."
  },
  {
    icon: <FileSpreadsheet className="w-6 h-6 text-orange-400" />,
    title: "Financeiro e controle no escuro",
    description: "Seu financeiro fecha o mês em planilhas sujeitas a erros. Multas, cobranças duplicadas ou pagamentos perdidos viram rotina."
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-yellow-400" />,
    title: "Leads perdidos por falta de processo",
    description: "Você nem sabe quantos negócios seu time comercial perde por semana. O pipeline é invisível, tudo reside em WhatsApps individuais da equipe."
  },
  {
    icon: <Clock className="w-6 h-6 text-zenix-accent" />,
    title: "Escalar significa caos",
    description: "Toda vez que a empresa cresce um pouco mais, os processos atuais quebram. O crescimento aumenta o nível de stress do gestor no lugar do lucro."
  }
];

export default function PainPoints() {
  return (
    <section id="dores" className="py-24 relative z-10 bg-zenix-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            A sua operação está <span className="text-zenix-accent">fraturada</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto"
          >
            Conhecemos bem a dor do dono de PME: você sabe que precisa de tecnologia estruturada, mas não sabe por onde começar. Os "consultores" são apenas puxadores de botão e as consultorias enterprise cobram centenas de milhares de reais. 
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zenix-surface-alt border border-white/5 p-8 rounded-2xl glass-card relative overflow-hidden group hover:border-zenix-purple/30 transition-colors"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <AlertCircle className="w-24 h-24 text-zenix-primary" />
              </div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0 bg-white/5 p-4 rounded-xl border border-white/10">
                  {pain.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{pain.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
