/**
 * FAQSection Component
 * 
 * Design Philosophy: Minimalismo Corporativo Contemporâneo
 * - Accordion para perguntas frequentes
 * - Resolve objeções comuns
 * - Otimizado para SEO (long-tail keywords)
 * - Layout limpo e acessível
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Qual é o custo da consultoria em direito migratório?",
    answer: "O custo varia conforme o tipo de procedimento (visto, refúgio, naturalização, regularização) e a complexidade do caso. Na primeira conversa, avalio sua situação e apresento opções adequadas ao seu orçamento. O investimento em assessoria especializada costuma ser menor do que remediar problemas depois."
  },
  {
    question: "Como funciona a primeira conversa jurídica?",
    answer: "A primeira conversa é uma consulta exploratória de 30-45 minutos via WhatsApp ou videochamada. Você me conta sobre sua situação migratória, documentação e objetivos. Eu avalio o caso, identifico riscos e apresento recomendações iniciais. Sem compromisso—você decide se deseja prosseguir com a assessoria."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os prazos variam conforme o procedimento e o órgão (Polícia Federal, Ministério da Justiça etc.). Em documentação e orientação, você pode ter clareza desde a primeira semana. Em processos de visto, refúgio ou naturalização, os prazos oficiais dependem da legislação e da fila de análise."
  },
  {
    question: "Atendem quais tipos de casos migratórios?",
    answer: "Atendo pessoas físicas e famílias em situações diversas: vistos temporários e permanentes, refúgio, proteção complementar, naturalização, revalidação de documentos e regularização migratória. Cada caso recebe atenção personalizada e estratégica."
  },
  {
    question: "Qual é a diferença de vocês para outros advogados?",
    answer: "Meu diferencial é a especialização em direito migratório e a abordagem humanizada. Combino conhecimento técnico da Lei de Migração e dos procedimentos com atenção à sua situação. O objetivo é orientar com clareza e acompanhar cada etapa, reduzindo insegurança e riscos."
  },
  {
    question: "Como é o processo de contratação?",
    answer: "Simples e transparente. Após a primeira conversa, se ambos concordarmos em prosseguir, envio uma proposta com escopo, valores e prazos. Assinamos um contrato de prestação de serviços conforme a legislação. Você pode escolher assessoria por projeto ou contínua. Sem surpresas, sem custos ocultos."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-12 pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24 bg-[#F8F7F4]">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da seção */}
        <div className="mb-8 md:mb-10 lg:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-3 md:mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base md:text-lg text-[#2C3E50] font-light">
            Dúvidas comuns sobre direito migratório e como atuo
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Pergunta */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 md:py-6 flex items-center justify-between text-left hover:bg-[#F8F7F4]/50 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#1B4D3E] pr-4">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#C9A961] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {/* Resposta */}
              {openIndex === index && (
                <div className="px-6 py-5 md:py-6 bg-white border-t border-[#E5E5E5]">
                  <p className="text-[#2C3E50] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Secundário */}
        <div className="mt-8 md:mt-10 lg:mt-12 text-center">
          <p className="text-base md:text-lg text-[#2C3E50] mb-6">
            Ainda tem dúvidas? Vamos conversar!
          </p>
          <a
            href="https://wa.me/559188172110?text=Olá%20Dra.%20Nathália%2C%20gostaria%20de%20agendar%20uma%20conversa%20jurídica%20sobre%20direito%20migratório."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1B4D3E] hover:bg-[#C9A961] text-white font-semibold px-8 py-4 rounded-md transition-all duration-300"
          >
            Agendar Conversa Jurídica
          </a>
        </div>
      </div>
    </section>
  );
}
