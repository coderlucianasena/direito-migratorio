/**
 * HeroSection Component
 * 
 * Design Philosophy: Minimalismo Corporativo Contemporâneo
 * - Headline clara e focada em benefício (segurança jurídica)
 * - Subheadline posiciona advocacia como investimento estratégico
 * - CTA primário em dourado fosco com hover em verde escuro
 * - Background profissional com overlay elegante
 * - Espaçamento generoso para respiração visual
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackConversionEvent } from "@/hooks/useConversionTracking";

export default function HeroSection() {
  const whatsappLink = "https://wa.me/559188172110?text=Olá%20Dra.%20Nathália%2C%20gostaria%20de%20agendar%20uma%20conversa%20jurídica%20sobre%20direito%20migratório.";

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] lg:min-h-[92vh] flex items-start justify-center overflow-hidden pt-16 md:pt-20 lg:pt-24">
      {/* Background Image com Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-background.png')",
          backgroundAttachment: "fixed"
        }}
      />
      
      {/* Overlay elegante com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F7F4]/85 via-[#F8F7F4]/90 to-[#F8F7F4]/95" />
      
      {/* Linha vertical decorativa em dourado (assinatura visual) */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A961] via-[#C9A961]/50 to-transparent" />
      
      {/* Container de conteúdo */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 lg:pt-8 pb-12 md:pb-16 lg:pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-start">
          
          {/* Coluna esquerda - Conteúdo */}
          <div className="space-y-4 md:space-y-5 lg:space-y-6 max-w-2xl lg:max-w-none">
            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-[#1B4D3E] tracking-tight">
              Segurança Jurídica em Direito Migratório
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-[#2C3E50] leading-relaxed font-light mt-2 md:mt-3">
              Consultoria em direito migratório que transforma desafios em regularização e tranquilidade.
            </p>
            
            {/* Copy descritivo */}
            <div className="space-y-3 text-sm sm:text-base md:text-lg text-[#2C3E50] leading-relaxed opacity-90 mt-2">
              <p>
                A legislação migratória é complexa e em constante evolução. Questões envolvendo vistos, refúgio ou naturalização exigem assessoria especializada para evitar riscos e garantir seus direitos.
              </p>
              <p>
                Conte com orientação jurídica para regularização, documentação e decisões críticas em matéria migratória.
              </p>
            </div>
            
            {/* CTA Primário */}
            <div className="pt-4 md:pt-5">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackConversionEvent('hero_cta')}
                className="inline-block"
              >
                <Button 
                  size="lg"
                  className="bg-[#C9A961] hover:bg-[#1B4D3E] text-white font-semibold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 group w-full sm:w-auto"
                >
                  Agendar Conversa Jurídica via WhatsApp
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-4 md:pt-5 flex flex-wrap items-center gap-3 md:gap-5 text-xs md:text-sm text-[#2C3E50]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#1B4D3E] rounded-full flex-shrink-0" />
                <span className="font-medium">OAB/PA Registrada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#1B4D3E] rounded-full flex-shrink-0" />
                <span className="font-medium">Consultoria Preventiva</span>
              </div>
            </div>
          </div>
          
          {/* Coluna direita - Imagem decorativa */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Círculo decorativo em verde escuro */}
              <div className="absolute -inset-6 md:-inset-8 bg-[#1B4D3E]/5 rounded-full blur-3xl" />
              
              {/* Card com sombra suave */}
              <div className="relative bg-white rounded-xl shadow-xl p-6 md:p-8 border border-[#E8E8E8] transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/consultation-concept.png" 
                  alt="Conceito de consultoria jurídica estratégica" 
                  className="w-full h-auto rounded-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Melhorado */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs md:text-sm text-[#1B4D3E] font-medium opacity-70">Role para ver mais</span>
          <div className="w-6 h-10 border-2 border-[#1B4D3E] rounded-full flex items-start justify-center p-2 shadow-lg bg-white/50 backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-[#C9A961] rounded-full animate-pulse mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
