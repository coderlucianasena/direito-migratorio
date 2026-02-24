/**
 * useConversionTracking Hook
 * 
 * Rastreia eventos de conversão para:
 * - Google Analytics (via Umami)
 * - Google Ads (via gtag)
 * - Eventos customizados
 * 
 * Eventos rastreados:
 * - CTA Click: Clique no botão WhatsApp
 * - Scroll: Profundidade de scroll na página
 * - Time on Page: Tempo gasto na página
 */

import { useEffect } from 'react';

export function useConversionTracking() {
  useEffect(() => {
    // Rastrear cliques no CTA
    const trackCTAClick = (source: string) => {
      // Umami Analytics (já integrado via script no HTML)
      if (typeof window !== 'undefined' && (window as any).umami) {
        (window as any).umami.track('cta_click', { source });
      }

      // Google Ads (se gtag estiver disponível)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          'conversion_label': 'cta_whatsapp_click',
          'value': 1.0,
          'currency': 'BRL',
          'source': source
        });
      }

      console.log(`[Conversion] CTA Click - Source: ${source}`);
    };

    // Rastrear scroll depth
    const trackScrollDepth = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercentage > 25 && scrollPercentage <= 50) {
        if (typeof window !== 'undefined' && (window as any).umami) {
          (window as any).umami.track('scroll_depth', { depth: '25%' });
        }
      } else if (scrollPercentage > 50 && scrollPercentage <= 75) {
        if (typeof window !== 'undefined' && (window as any).umami) {
          (window as any).umami.track('scroll_depth', { depth: '50%' });
        }
      } else if (scrollPercentage > 75) {
        if (typeof window !== 'undefined' && (window as any).umami) {
          (window as any).umami.track('scroll_depth', { depth: '75%' });
        }
      }
    };

    // Rastrear tempo na página
    const trackTimeOnPage = () => {
      const startTime = Date.now();

      return () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        
        if (typeof window !== 'undefined' && (window as any).umami) {
          (window as any).umami.track('time_on_page', { 
            seconds: timeOnPage 
          });
        }

        console.log(`[Conversion] Time on Page: ${timeOnPage}s`);
      };
    };

    // Adicionar listeners
    const scrollListener = () => trackScrollDepth();
    window.addEventListener('scroll', scrollListener, { passive: true });

    // Rastrear tempo ao descarregar
    const cleanup = trackTimeOnPage();
    window.addEventListener('beforeunload', cleanup);

    // Expor função de rastreamento globalmente
    (window as any).trackConversion = trackCTAClick;

    return () => {
      window.removeEventListener('scroll', scrollListener);
      window.removeEventListener('beforeunload', cleanup);
    };
  }, []);
}

/**
 * Função para rastrear cliques em CTAs
 * Uso: onClick={() => trackConversionEvent('hero_cta')}
 */
export function trackConversionEvent(source: string) {
  if (typeof window !== 'undefined' && (window as any).trackConversion) {
    (window as any).trackConversion(source);
  }
}
