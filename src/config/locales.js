// src/config/locales.js

export const locales = {
  co: {
    pais: "Colombia",
    codigo: "CO",
    bandera: "🇨🇴",
    idioma: "es",
    telefono: "+57 322 829 4382",
    whatsapp: "573228294382",
    region: "Colombia y América Latina",
    mensajeWhatsApp: "¡Hola! Me interesa una invitación digital. ¿Podrían darme más información?"
  },
  
  es: {
    pais: "España",
    codigo: "ES",
    bandera: "🇪🇸",
    idioma: "es",
    telefono: "+34 XXX XXX XXX",
    whatsapp: "34XXXXXXXXX",
    region: "España y Europa",
    mensajeWhatsApp: "¡Hola! Me interesan las invitaciones digitales. ¿Podríais darme más información?"
  }
};

export const getConfig = (pais = 'co') => {
  return locales[pais] || locales.co;
};