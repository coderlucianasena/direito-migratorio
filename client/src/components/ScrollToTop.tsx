/**
 * ScrollToTop Component
 * 
 * Design Philosophy: Minimalismo Corporativo Contemporâneo
 * - Botão flutuante no canto inferior direito
 * - Paleta de cores da landing page (verde escuro + dourado fosco)
 * - Aparece apenas quando o usuário rola para baixo
 * - Animação suave de entrada/saída
 * - Ícone de seta para cima
 */

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar/esconder botão baseado no scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Função para scroll suave ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#1B4D3E] hover:bg-[#C9A961] text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-110 group"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </>
  );
}

