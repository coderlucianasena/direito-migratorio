/**
 * Header Component
 * 
 * Design Philosophy: Minimalismo Corporativo Contemporâneo
 * - Logo/nome da advogada em destaque
 * - Navegação clara para seções principais
 * - CTA WhatsApp em destaque
 * - Sticky em mobile, normal em desktop
 * - Contraste adequado com fundo
 */

import { useState } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/559188172110?text=Olá%20Dra.%20Nathália%2C%20gostaria%20de%20agendar%20uma%20conversa%20jurídica%20sobre%20direito%20migratório.";

  const navLinks = [
    { label: "Início", path: "/" },
    { label: "Sobre", path: "/sobre" },
    { label: "Por Que", path: "/por-que" },
    { label: "Serviços", path: "/servicos" },
    { label: "FAQ", path: "/faq" },
  ];

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    setLocation(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E5E5] shadow-sm">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
        
        {/* Logo/Nome */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-[#C9A961] rounded-sm" />
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-bold text-[#1B4D3E]">
              Dra. Nathália Guedes
            </h1>
            <p className="text-xs md:text-sm text-[#2C3E50] font-light">
              Direito Migratório
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.path}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.path);
              }}
              className={`font-medium text-sm transition-colors duration-200 ${
                location === link.path ? "text-[#1B4D3E]" : "text-[#2C3E50] hover:text-[#1B4D3E]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button 
              size="sm"
              className="bg-[#C9A961] hover:bg-[#1B4D3E] text-white font-semibold px-6 py-2 rounded-md transition-all duration-300"
            >
              Agendar Conversa
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#1B4D3E] hover:text-[#C9A961] transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-[#E5E5E5] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.path}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.path);
              }}
              className={`block font-medium py-2 transition-colors ${
                location === link.path ? "text-[#1B4D3E]" : "text-[#2C3E50] hover:text-[#1B4D3E]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E5E5E5]">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                size="sm"
                className="w-full bg-[#C9A961] hover:bg-[#1B4D3E] text-white font-semibold py-2 rounded-md transition-all duration-300"
              >
                Agendar Conversa via WhatsApp
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
