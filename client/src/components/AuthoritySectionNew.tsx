/**
 * AuthoritySection Component (Redesenhado)
 * 
 * Design Philosophy: Minimalismo Corporativo Contemporâneo
 * - Foto grande em destaque (lado esquerdo)
 * - Informações bem organizadas (lado direito)
 * - Layout assimétrico elegante
 * - Foco em credibilidade e humanidade
 * - Meu Diferencial em layout horizontal na base
 */

import { BookOpen, Briefcase, Award } from "lucide-react";

export default function AuthoritySection() {
  return (
    <section id="autoridade" className="scroll-mt-12 pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-10 lg:pb-12 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da seção */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-3 md:mb-4">
            Quem é Dra. Nathália Guedes?
          </h2>
          <p className="text-base md:text-lg text-[#2C3E50] font-light max-w-2xl">
            Especialista em direito migratório com foco em regularização, vistos e segurança jurídica
          </p>
        </div>

        {/* Grid: Foto + Informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mb-12 md:mb-16">
          
          {/* Coluna 1: Foto Grande */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm md:max-w-md">
              {/* Decoração de fundo */}
              <div className="absolute inset-0 bg-[#C9A961]/10 rounded-2xl transform translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6" />
              
              {/* Foto */}
              <img
                src="/images/nathalia-guedes-portrait.png"
                alt="Dra. Nathália Guedes - Advogada em Direito Migratório"
                className="relative w-full h-auto rounded-2xl shadow-lg object-cover"
              />
              
              {/* Badge OAB */}
              <div className="absolute bottom-4 left-4 bg-[#1B4D3E] text-white px-4 py-2 rounded-lg shadow-lg">
                <p className="font-semibold text-sm">OAB/PA</p>
                <p className="text-xs opacity-90">Registrada</p>
              </div>
            </div>
          </div>

          {/* Coluna 2: Informações */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Formação Acadêmica */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#C9A961]/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[#C9A961]" />
                </div>
                <h3 className="text-xl font-bold text-[#1B4D3E]">Formação Acadêmica</h3>
              </div>
              <ul className="space-y-2 text-[#2C3E50] ml-13">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] font-bold mt-1">•</span>
                  <span>Direito pela Universidade Federal do Pará (UFPA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] font-bold mt-1">•</span>
                  <span>Especialista em Direito Migratório</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] font-bold mt-1">•</span>
                  <span>Especialista em Direito Previdenciário</span>
                </li>
              </ul>
            </div>

            {/* Experiência Profissional */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#C9A961]/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#C9A961]" />
                </div>
                <h3 className="text-xl font-bold text-[#1B4D3E]">Experiência Profissional</h3>
              </div>
              <ul className="space-y-2 text-[#2C3E50] ml-13">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] font-bold mt-1">•</span>
                  <span>8+ anos de atuação em direito migratório</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] font-bold mt-1">•</span>
                  <span>Experiência com empresas de diversos portes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] font-bold mt-1">•</span>
                  <span>Assessoria em casos de alta complexidade</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Meu Diferencial - Layout Horizontal em Baixo */}
        <div className="bg-[#F8F7F4] p-8 md:p-10 rounded-lg border-l-4 border-[#C9A961]">
          <div className="flex items-start gap-3 mb-4">
            <Award className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-1" />
            <h3 className="text-xl md:text-2xl font-bold text-[#1B4D3E]">Meu Diferencial</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-[#2C3E50] leading-relaxed">
              Combino <strong>conhecimento técnico profundo</strong> em direito migratório com <strong>abordagem humanizada</strong>. Não vejo clientes como números—vejo pessoas que buscam regularização, segurança e tranquilidade.
            </p>
            <p className="text-[#2C3E50] leading-relaxed">
              Minha abordagem é <strong>clara e estratégica</strong>: Explico cada etapa, prazos e requisitos da lei. O objetivo é que você tome decisões informadas e tenha sua situação documental e migratória em conformidade.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
