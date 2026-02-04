// src/config/locales.js

export const locales = {
  co: {
    pais: "Colombia",
    codigo: "CO",
    bandera: "🇨🇴",
    idioma: "es",
    telefono: "+57 322 829 4382",
    whatsapp: "573228294382", // Tu número real
    region: "Colombia y América Latina",
    // Mensaje personalizado para Colombia
    mensajeWhatsApp: "¡Hola Eventia Digital! 🎉 Me interesa una invitación digital para mi evento en Colombia. ¿Podrían darme más información?"
  },
  
  es: {
    pais: "España",
    codigo: "ES",
    bandera: "🇪🇸",
    idioma: "es",
    telefono: "+57 322 829 4382", // Mismo número colombiano
    whatsapp: "573228294382", // MISMO número colombiano
    region: "España y Europa",
    // Mensaje personalizado para España
    mensajeWhatsApp: "¡Hola Eventia Digital! 🎉 Me interesa una invitación digital para mi evento en España. ¿Podríais darme más información?"
  }
};

export const getConfig = (pais = 'co') => {
  return locales[pais] || locales.co;
};