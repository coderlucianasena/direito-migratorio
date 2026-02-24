/**
 * CTAIntermediateSection Component
 * 
 * Design Philosophy: Minimalismo Corporativo Contemporâneo
 * - CTA intermediário entre seções
 * - Reforça proposta de valor
 * - Incentiva ação sem ser agressivo
 * - Paleta alinhada com design
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTAIntermediateSection() {
  const whatsappLink = "https://wa.me/559188172110?text=Olá%20Dra.%20Nathália%2C%20gostaria%20de%20agendar%20uma%20conversa%20jurídica%20sobre%20direito%20migratório.";

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-r from-[#1B4D3E] to-[#2C3E50]">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Título */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
          Pronto para Regularizar Sua Situação?
        </h2>
        
        {/* Descrição */}
        <p className="text-base md:text-lg lg:text-xl text-[#F8F7F4] font-light mb-8 md:mb-10 max-w-2xl mx-auto">
          Não deixe questões migratórias comprometerem sua tranquilidade. Agende uma conversa jurídica com a Dra. Nathália Guedes e descubra como uma assessoria em direito migratório pode transformar sua situação.
        </p>
        
        {/* CTA Button */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button 
            size="lg"
            className="bg-[#C9A961] hover:bg-[#F8F7F4] text-[#1B4D3E] font-bold px-10 py-6 rounded-md transition-all duration-300 inline-flex items-center gap-2"
          >
            Agendar Conversa Jurídica
            <ArrowRight className="w-5 h-5" />
          </Button>
        </a>

      </div>
    </section>
  );
}
