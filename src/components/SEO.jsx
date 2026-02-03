// src/components/SEO.jsx - VERSIÓN CORREGIDA Y OPTIMIZADA

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
  
  // Detectar país actual desde la URL
  const paisActual = location.pathname.startsWith('/es') ? 'es' : 'co';
  
  const fullTitle = title.includes('Eventia') ? title : `${title} | Eventia Digital`;
  const siteName = "Eventia Digital";
  const twitterHandle = "@eventiadigital";
  
  // ✅ GENERAR URLs ALTERNATIVAS - VERSIÓN CORREGIDA
  const generateAlternateUrl = (targetCountry) => {
    const baseUrl = 'https://eventiadigital.com';
    
    // Eliminar protocolo y dominio del canonical
    let path = canonical.replace(baseUrl, '').replace(/^\//, '');
    
    // Caso 1: URL raíz o home (/, /co, /es)
    if (!path || path === 'co' || path === 'es') {
      return `${baseUrl}/${targetCountry}`;
    }
    
    // Caso 2: URL con país explícito (/co/modelo/boda, /es/modelo/boda)
    if (path.startsWith('co/') || path.startsWith('es/')) {
      // Reemplazar el país actual con el país objetivo
      path = path.replace(/^(co|es)\//, `${targetCountry}/`);
      return `${baseUrl}/${path}`;
    }
    
    // Caso 3: URL sin país (fallback, no debería ocurrir)
    return `${baseUrl}/${targetCountry}/${path}`;
  };
  
  // URLs alternativas
  const alternateUrls = {
    co: generateAlternateUrl('co'),
    es: generateAlternateUrl('es'),
    default: 'https://eventiadigital.com/co'
  };
  
  // Locale dinámico
  const ogLocale = paisActual === 'es' ? 'es_ES' : 'es_CO';
  const ogLocaleAlternate = paisActual === 'es' ? 'es_CO' : 'es_ES';
  
  // ✅ SCHEMA.ORG - Datos estructurados
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
  
  // ✅ BREADCRUMBS - Mejorado
  const generateBreadcrumbs = () => {
    // Extraer partes de la URL sin dominio
    const urlPath = canonical.replace('https://eventiadigital.com/', '');
    const pathParts = urlPath.split('/').filter(Boolean);
    
    // Solo generar breadcrumbs si hay más de 1 parte (país + algo más)
    if (pathParts.length <= 1) return null;
    
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": `https://eventiadigital.com/${paisActual}`
      }
    ];
    
    // Construir breadcrumbs dinámicamente
    let currentPath = `https://eventiadigital.com/${paisActual}`;
    
    pathParts.slice(1).forEach((part, index) => {
      currentPath += `/${part}`;
      
      // Formatear nombre del breadcrumb
      let name = part
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
      
      // Casos especiales
      if (part === '15-anos' || part === '15anos') name = '15 Años';
      if (part === 'baby-shower' || part === 'babyshower') name = 'Baby Shower';
      
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": currentPath
      });
    });
    
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
  };
  
  const breadcrumbSchema = generateBreadcrumbs();
  
  return (
    <Helmet>
      {/* ===== META TAGS BÁSICOS ===== */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      
      {/* ===== HREFLANG (Versiones de idioma/país) ===== */}
      <link rel="alternate" hreflang="es-CO" href={alternateUrls.co} />
      <link rel="alternate" hreflang="es-ES" href={alternateUrls.es} />
      <link rel="alternate" hreflang="x-default" href={alternateUrls.default} />
      
      {/* ===== ROBOTS ===== */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* ===== GEO TARGETING ===== */}
      <meta name="geo.region" content={paisActual === 'es' ? 'ES' : 'CO'} />
      <meta name="geo.placename" content={paisActual === 'es' ? 'España' : 'Colombia'} />
      
      {/* ===== OPEN GRAPH (Facebook, LinkedIn) ===== */}
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogLocaleAlternate} />
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
      
      {/* ===== TWITTER CARD ===== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* ===== SCHEMA.ORG - PÁGINA/PRODUCTO ===== */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      
      {/* ===== SCHEMA.ORG - WEBSITE (solo homepage) ===== */}
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
      
      {/* ===== BREADCRUMBS ===== */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      
      {/* ===== ORGANIZACIÓN (solo homepage) ===== */}
      {(canonical === 'https://eventiadigital.com/' || 
        canonical === `https://eventiadigital.com/${paisActual}`) && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": siteName,
            "url": "https://eventiadigital.com",
            "logo": ogImage,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": paisActual === 'es' ? "+34-XXX-XXX-XXX" : "+57-XXX-XXX-XXXX",
              "contactType": "customer service",
              "availableLanguage": ["es"]
            },
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61585466177772",
              "https://www.instagram.com/eventiadigital",
              "https://www.tiktok.com/@eventiadigital"
            ]
          })}
        </script>
      )}
    </Helmet>
  );
}