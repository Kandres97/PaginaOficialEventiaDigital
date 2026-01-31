import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogImage = "https://eventiadigital.com/assets/logo eventia-02.png",
  keywords,
  type = "website"
}) {
  const fullTitle = title.includes('Eventia') ? title : `${title} | Eventia Digital`;
  const siteName = "Eventia Digital";
  const twitterHandle = "@EventiaDigital";
  
  // Schema.org para SEO avanzado - VERSIÓN CORREGIDA
  const schemaData = {
    "@context": "https://schema.org",
    "@type": type === "product" ? "Product" : "WebPage",
    "name": fullTitle,
    "description": description,
    "url": canonical,
    "image": ogImage,
    ...(type === "product" && {
      "brand": {
        "@type": "Brand",
        "name": siteName
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "COP",
        "availability": "https://schema.org/InStock",
        "url": canonical,
        "lowPrice": "0",
        "highPrice": "0",
        "offerCount": "3"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "50",
        "bestRating": "5",
        "worstRating": "1"
      }
    }),
    ...(type === "website" && {
      "publisher": {
        "@type": "Organization",
        "name": siteName,
        "logo": {
          "@type": "ImageObject",
          "url": ogImage
        }
      }
    })
  };
  
  return (
    <Helmet>
      {/* Título */}
      <title>{fullTitle}</title>
      
      {/* Meta Tags básicos */}
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      
      {/* Meta robots para indexación */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:locale" content="es_CO" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      
      {/* Breadcrumbs Schema (si aplica) */}
      {canonical.split('/').length > 4 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": canonical.split('/').filter(Boolean).slice(2).map((part, index, arr) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": part.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()),
              "item": `https://eventiadigital.com/${arr.slice(0, index + 1).join('/')}`
            }))
          })}
        </script>
      )}
    </Helmet>
  );
}