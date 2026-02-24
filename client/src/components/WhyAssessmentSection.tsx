/**
 * WhyAssessmentSection Component
 * 
 * Design Philosophy: Minimalismo Corporativo Contemporâneo
 * - 3 blocos de conteúdo em cards com sombra suave
 * - Ícones minimalistas em verde escuro
 * - Layout assimétrico com espaçamento generoso
 * - Dados concretos para justificar investimento em prevenção
 */

import { AlertTriangle, Shield, TrendingDown } from "lucide-react";

interface ReasonCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string;
}

const reasons: ReasonCard[] = [
  {
    icon: <AlertTriangle className="w-8 h-8 text-[#1B4D3E]" />,
    title: "Riscos Migratórios Não Prevenidos",
    description: "Irregularidade migratória, indeferimento de vistos ou falta de documentação adequada podem resultar em deportação, multas e impedimentos para reentrada. A Lei de Migração exige conformidade e documentação em dia.",
    highlight: "Muitas situações são evitáveis com assessoria especializada."
  },
  {
    icon: <Shield className="w-8 h-8 text-[#1B4D3E]" />,
    title: "Consultoria em Direito Migratório: O Caminho Mais Seguro",
    description: "Prevenir é sempre mais econômico que remediar. A assessoria em direito migratório inclui orientação sobre vistos, refúgio, naturalização, análise de documentação e conformidade com a legislação vigente.",
    highlight: "Quem conta com assessoria reduz significativamente riscos e insegurança jurídica."
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-[#1B4D3E]" />,
    title: "O Custo Real de Não Ter Assessoria",
    description: "Processos migratórios mal conduzidos podem gerar custos elevados, perda de prazos e indeferimentos. Regularização posterior tende a ser mais cara e complexa. Uma consultoria preventiva custa uma fração desses valores.",
    highlight: "Elimine riscos antes que se tornem problemas maiores."
  }
];

export default function WhyAssessmentSection() {
  return (
    <section id="por-que" className="scroll-mt-12 pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24 bg-white relative overflow-hidden">
      {/* Linha vertical decorativa */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[#C9A961] to-transparent" />
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B4D3E] mb-3 md:mb-4">
            Por Que a Assessoria em Direito Migratório É Essencial?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#2C3E50] font-light">
            Riscos migratórios custam caro. Prevenção e orientação custam menos.
          </p>
        </div>
        
        {/* Cards Grid - Assimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group bg-white border border-[#E8E8E8] rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300 ${
                index === 1 ? "md:scale-105 md:shadow-lg" : ""
              }`}
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-[#F8F7F4] rounded-lg group-hover:bg-[#1B4D3E]/5 transition-colors">
                {reason.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-[#1B4D3E] mb-4">
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#2C3E50] leading-relaxed mb-4">
                {reason.description}
              </p>
              
              {/* Highlight */}
              {reason.highlight && (
                <p className="text-sm font-semibold text-[#1B4D3E] pt-4 border-t border-[#E8E8E8]">
                  ✓ {reason.highlight}
                </p>
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        {/* <div className="mt-8 md:mt-10 lg:mt-12 pt-6 md:pt-8 lg:pt-10 border-t border-[#E8E8E8]">
          <p className="text-base md:text-lg text-[#2C3E50] mb-6">
            <span className="font-semibold text-[#1B4D3E]">Lei de Migração (Lei 13.445/2017):</span> A legislação migratória brasileira exige documentação e conformidade. Situações de irregularidade ou indeferimento muitas vezes poderiam ser evitadas ou atenuadas com assessoria especializada.
          </p>
        </div> */}
      </div>
    </section>
  );
}
