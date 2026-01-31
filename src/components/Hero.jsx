import React from 'react';
import { useLocation } from 'react-router-dom';
import { getConfig } from '../config/locales';

const Hero = () => {
  // NUEVO: Detectar país actual
  const location = useLocation();
  const paisActual = location.pathname.startsWith('/es') ? 'es' : 'co';
  const config = getConfig(paisActual);

  const scrollToModelos = () => {
    const modelosSection = document.getElementById('modelos');
    if (modelosSection) {
      modelosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ACTUALIZADO: WhatsApp con número y mensaje dinámico
  const handleWhatsApp = () => {
    const mensaje = encodeURIComponent(config.mensajeWhatsApp);
    window.open(`https://wa.me/${config.whatsapp}?text=${mensaje}`, '_blank');
  };

  return (
    <section 
      id="inicio"
      className="min-h-screen bg-gradient-to-br from-[#F5EBE0] via-[#FAF6F1] to-[#FFF9F0] relative overflow-hidden pt-20 sm:pt-24 md:pt-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-20">
          
          {/* Columna Izquierda - Texto */}
          <div className="space-y-6 sm:space-y-8 z-10">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 sm:mb-4">
                Invitaciones
                <br />
                Digitales
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text text-transparent">
                Únicas y
                <br />
                Memorables
              </h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Invitaciones digitales personalizadas para tus eventos especiales. 
              Diseños elegantes, fáciles de compartir y amigables con el medio ambiente.
            </p>

            <button 
              onClick={scrollToModelos}
              className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Explorar Diseños
            </button>

            {/* Características con GIFs animados sin fondo */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8">
              {/* Diseño Personalizado */}
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <img 
                    src="/assets/paginaoficial/diseño.gif" 
                    alt="Diseño Personalizado" 
                    className="w-full h-full object-contain"
                    loading="lazy"
                    style={{ 
                      filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)'
                    }}
                  />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">Diseño Personalizado</p>
              </div>

              {/* Fácil de Compartir */}
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <img 
                    src="/assets/paginaoficial/facildecompartir.gif" 
                    alt="Fácil de Compartir" 
                    className="w-full h-full object-contain"
                    loading="lazy"
                    style={{ 
                      filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)'
                    }}
                  />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">Fácil de Compartir</p>
              </div>

              {/* Eco-Friendly */}
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <img 
                    src="/assets/paginaoficial/eco.gif" 
                    alt="Eco-Friendly" 
                    className="w-full h-full object-contain"
                    loading="lazy"
                    style={{ 
                      filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)'
                    }}
                  />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">Eco-Friendly</p>
              </div>
            </div>

            {/* NUEVO: Indicador de región */}
            <div className="flex items-center gap-2 text-sm text-gray-600 pt-4">
              <span className="text-2xl">{config.bandera}</span>
              <span>Servicio en {config.region}</span>
            </div>
          </div>

          {/* Columna Derecha - iPhone con video */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Fondo decorativo */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-[#B88B80]/20 to-[#E8D5D0]/20 rounded-full blur-3xl"></div>
            
            {/* iPhone Mockup - Con video */}
            <div className="relative max-w-sm w-full">
              {/* iPhone Frame - Solo borde delgado */}
              <div className="relative mx-auto border-[8px] border-gray-900 rounded-[3rem] shadow-2xl overflow-hidden bg-white" style={{ width: '280px', height: '570px' }}>
                {/* Notch - Más pequeño */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                
                {/* Screen Content - Video de invitación sin padding - OPTIMIZADO */}
                <div className="w-full h-full overflow-hidden flex items-center justify-center">
                  <video 
                    src="/assets/paginaoficial/video.mp4" 
                    autoPlay
                    loop
                    muted
                    playsInline
                    loading="lazy"
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp flotante - ACTUALIZADO con número dinámico */}
      <div className="fixed bottom-[35px] sm:bottom-14 md:bottom-4 right-2 sm:right-3 md:right-4 z-50 flex flex-col items-end gap-2">
        {/* Mensaje flotante con color rosa/coral */}
        <div className="bg-rose-500 px-4 py-2 rounded-full shadow-xl animate-pulse">
          <p className="text-xs sm:text-sm font-bold text-white whitespace-nowrap flex items-center gap-1.5">
            <span className="text-base">💬</span>
            ¡Cotiza Ahora!
          </p>
        </div>
        
        {/* Botón de WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-green-600 transition-all duration-300 ring-4 ring-green-200"
          aria-label="Contactar por WhatsApp"
        >
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;