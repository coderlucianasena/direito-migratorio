/**
 * SchemaMarkup Component
 * 
 * Implementa Schema.org markup para:
 * - LocalBusiness: Informações de localização e contato
 * - ProfessionalService: Tipo de serviço
 * - AggregateRating: Avaliações (opcional)
 * 
 * Benefícios:
 * - Melhora SEO local
 * - Rich snippets no Google
 * - Aumenta CTR em resultados de busca
 */

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dra. Nathália Guedes - Advocacia em Direito Migratório",
    "description": "Consultoria em direito migratório em Belém. Vistos, refúgio, naturalização e regularização. Segurança jurídica e orientação especializada.",
    "url": "https://nathaliaguedes.com.br",
    "telephone": "+559188172110",
    "email": "contato@nathaliaguedes.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Endereço da Rua]",
      "addressLocality": "Belém",
      "addressRegion": "PA",
      "postalCode": "[CEP]",
      "addressCountry": "BR"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Belém"
      },
      {
        "@type": "State",
        "name": "Pará"
      }
    ],
    "priceRange": "$$",
    "image": "https://nathaliaguedes.com.br/images/professional-portrait.png",
    "sameAs": [
      "https://www.facebook.com/nathaliaguedes",
      "https://www.instagram.com/nathaliaguedes"
    ],
    "knowsAbout": [
      "Direito Migratório",
      "Consultoria Jurídica",
      "Vistos e Refúgio",
      "Naturalização",
      "Regularização Migratória"
    ],
    "jobTitle": "Advogada em Direito Migratório",
    "memberOf": {
      "@type": "Organization",
      "name": "Ordem dos Advogados do Brasil",
      "url": "https://www.oab.org.br"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
