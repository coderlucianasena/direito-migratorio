/**
 * Home Page - Landing Page Dra. Nathália Guedes
 * 
 * Design Philosophy: Minimalismo Corporativo Contemporâneo
 * Ordem de Seções Otimizada para Conversão:
 * 1. Header (Navegação)
 * 2. Hero (Captura atenção + proposta de valor)
 * 3. Autoridade (Estabelece confiança ANTES de pedir ação)
 * 4. Por Que (Justifica investimento)
 * 5. CTA Intermediário (Reforça proposta)
 * 6. Como Trabalho (Detalha serviços)
 * 7. FAQ (Resolve objeções)
 * 8. Footer (Conversão + Legal)
 * 
 * Conversão: CTA claro, WhatsApp como único CTA, confiança
 * Ética: Conformidade OAB, sem promessas de resultado
 */

import { useEffect } from "react";
import { useLocation } from "wouter";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import SchemaMarkup from "@/components/SchemaMarkup";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuthoritySectionNew from "@/components/AuthoritySectionNew";
import WhyAssessmentSection from "@/components/WhyAssessmentSection";
import CTAIntermediateSection from "@/components/CTAIntermediateSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import CTAFooterSection from "@/components/CTAFooterSection";
import ScrollToTop from "@/components/ScrollToTop";

const SECTION_IDS: Record<string, string> = {
  "/sobre": "autoridade",
  "/por-que": "por-que",
  "/servicos": "servicos",
  "/faq": "faq",
};

export default function Home() {
  const [location] = useLocation();

  // Rastrear eventos de conversão
  useConversionTracking();

  // Rolar para a seção quando o path mudar
  useEffect(() => {
    if (location === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const sectionId = SECTION_IDS[location];
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      {/* Schema Markup para SEO Local */}
      <SchemaMarkup />
      
      {/* Meta tags são gerenciados via index.html */}
      
      {/* Header com Navegação */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Autoridade Profissional (Posição 2) */}
      <AuthoritySectionNew />
      
      {/* Por Que a Assessoria em Direito Migratório É Essencial */}
      <WhyAssessmentSection />
      
      {/* CTA Intermediário */}
      <CTAIntermediateSection />
      
      {/* Como Atuo em Direito Migratório */}
      <ServicesSection />
      
      {/* FAQ - Perguntas Frequentes */}
      <FAQSection />
      
      {/* Footer */}
      <CTAFooterSection />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
