// src/components/SEO.jsx - VERSIÓN MEJORADA

import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogImage = "https://eventiadigital.com/assets/logo-eventia-02.png",
  keywords,
  type = "website"
}) {
  const location = useLocation();
  
  // Detectar país actual
  const paisActual = location.pathname.startsWith('/es') ? 'es' : 'co';
  
  const fullTitle = title.includes('Eventia') ? title : `${title} | Eventia Digital`;
  const siteName = "Eventia Digital";
  const twitterHandle = "@eventiadigital";
  
  // 🔧 GENERAR URLs ALTERNATIVAS - VERSIÓN CORREGIDA
  const generateAlternateUrl = (country) => {
    // Caso 1: URL raíz
    if (canonical === 'https://eventiadigital.com/' || 
        canonical === 'https://eventiadigital.com/co' || 
        canonical === 'https://eventiadigital.com/es') {
      return `https://eventiadigital.com/${country}`;
    }
    
    // Caso 2: URL con país (/co/ o /es/)
    if (canonical.includes('/co/') || canonical.includes('/es/')) {
      return canonical.replace(/\/(co|es)\//, `/${country}/`);
    }
    
    // Caso 3: URL sin país (fallback - no debería pasar, pero por seguridad)
    const baseUrl = 'https://eventiadigital.com';
    const path = canonical.replace(baseUrl, '').replace(/^\//, '');
    return `${baseUrl}/${country}/${path}`;
  };
  
  // Locale dinámico
  const ogLocale = paisActual === 'es' ? 'es_ES' : 'es_CO';
  
  // Schema.org
  const schemaData = {
    "@context": "https://schema.org",
    "@type": type === "product" ? "Product" : "WebPage",
    "name": fullTitle,
    "description": description,
    "url": canonical,
    "image": ogImage,
    "inLanguage": "es",
    ...(type === "product" && {
      "brand": {
        "@type": "Brand",
        "name": siteName
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": paisActual === 'es' ? "EUR" : "COP",
        "availability": "https://schema.org/InStock",
        "url": canonical,
        "lowPrice": paisActual === 'es' ? "50" : "150000",
        "highPrice": paisActual === 'es' ? "200" : "800000",
        "offerCount": "3"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    }),
    ...(type === "website" && {
      "publisher": {
        "@type": "Organization",
        "name": siteName,
        "url": "https://eventiadigital.com",
        "logo": {
          "@type": "ImageObject",
          "url": ogImage,
          "width": "512",
          "height": "512"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61585466177772",
          "https://www.instagram.com/eventiadigital",
          "https://www.tiktok.com/@eventiadigital"
        ]
      }
    })
  };
  
  // 🔧 BREADCRUMBS - VERSIÓN CORREGIDA
  const generateBreadcrumbs = () => {
    const pathParts = canonical.split('/').filter(Boolean);
    
    // Solo generar breadcrumbs si hay más de 3 partes
    if (pathParts.length < 3) return null;
    
    // Filtrar protocolo, dominio y país
    const breadcrumbParts = pathParts.slice(2);
    
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": `https://eventiadigital.com/${paisActual}`
        },
        ...breadcrumbParts.map((part, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": part
            .replace(/-/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase())  // ← Capitaliza cada palabra
            .replace(/\b(15|Anos)\b/gi, (match) => 
              match === '15' ? '15' : match.toLowerCase() === 'anos' ? 'Años' : match
            ),
          "item": `https://eventiadigital.com/${paisActual}/${breadcrumbParts.slice(0, index + 1).join('/')}`
        }))
      ]
    };
  };
  
  const breadcrumbSchema = generateBreadcrumbs();
  
  return (
    <Helmet>
      {/* Título */}
      <title>{fullTitle}</title>
      
      {/* Meta Tags básicos */}
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Hreflang */}
      <link 
        rel="alternate" 
        hreflang="es-CO" 
        href={generateAlternateUrl('co')} 
      />
      <link 
        rel="alternate" 
        hreflang="es-ES" 
        href={generateAlternateUrl('es')} 
      />
      <link 
        rel="alternate" 
        hreflang="x-default" 
        href="https://eventiadigital.com/" 
      />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Geo tags */}
      <meta name="geo.region" content={paisActual === 'es' ? 'ES' : 'CO'} />
      <meta name="geo.placename" content={paisActual === 'es' ? 'España' : 'Colombia'} />
      
      {/* Open Graph */}
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:type" content="image/png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Schema.org - Página/Producto */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      
      {/* Schema.org - WebSite (solo home) */}
      {(canonical === 'https://eventiadigital.com/' || 
        canonical === `https://eventiadigital.com/${paisActual}`) && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": siteName,
            "url": canonical,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `https://eventiadigital.com/${paisActual}?q={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      )}
      
      {/* Breadcrumbs */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}