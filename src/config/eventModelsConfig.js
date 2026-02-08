// src/config/eventModelsConfig.js
// Configuración centralizada de todas las páginas de modelos de eventos

/**
 * Configuración completa de cada tipo de evento
 * Incluye: SEO, descripciones, modelos y beneficios
 */
export const eventModelsConfig = {
  boda: {
    nombre: 'Boda',
    nombreLower: 'boda',
    slug: 'boda',
    seo: {
      title: 'Invitaciones Digitales de Boda Elegantes | Eventia Digital',
      description: 'Compra invitaciones de boda digitales elegantes y personalizadas. RSVP automático, galería de fotos, música y envío por WhatsApp. Servicio profesional garantizado.',
      keywords: 'comprar invitaciones digitales boda, invitaciones matrimonio whatsapp, tarjetas boda online, invitaciones boda elegantes, invitaciones boda personalizadas, servicio invitaciones boda'
    },
    descripcion: 'Descubre nuestros diseños elegantes y personalizados para tu gran día. Invitaciones únicas que reflejen el amor y estilo de tu boda.',
    mensajeWhatsApp: '¡Hola! Me interesa una invitación digital para mi boda. ¿Podrían darme más información?',
    
    // Modelos Website
    modelosWebsite: (paisActual) => [
      { 
        nombre: 'Serenity', 
        thumbnail: '/assets/images/demos/website/boda/boda1/thumbnail.webp',
        preview: '/assets/images/demos/website/boda/boda1/preview.webp',
        demoUrl: `/${paisActual}/demo/boda/boda1`
      },
      { 
        nombre: 'Primicia', 
        thumbnail: null,
        preview: null,
        demoUrl: `/${paisActual}/demo/boda/primicia`
      },
      { 
        nombre: 'Passport', 
        thumbnail: null,
        preview: null,
        demoUrl: `/${paisActual}/demo/boda/passport`
      },
      { 
        nombre: 'Paradise', 
        thumbnail: null,
        preview: null,
        demoUrl: `/${paisActual}/demo/boda/paradise`
      }
    ],
    
    // Modelos Classic
    modelosClassic: (paisActual) => [
      { 
        nombre: 'Classic Elegante', 
        thumbnail: '/assets/images/demos/classic/boda/boda1/thumbnail.webp',
        preview: '/assets/images/demos/classic/boda/boda1/Preview.webp',
        demoUrl: `/${paisActual}/demo/classic/boda/elegante`
      },
      { 
        nombre: 'Classic Romántico', 
        thumbnail: null,
        preview: null,
        demoUrl: `/${paisActual}/demo/classic/boda/romantico`
      },
      { 
        nombre: 'Classic Moderno', 
        thumbnail: null,
        preview: null,
        demoUrl: `/${paisActual}/demo/classic/boda/moderno`
      },
      { 
        nombre: 'Classic Floral', 
        thumbnail: null,
        preview: null,
        demoUrl: `/${paisActual}/demo/classic/boda/floral`
      }
    ],
    
    // Sección "Por qué elegir"
    porQueElegir: {
      titulo: '¿Por qué elegir invitaciones digitales de boda?',
      descripcion: 'Las invitaciones digitales de boda son la opción moderna, elegante y eco-friendly perfecta para tu matrimonio. Comparte los detalles de tu gran día de forma instantánea por WhatsApp, incluye confirmación de asistencia RSVP, ubicación GPS, galería de fotos y música especial.',
      beneficios: [
        { titulo: '100% Personalizables', descripcion: 'Ajusta colores, textos, fotos y música a tu gusto' },
        { titulo: 'Eco-Friendly', descripcion: 'Sin papel, cuidando el medio ambiente' },
        { titulo: 'Envío Instantáneo', descripcion: 'Comparte por WhatsApp en segundos' }
      ]
    }
  },

  '15anos': {
    nombre: 'Quinceañera',
    nombreLower: 'quinceañera',
    slug: '15-anos',
    seo: {
      title: 'Invitaciones de 15 Años Digitales Modernas | Eventia Digital',
      description: 'Solicita invitaciones de quinceañera digitales únicas. Lista de regalos, RSVP, galería y música personalizada. Envío por WhatsApp. ¡Cotiza ahora!',
      keywords: 'invitaciones 15 años digitales, invitaciones quinceañera whatsapp, tarjetas quince años online, invitaciones quinceañera elegantes, comprar invitaciones 15 años, servicio invitaciones quinceañera'
    },
    descripcion: 'Descubre nuestros diseños modernos y elegantes para tu celebración de 15 años. Invitaciones únicas que reflejen tu estilo y personalidad.',
    mensajeWhatsApp: '¡Hola! Me interesa una invitación digital para mis 15 años. ¿Podrían darme más información?',
    
    modelosWebsite: (paisActual) => [
      { nombre: 'Princess Dream', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/15anos/princess-dream` },
      { nombre: 'Sweet Fifteen', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/15anos/sweet-fifteen` },
      { nombre: 'Royal Crown', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/15anos/royal-crown` },
      { nombre: 'Magical Night', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/15anos/magical-night` }
    ],
    
    modelosClassic: (paisActual) => [
      
      { nombre: 'Classic Romántico', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/15anos/romantico` },
      { nombre: 'Classic Moderno', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/15anos/moderno` },
      { nombre: 'Classic Princess', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/15anos/princess` }
    ],
    
    porQueElegir: {
      titulo: '¿Por qué elegir invitaciones digitales para tu quinceañera?',
      descripcion: 'Las invitaciones digitales para 15 años son la opción moderna, elegante y eco-friendly perfecta para tu celebración. Comparte los detalles de tu gran día de forma instantánea por WhatsApp, incluye confirmación de asistencia RSVP, ubicación GPS, galería de fotos, cronograma del evento y música personalizada.',
      beneficios: [
        { titulo: '100% Personalizables', descripcion: 'Ajusta colores, textos, fotos y música a tu gusto' },
        { titulo: 'Eco-Friendly', descripcion: 'Sin papel, cuidando el medio ambiente' },
        { titulo: 'Envío Instantáneo', descripcion: 'Comparte por WhatsApp en segundos' }
      ]
    }
  },

  babyshower: {
    nombre: 'Baby Shower',
    nombreLower: 'baby shower',
    slug: 'baby-shower',
    seo: {
      title: 'Invitaciones de Baby Shower Digitales Tiernas | Eventia Digital',
      description: 'Compra invitaciones digitales de baby shower adorables. Lista de regalos, juegos interactivos, RSVP y envío por WhatsApp. Para niño, niña o sorpresa.',
      keywords: 'invitaciones baby shower digitales, invitaciones baby shower whatsapp, tarjetas baby shower online, comprar invitaciones baby shower, invitaciones bebé digitales, servicio invitaciones baby shower'
    },
    descripcion: 'Descubre nuestros diseños tiernos y adorables para celebrar la llegada de tu bebé. Invitaciones únicas llenas de amor.',
    mensajeWhatsApp: '¡Hola! Me interesa una invitación digital para mi baby shower. ¿Podrían darme más información?',
    
    modelosWebsite: (paisActual) => [
      { nombre: 'Sweet Baby', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/babyshower/sweet-baby` },
      { nombre: 'Little Star', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/babyshower/little-star` },
      { nombre: 'Baby Love', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/babyshower/baby-love` },
      { nombre: 'Tiny Feet', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/babyshower/tiny-feet` }
    ],
    
    modelosClassic: (paisActual) => [
      { nombre: 'Classic Tierno', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/babyshower/tierno` },
      { nombre: 'Classic Dulce', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/babyshower/dulce` },
      { nombre: 'Classic Moderno', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/babyshower/moderno` },
      { nombre: 'Classic Adorable', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/babyshower/adorable` }
    ],
    
    porQueElegir: {
      titulo: '¿Por qué elegir invitaciones digitales para tu baby shower?',
      descripcion: 'Las invitaciones digitales para baby shower son la opción moderna, tierna y eco-friendly perfecta para celebrar la llegada de tu bebé. Comparte los detalles de forma instantánea por WhatsApp, incluye lista de regalos, juegos interactivos, confirmación de asistencia RSVP y galería de fotos del embarazo.',
      beneficios: [
        { titulo: 'Diseños Adorables', descripcion: 'Para niño, niña o sorpresa' },
        { titulo: 'Lista de Regalos', descripcion: 'Incluye links a tiendas' },
        { titulo: 'Juegos Interactivos', descripcion: 'Divierte a tus invitados' }
      ]
    }
  },

  cumpleanos: {
    nombre: 'Cumpleaños',
    nombreLower: 'cumpleaños',
    slug: 'cumpleanos',
    seo: {
      title: 'Invitaciones de Cumpleaños Digitales Divertidas | Eventia Digital',
      description: 'Solicita invitaciones digitales de cumpleaños para todas las edades. Lista de regalos, ubicación GPS, RSVP y envío por WhatsApp. ¡Celebra con estilo!',
      keywords: 'invitaciones cumpleaños digitales, invitaciones fiesta whatsapp, tarjetas cumpleaños online, comprar invitaciones cumpleaños, invitaciones cumpleaños personalizadas, servicio invitaciones cumpleaños'
    },
    descripcion: 'Descubre nuestros diseños divertidos y creativos para todas las edades. Invitaciones únicas que hagan de tu celebración algo memorable.',
    mensajeWhatsApp: '¡Hola! Me interesa una invitación digital para cumpleaños. ¿Podrían darme más información?',
    
    modelosWebsite: (paisActual) => [
      { nombre: 'Party Time', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/cumpleanos/party-time` },
      { nombre: 'Celebration', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/cumpleanos/celebration` },
      { nombre: 'Birthday Bash', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/cumpleanos/birthday-bash` },
      { nombre: 'Happy Day', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/cumpleanos/happy-day` }
    ],
    
    modelosClassic: (paisActual) => [
      { nombre: 'Classic Festivo', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/cumpleanos/festivo` },
      { nombre: 'Classic Divertido', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/cumpleanos/divertido` },
      { nombre: 'Classic Moderno', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/cumpleanos/moderno` },
      { nombre: 'Classic Alegre', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/cumpleanos/alegre` }
    ],
    
    porQueElegir: {
      titulo: '¿Por qué elegir invitaciones digitales para tu cumpleaños?',
      descripcion: 'Las invitaciones digitales de cumpleaños son la opción moderna, divertida y eco-friendly perfecta para tu celebración. Comparte los detalles de forma instantánea por WhatsApp, incluye lista de regalos, confirmación de asistencia RSVP, ubicación GPS y galería de fotos.',
      beneficios: [
        { titulo: 'Para Todas las Edades', descripcion: 'Niños, adultos y más' },
        { titulo: 'Temáticas Variadas', descripcion: 'Personajes, deportes, elegante' },
        { titulo: 'Lista de Regalos', descripcion: 'Incluye links y sugerencias' }
      ]
    }
  },

  comunion: {
    nombre: 'Primera Comunión',
    nombreLower: 'comunión',
    slug: 'comunion',
    seo: {
      title: 'Invitaciones de Primera Comunión Digitales | Eventia Digital',
      description: 'Compra invitaciones digitales de primera comunión elegantes. Diseños religiosos, información de ceremonia y recepción, RSVP. Envío por WhatsApp.',
      keywords: 'invitaciones primera comunión digitales, invitaciones comunión whatsapp, tarjetas comunión online, comprar invitaciones comunión, invitaciones comunión elegantes, servicio invitaciones primera comunión'
    },
    descripcion: 'Descubre nuestros diseños elegantes y religiosos para celebrar este día tan especial. Invitaciones únicas llenas de fe y bendiciones.',
    mensajeWhatsApp: '¡Hola! Me interesa una invitación digital para primera comunión. ¿Podrían darme más información?',
    
    modelosWebsite: (paisActual) => [
      { nombre: 'Holy Light', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/comunion/holy-light` },
      { nombre: 'Divine Grace', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/comunion/divine-grace` },
      { nombre: 'Sacred Day', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/comunion/sacred-day` },
      { nombre: 'Blessed Moment', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/comunion/blessed-moment` }
    ],
    
    modelosClassic: (paisActual) => [
     
      { nombre: 'Classic Religioso', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/comunion/religioso` },
      { nombre: 'Classic Moderno', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/comunion/moderno` },
      { nombre: 'Classic Espiritual', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/comunion/espiritual` }
    ],
    
    porQueElegir: {
      titulo: '¿Por qué elegir invitaciones digitales para la primera comunión?',
      descripcion: 'Las invitaciones digitales de primera comunión son la opción elegante, espiritual y eco-friendly perfecta para este sacramento. Comparte los detalles de la ceremonia y recepción de forma instantánea por WhatsApp, incluye información de la iglesia, confirmación de asistencia RSVP, ubicación GPS y galería de fotos.',
      beneficios: [
        { titulo: 'Diseños Religiosos', descripcion: 'Símbolos cristianos y elegantes' },
        { titulo: 'Detalles Completos', descripcion: 'Ceremonia y recepción' },
        { titulo: 'Personalizable', descripcion: 'Fotos y colores a tu gusto' }
      ]
    }
  },

  egreso: {
    nombre: 'Graduación',
    nombreLower: 'graduación',
    slug: 'egreso',
    seo: {
      title: 'Invitaciones de Graduación Digitales Elegantes | Eventia Digital',
      description: 'Compra invitaciones digitales de graduación profesionales. Para bachillerato, universidad y posgrado. Información de ceremonia, RSVP. Envío por WhatsApp.',
      keywords: 'invitaciones graduación digitales, invitaciones grado whatsapp, tarjetas egreso online, comprar invitaciones graduación, invitaciones grado universidad, servicio invitaciones graduación'
    },
    descripcion: 'Descubre nuestros diseños elegantes y profesionales para celebrar tu logro académico. Invitaciones únicas que marquen este momento especial.',
    mensajeWhatsApp: '¡Hola! Me interesa una invitación digital para graduación. ¿Podrían darme más información?',
    
    modelosWebsite: (paisActual) => [
      { nombre: 'Graduate Pride', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/egreso/graduate-pride` },
      { nombre: 'Success Story', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/egreso/success-story` },
      { nombre: 'Achievement', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/egreso/achievement` },
      { nombre: 'New Beginning', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/egreso/new-beginning` }
    ],
    
    modelosClassic: (paisActual) => [
    
      { nombre: 'Classic Profesional', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/egreso/profesional` },
      { nombre: 'Classic Moderno', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/egreso/moderno` },
      { nombre: 'Classic Sobrio', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/egreso/sobrio` }
    ],
    
    porQueElegir: {
      titulo: '¿Por qué elegir invitaciones digitales para tu graduación?',
      descripcion: 'Las invitaciones digitales de graduación son la opción elegante, profesional y eco-friendly perfecta para celebrar tu logro. Comparte los detalles de la ceremonia y fiesta de forma instantánea por WhatsApp, incluye información del evento, confirmación de asistencia RSVP, ubicación GPS y galería de fotos de tu trayectoria.',
      beneficios: [
        { titulo: 'Diseños Profesionales', descripcion: 'Elegantes y sofisticados' },
        { titulo: 'Todos los Niveles', descripcion: 'Bachillerato, universidad, maestría' },
        { titulo: 'Personalizable', descripcion: 'Fotos y logros destacados' }
      ]
    }
  },

  bautizo: {
    nombre: 'Bautizo',
    nombreLower: 'bautizo',
    slug: 'bautizo',
    seo: {
      title: 'Invitaciones de Bautizo Digitales Tiernas | Eventia Digital',
      description: 'Solicita invitaciones digitales de bautizo con diseños religiosos. Información de ceremonia, padrinos, RSVP y galería de fotos. Envío por WhatsApp.',
      keywords: 'invitaciones bautizo digitales, invitaciones bautismo whatsapp, tarjetas bautizo online, comprar invitaciones bautizo, invitaciones bautizo tiernas, servicio invitaciones bautizo'
    },
    descripcion: 'Descubre nuestros diseños tiernos y religiosos para celebrar este sacramento especial. Invitaciones únicas llenas de bendiciones.',
    mensajeWhatsApp: '¡Hola! Me interesa una invitación digital para bautizo. ¿Podrían darme más información?',
    
    modelosWebsite: (paisActual) => [
      { nombre: 'Blessed Dove', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/bautizo/blessed-dove` },
      { nombre: 'Holy Water', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/bautizo/holy-water` },
      { nombre: 'Angel Wings', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/bautizo/angel-wings` },
      { nombre: 'Divine Love', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/bautizo/divine-love` }
    ],
    
    modelosClassic: (paisActual) => [
      { nombre: 'Classic Tierno', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/bautizo/tierno` },
      { nombre: 'Classic Religioso', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/bautizo/religioso` },
      { nombre: 'Classic Moderno', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/bautizo/moderno` },
      { nombre: 'Classic Espiritual', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/bautizo/espiritual` }
    ],
    
    porQueElegir: {
      titulo: '¿Por qué elegir invitaciones digitales para el bautizo?',
      descripcion: 'Las invitaciones digitales de bautizo son la opción tierna, espiritual y eco-friendly perfecta para este sacramento. Comparte los detalles de la ceremonia y celebración de forma instantánea por WhatsApp, incluye información de la iglesia, padrinos, confirmación de asistencia RSVP, ubicación GPS y galería de fotos del bebé.',
      beneficios: [
        { titulo: 'Diseños Tiernos', descripcion: 'Símbolos religiosos adorables' },
        { titulo: 'Info Completa', descripcion: 'Ceremonia, padrinos y celebración' },
        { titulo: 'Galería de Fotos', descripcion: 'Comparte fotos del bebé' }
      ]
    }
  },

  empresarial: {
    nombre: 'Empresarial',
    nombreLower: 'eventos empresariales',
    slug: 'empresarial',
    seo: {
      title: 'Invitaciones Corporativas Digitales Profesionales | Eventia Digital',
      description: 'Contrata invitaciones digitales para eventos empresariales. Conferencias, seminarios, lanzamientos. RSVP automatizado, seguimiento de confirmaciones en tiempo real.',
      keywords: 'invitaciones corporativas digitales, invitaciones eventos empresariales, tarjetas corporativas online, invitaciones empresariales whatsapp, servicio invitaciones corporativas, invitaciones profesionales'
    },
    descripcion: 'Descubre nuestros diseños profesionales y corporativos para tus eventos empresariales. Invitaciones elegantes que reflejen la imagen de tu empresa.',
    mensajeWhatsApp: '¡Hola! Me interesa una invitación digital para un evento corporativo. ¿Podrían darme más información?',
    
    modelosWebsite: (paisActual) => [
      { nombre: 'Corporate Elite', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/empresarial/corporate-elite` },
      { nombre: 'Business Pro', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/empresarial/business-pro` },
      { nombre: 'Executive', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/empresarial/executive` },
      { nombre: 'Professional', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/empresarial/professional` }
    ],
    
    modelosClassic: (paisActual) => [
      { nombre: 'Classic Corporativo', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/empresarial/corporativo` },
      { nombre: 'Classic Profesional', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/empresarial/profesional` },
      { nombre: 'Classic Moderno', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/empresarial/moderno` },
      { nombre: 'Classic Ejecutivo', thumbnail: null, preview: null, demoUrl: `/${paisActual}/demo/classic/empresarial/ejecutivo` }
    ],
    
    porQueElegir: {
      titulo: '¿Por qué elegir invitaciones digitales para eventos corporativos?',
      descripcion: 'Las invitaciones digitales empresariales son la opción profesional, eficiente y eco-friendly perfecta para eventos corporativos. Gestiona confirmaciones automáticamente, incluye agenda del evento, información de ponentes, RSVP automatizado, ubicación GPS y seguimiento de asistencia en tiempo real.',
      beneficios: [
        { titulo: 'Diseños Profesionales', descripcion: 'Imagen corporativa impecable' },
        { titulo: 'RSVP Automatizado', descripcion: 'Gestión eficiente de confirmaciones' },
        { titulo: 'Seguimiento Real', descripcion: 'Control de asistencia en tiempo real' }
      ]
    }
  }
};

/**
 * Obtener configuración de un evento específico
 * @param {string} eventType - Tipo de evento (boda, 15anos, etc.)
 * @returns {object} Configuración del evento
 */
export const getEventConfig = (eventType) => {
  return eventModelsConfig[eventType] || eventModelsConfig.boda;
};