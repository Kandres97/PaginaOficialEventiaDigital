// src/config/routesConfig.js
// Configuración centralizada de rutas para simplificar App.jsx

/**
 * Configuración de demos disponibles
 */
export const demosConfig = {
  boda: {
    label: 'Boda',
    emoji: '💍',
    website: [
      { id: 'boda1', name: 'Serenity', slug: 'boda1' },
      { id: 'boda2', name: 'Primicia', slug: 'primicia' },
      { id: 'boda3', name: 'Passport', slug: 'passport' },
      { id: 'boda4', name: 'Paradise', slug: 'paradise' }
    ],
    classic: [
      { id: 'classic-boda1', name: 'Elegante', slug: 'boda1' },
      { id: 'classic-boda2', name: 'Romántico', slug: 'romantico' },
      { id: 'classic-boda3', name: 'Moderno', slug: 'moderno' },
      { id: 'classic-boda4', name: 'Floral', slug: 'floral' }
    ]
  },
  '15anos': {
    label: '15 Años',
    emoji: '👸',
    website: [
      { id: 'quince1', name: 'Princess Dream', slug: 'princess-dream' },
      { id: 'quince2', name: 'Sweet Fifteen', slug: 'sweet-fifteen' },
      { id: 'quince3', name: 'Royal Crown', slug: 'royal-crown' },
      { id: 'quince4', name: 'Magical Night', slug: 'magical-night' }
    ],
    classic: [
      { id: 'classic-quince1', name: 'Elegante', slug: 'elegante' },
      { id: 'classic-quince2', name: 'Romántico', slug: 'romantico' },
      { id: 'classic-quince3', name: 'Moderno', slug: 'moderno' },
      { id: 'classic-quince4', name: 'Princess', slug: 'princess' }
    ]
  },
  babyshower: {
    label: 'Baby Shower',
    emoji: '👶',
    website: [
      { id: 'baby1', name: 'Sweet Baby', slug: 'baby1' },
      { id: 'baby2', name: 'Little Star', slug: 'little-star' },
      { id: 'baby3', name: 'Baby Love', slug: 'baby-love' },
      { id: 'baby4', name: 'Tiny Feet', slug: 'tiny-feet' }
    ],
    classic: [
      { id: 'classic-baby1', name: 'Tierno', slug: 'tierno' },
      { id: 'classic-baby2', name: 'Dulce', slug: 'dulce' },
      { id: 'classic-baby3', name: 'Moderno', slug: 'moderno' },
      { id: 'classic-baby4', name: 'Adorable', slug: 'adorable' }
    ]
  },
  cumpleanos: {
    label: 'Cumpleaños',
    emoji: '🎂',
    website: [
      { id: 'cumple1', name: 'Party Time', slug: 'party-time' },
      { id: 'cumple2', name: 'Celebration', slug: 'celebration' },
      { id: 'cumple3', name: 'Birthday Bash', slug: 'birthday-bash' },
      { id: 'cumple4', name: 'Happy Day', slug: 'happy-day' }
    ],
    classic: [
      { id: 'classic-cumple1', name: 'Festivo', slug: 'festivo' },
      { id: 'classic-cumple2', name: 'Divertido', slug: 'divertido' },
      { id: 'classic-cumple3', name: 'Moderno', slug: 'moderno' },
      { id: 'classic-cumple4', name: 'Alegre', slug: 'alegre' }
    ]
  },
  comunion: {
    label: 'Comunión',
    emoji: '🕊️',
    website: [
      { id: 'comunion1', name: 'Holy Light', slug: 'holy-light' },
      { id: 'comunion2', name: 'Divine Grace', slug: 'divine-grace' },
      { id: 'comunion3', name: 'Sacred Day', slug: 'sacred-day' },
      { id: 'comunion4', name: 'Blessed Moment', slug: 'blessed-moment' }
    ],
    classic: [
      { id: 'classic-comunion1', name: 'Elegante', slug: 'elegante' },
      { id: 'classic-comunion2', name: 'Religioso', slug: 'religioso' },
      { id: 'classic-comunion3', name: 'Moderno', slug: 'moderno' },
      { id: 'classic-comunion4', name: 'Espiritual', slug: 'espiritual' }
    ]
  },
  egreso: {
    label: 'Egreso',
    emoji: '🎓',
    website: [
      { id: 'egreso1', name: 'Graduate Pride', slug: 'graduate-pride' },
      { id: 'egreso2', name: 'Success Story', slug: 'success-story' },
      { id: 'egreso3', name: 'Achievement', slug: 'achievement' },
      { id: 'egreso4', name: 'New Beginning', slug: 'new-beginning' }
    ],
    classic: [
      { id: 'classic-egreso1', name: 'Elegante', slug: 'elegante' },
      { id: 'classic-egreso2', name: 'Profesional', slug: 'profesional' },
      { id: 'classic-egreso3', name: 'Moderno', slug: 'moderno' },
      { id: 'classic-egreso4', name: 'Sobrio', slug: 'sobrio' }
    ]
  },
  bautizo: {
    label: 'Bautizo',
    emoji: '👼',
    website: [
      { id: 'bautizo1', name: 'Blessed Dove', slug: 'blessed-dove' },
      { id: 'bautizo2', name: 'Holy Water', slug: 'holy-water' },
      { id: 'bautizo3', name: 'Angel Wings', slug: 'angel-wings' },
      { id: 'bautizo4', name: 'Divine Love', slug: 'divine-love' }
    ],
    classic: [
      { id: 'classic-bautizo1', name: 'Tierno', slug: 'tierno' },
      { id: 'classic-bautizo2', name: 'Religioso', slug: 'religioso' },
      { id: 'classic-bautizo3', name: 'Moderno', slug: 'moderno' },
      { id: 'classic-bautizo4', name: 'Espiritual', slug: 'espiritual' }
    ]
  },
  empresarial: {
    label: 'Empresarial',
    emoji: '💼',
    website: [
      { id: 'empresa1', name: 'Corporate Elite', slug: 'corporate-elite' },
      { id: 'empresa2', name: 'Business Pro', slug: 'business-pro' },
      { id: 'empresa3', name: 'Executive', slug: 'executive' },
      { id: 'empresa4', name: 'Professional', slug: 'professional' }
    ],
    classic: [
      { id: 'classic-empresa1', name: 'Corporativo', slug: 'corporativo' },
      { id: 'classic-empresa2', name: 'Profesional', slug: 'profesional' },
      { id: 'classic-empresa3', name: 'Moderno', slug: 'moderno' },
      { id: 'classic-empresa4', name: 'Ejecutivo', slug: 'ejecutivo' }
    ]
  }
};

/**
 * Mapeo de componentes para lazy loading
 * ✅ ACTUALIZADO para coincidir con la estructura real del proyecto
 */
export const componentMap = {
  // Website Demos
  boda1: () => import('../components/demos/website/boda/boda1'),
  boda2: () => import('../components/demos/website/boda/boda2'),
  boda3: () => import('../components/demos/website/boda/boda3'),
  boda4: () => import('../components/demos/website/boda/boda4'),
  quince1: () => import('../components/demos/website/15anos/15anos1'),
  quince2: () => import('../components/demos/website/15anos/15anos2'),
  quince3: () => import('../components/demos/website/15anos/15anos3'),
  quince4: () => import('../components/demos/website/15anos/15anos4'),
  baby1: () => import('../components/demos/website/babyshower/babyshower1/babyshower1'),
  baby2: () => import('../components/demos/website/babyshower/babyshower2'),
  baby3: () => import('../components/demos/website/babyshower/babyshower3'),
  baby4: () => import('../components/demos/website/babyshower/babyshower4'),
  cumple1: () => import('../components/demos/website/cumpleanos/cumpleanos1'),
  cumple2: () => import('../components/demos/website/cumpleanos/cumpleanos2'),
  cumple3: () => import('../components/demos/website/cumpleanos/cumpleanos3'),
  cumple4: () => import('../components/demos/website/cumpleanos/cumpleanos4'),
  comunion1: () => import('../components/demos/website/comunion/comunion1'),
  comunion2: () => import('../components/demos/website/comunion/comunion2'),
  comunion3: () => import('../components/demos/website/comunion/comunion3'),
  comunion4: () => import('../components/demos/website/comunion/comunion4'),
  egreso1: () => import('../components/demos/website/egreso/egreso1'),
  egreso2: () => import('../components/demos/website/egreso/egreso2'),
  egreso3: () => import('../components/demos/website/egreso/egreso3'),
  egreso4: () => import('../components/demos/website/egreso/egreso4'),
  bautizo1: () => import('../components/demos/website/bautizo/bautizo1'),
  bautizo2: () => import('../components/demos/website/bautizo/bautizo2'),
  bautizo3: () => import('../components/demos/website/bautizo/bautizo3'),
  bautizo4: () => import('../components/demos/website/bautizo/bautizo4'),
  empresa1: () => import('../components/demos/website/empresarial/empresarial1'),
  empresa2: () => import('../components/demos/website/empresarial/empresarial2'),
  empresa3: () => import('../components/demos/website/empresarial/empresarial3'),
  empresa4: () => import('../components/demos/website/empresarial/empresarial4'),
  
  // Classic Demos - ✅ Rutas corregidas
  'classic-boda1': () => import('../components/demos/classic/boda/boda1'),
  'classic-boda2': () => import('../components/demos/classic/boda/boda2'),
  'classic-boda3': () => import('../components/demos/classic/boda/boda3'),
  'classic-boda4': () => import('../components/demos/classic/boda/boda4'),
  'classic-quince1': () => import('../components/demos/classic/15anos/15anos1'),
  'classic-quince2': () => import('../components/demos/classic/15anos/15anos2'),
  'classic-quince3': () => import('../components/demos/classic/15anos/15anos3'),
  'classic-quince4': () => import('../components/demos/classic/15anos/15anos4'),
  'classic-baby1': () => import('../components/demos/classic/babyshower/babyshower1'),
  'classic-baby2': () => import('../components/demos/classic/babyshower/babyshower2'),
  'classic-baby3': () => import('../components/demos/classic/babyshower/babyshower3'),
  'classic-baby4': () => import('../components/demos/classic/babyshower/babyshower4'),
  'classic-cumple1': () => import('../components/demos/classic/cumpleanos/cumpleanos1'),
  'classic-cumple2': () => import('../components/demos/classic/cumpleanos/cumpleanos2'),
  'classic-cumple3': () => import('../components/demos/classic/cumpleanos/cumpleanos3'),
  'classic-cumple4': () => import('../components/demos/classic/cumpleanos/cumpleanos4'),
  'classic-comunion1': () => import('../components/demos/classic/comunion/comunion1'),
  'classic-comunion2': () => import('../components/demos/classic/comunion/comunion2'),
  'classic-comunion3': () => import('../components/demos/classic/comunion/comunion3'),
  'classic-comunion4': () => import('../components/demos/classic/comunion/comunion4'),
  'classic-egreso1': () => import('../components/demos/classic/egreso/egreso1'),
  'classic-egreso2': () => import('../components/demos/classic/egreso/egreso2'),
  'classic-egreso3': () => import('../components/demos/classic/egreso/egreso3'),
  'classic-egreso4': () => import('../components/demos/classic/egreso/egreso4'),
  'classic-bautizo1': () => import('../components/demos/classic/bautizo/bautizo1'),
  'classic-bautizo2': () => import('../components/demos/classic/bautizo/bautizo2'),
  'classic-bautizo3': () => import('../components/demos/classic/bautizo/bautizo3'),
  'classic-bautizo4': () => import('../components/demos/classic/bautizo/bautizo4'),
  'classic-empresa1': () => import('../components/demos/classic/empresarial/empresarial1'),
  'classic-empresa2': () => import('../components/demos/classic/empresarial/empresarial2'),
  'classic-empresa3': () => import('../components/demos/classic/empresarial/empresarial3'),
  'classic-empresa4': () => import('../components/demos/classic/empresarial/empresarial4')
};

/**
 * Generar todas las rutas dinámicamente
 */
export const getAllDemoRoutes = () => {
  const routes = [];
  
  Object.entries(demosConfig).forEach(([eventType, config]) => {
    ['website', 'classic'].forEach(variant => {
      config[variant]?.forEach(demo => {
        routes.push({
          ...demo,
          eventType,
          variant,
          component: componentMap[demo.id]
        });
      });
    });
  });
  
  return routes;
};

/**
 * Países soportados
 */
export const countries = ['co', 'es'];