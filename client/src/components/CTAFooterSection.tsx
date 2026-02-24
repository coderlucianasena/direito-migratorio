/**
 * CTAFooterSection Component
 * 
 * Design Philosophy: Minimalismo Corporativo Contemporâneo
 * - Footer com informações de contato
 * - Observação ética OAB em destaque
 * - Conformidade legal completa
 * - Paleta alinhada com design (verde escuro)
 */

import { Mail, MapPin, Phone } from "lucide-react";

export default function CTAFooterSection() {
  const whatsappLink = "https://wa.me/559188172110?text=Olá%20Dra.%20Nathália%2C%20gostaria%20de%20agendar%20uma%20conversa%20jurídica%20sobre%20direito%20migratório.";

  return (
    <footer className="bg-[#1B4D3E] text-white py-12 md:py-16 lg:py-20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12 pb-8 md:pb-12 border-b border-[#C9A961]/30">
          
          {/* Coluna 1: Informações de Contato */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#C9A961]">Contato</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Localização</p>
                  <p className="text-[#F8F7F4]/80">Belém, Pará - Brasil</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#F8F7F4]/80 hover:text-[#C9A961] transition-colors">
                    +55 (91) 98817-2110
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:contato@nathaliaguedes.com.br" className="text-[#F8F7F4]/80 hover:text-[#C9A961] transition-colors">
                    contato@nathaliaguedes.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coluna 2: Links Legais */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#C9A961]">Legal</h3>
            
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#F8F7F4]/80 hover:text-[#C9A961] transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F8F7F4]/80 hover:text-[#C9A961] transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="https://www.oab.org.br" target="_blank" rel="noopener noreferrer" className="text-[#F8F7F4]/80 hover:text-[#C9A961] transition-colors">
                  Código de Ética da OAB
                </a>
              </li>
            </ul>
          </div>
          
          {/* Coluna 3: Credenciais */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#C9A961]">Credenciais</h3>
            
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-sm">Dra. Nathália Guedes</p>
                <p className="text-[#F8F7F4]/80 text-sm">Advogada em Direito Migratório</p>
              </div>
              
              <div>
                <p className="font-semibold text-sm">OAB/PA</p>
                <p className="text-[#F8F7F4]/80 text-sm">Inscrição: XXXXX</p>
              </div>
              
              <div>
                <p className="font-semibold text-sm">Especialização</p>
                <p className="text-[#F8F7F4]/80 text-sm">Direito Migratório</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Observação Ética OAB */}
        <div className="bg-[#C9A961]/10 rounded-lg p-6 border border-[#C9A961]/30 mb-8">
          <p className="text-sm text-[#F8F7F4]/90 leading-relaxed">
            <span className="font-semibold text-[#C9A961] block mb-2">Observação Conforme Resolução 02/2015 do Conselho Federal da OAB:</span>
            Esta página não constitui publicidade abusiva. Todos os conteúdos refletem informações gerais sobre advocacia em direito migratório e não garantem resultados específicos. Cada caso é único e requer análise individual. A contratação de serviços jurídicos deve ser precedida de consulta pessoal e análise específica do caso.
          </p>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-[#F8F7F4]/60 text-sm">
          <p>© {new Date().getFullYear()} Dra. Nathália Guedes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
