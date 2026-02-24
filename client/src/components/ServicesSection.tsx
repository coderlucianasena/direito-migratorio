/**
 * ServicesSection Component
 * 
 * Design Philosophy: Minimalismo Corporativo Contemporâneo\n * - 3 pilares de atuação em cards com design assimétrico\n * - Ícones minimalistas\n * - Paleta verde escuro + dourado fosco\n * - Espaçamento generoso\n */

import { CheckCircle2, FileText, Headphones } from "lucide-react";

interface ServicePillar {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const pillars: ServicePillar[] = [
  {
    number: "01",
    icon: <CheckCircle2 className="w-10 h-10 text-[#C9A961]" />,
    title: "Vistos e Documentação",
    description: "Atuo na preparação e acompanhamento de pedidos de visto, renovação e documentação perante a Polícia Federal e órgãos competentes.",
    benefits: [
      "Vistos temporários e permanentes",
      "Reunião familiar e trabalho",
      "Análise de documentação e conformidade",
      "Orientação sobre prazos e requisitos"
    ]
  },
  {
    number: "02",
    icon: <FileText className="w-10 h-10 text-[#C9A961]" />,
    title: "Refúgio e Proteção Internacional",
    description: "Assessoria especializada em procedimentos de refúgio e proteção complementar, em conformidade com a legislação brasileira e os tratados internacionais.",
    benefits: [
      "Pedido de refúgio e documentação",
      "Proteção complementar",
      "Revalidação de diploma e documentação",
      "Orientação em todas as etapas processuais"
    ]
  },
  {
    number: "03",
    icon: <Headphones className="w-10 h-10 text-[#C9A961]" />,
    title: "Naturalização e Regularização",
    description: "A Lei de Migração e as normas aplicáveis mudam em detalhes. Você não precisa estar sempre atualizado—eu cuido disso.",
    benefits: [
      "Naturalização brasileira",
      "Regularização migratória",
      "Atualização sobre mudanças na legislação",
      "Suporte contínuo em questões migratórias"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="scroll-mt-12 pt-16 md:pt-24 lg:pt-32 pb-10 md:pb-14 lg:pb-16 bg-[#F8F7F4] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B4D3E]/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl -z-0" />
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B4D3E] mb-3 md:mb-4">
            Como Atuo em Direito Migratório
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#2C3E50] font-light">
            Três pilares de uma assessoria em direito migratório eficaz
          </p>
        </div>
        
        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-white rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300 border border-[#E8E8E8]" />
              
              {/* Card Content */}
              <div className="relative p-6 md:p-8 h-full flex flex-col">
                {/* Number Badge */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-[#C9A961]/20 block mb-2">
                    {pillar.number}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="mb-6">
                  {pillar.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#2C3E50] leading-relaxed mb-6 flex-grow">
                  {pillar.description}
                </p>
                
                {/* Benefits List */}
                <div className="space-y-3 pt-6 border-t border-[#E8E8E8]">
                  {pillar.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#1B4D3E] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-[#2C3E50]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Message */}
        <div className="bg-white rounded-lg p-6 md:p-8 border border-[#E8E8E8] text-center">
          <p className="text-base md:text-lg text-[#2C3E50] leading-relaxed">
            <span className="font-semibold text-[#1B4D3E]">Resultado:</span> Você conta com assessoria jurídica especializada em direito migratório, com segurança na documentação, conformidade com a lei e orientação para sua situação.
          </p>
        </div>
      </div>
    </section>
  );
}
