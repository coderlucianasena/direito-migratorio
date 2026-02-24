/**
 * AuthoritySection Component
 * 
 * Design Philosophy: Minimalismo Corporativo Contemporâneo
 * - Foto profissional da advogada
 * - Informações de formação e experiência
 * - Diferencial humanizado
 * - Layout assimétrico com espaçamento generoso
 */

import { Award, BookOpen, Briefcase } from "lucide-react";

export default function AuthoritySection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Linha vertical decorativa */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[#C9A961] to-transparent" />
      
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">
            Quem É Dra. Nathália Guedes?
          </h2>
          <p className="text-xl text-[#2C3E50] font-light">
            Especialista em direito migratório com foco em regularização e segurança jurídica
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute -inset-6 bg-[#1B4D3E]/5 rounded-full blur-2xl" />
              
              {/* Image container */}
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden border border-[#E8E8E8] w-80 h-80 md:w-96 md:h-96">
                <img
                  src="/images/professional-portrait.png"
                  alt="Dra. Nathália Guedes - Advogada em Direito Migratório"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Formação Acadêmica */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-[#C9A961] mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B4D3E] mb-2">Formação Acadêmica</h3>
                  <ul className="space-y-2 text-[#2C3E50]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1B4D3E] rounded-full" />
                      Bacharel em Direito pela Universidade Federal do Pará
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1B4D3E] rounded-full" />
                      Especialista em Direito Migratório
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1B4D3E] rounded-full" />
                      Membro da OAB - Seção Pará
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Experiência Profissional */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-[#C9A961] mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B4D3E] mb-2">Experiência Profissional</h3>
                  <ul className="space-y-2 text-[#2C3E50]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1B4D3E] rounded-full" />
                      8+ anos de atuação em direito migratório
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1B4D3E] rounded-full" />
                      Experiência com casos de vistos, refúgio e regularização
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1B4D3E] rounded-full" />
                      Assessoria em casos de alta complexidade
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Diferencial */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Award className="w-6 h-6 text-[#C9A961] mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B4D3E] mb-2">Diferencial</h3>
                  <p className="text-[#2C3E50] leading-relaxed">
                    Combino conhecimento técnico profundo com abordagem humanizada. Não vejo clientes como números—vejo como parceiros que buscam crescimento seguro.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Filosofia */}
            <div className="bg-[#F8F7F4] rounded-lg p-6 border border-[#E8E8E8]">
              <p className="text-[#2C3E50] leading-relaxed">
                <span className="font-semibold text-[#1B4D3E]">Minha abordagem é equilibrada:</span> Entendo tanto os direitos dos colaboradores quanto as necessidades das empresas. Isso significa consultoria que protege sua empresa SEM criar conflitos desnecessários.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
