// src/pages/EventModelPage.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getConfig } from '../config/locales';
import SEO from '../components/SEO';

/**
 * Componente reutilizable para TODAS las páginas de modelos
 * Usa el mismo estilo que Hero, Galería, Planes, etc.
 */
const EventModelPage = ({ eventConfig }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const paisActual = location.pathname.startsWith('/es') ? 'es' : 'co';
  const config = getConfig(paisActual);
  const [tipoSeleccionado, setTipoSeleccionado] = useState('website');

  // Obtener modelos según el país actual
  const modelosActuales = tipoSeleccionado === 'classic' 
    ? eventConfig.modelosClassic(paisActual)
    : eventConfig.modelosWebsite(paisActual);

  return (
    <>
      <SEO
        title={eventConfig.seo.title}
        description={eventConfig.seo.description}
        canonical={`https://eventiadigital.com/${paisActual}/modelo/${eventConfig.slug}`}
        keywords={eventConfig.seo.keywords}
        type="product"
      />

      <div className="min-h-screen bg-gradient-to-br from-[#FFF9F0] via-white to-[#FFF5EB]">
        {/* Espaciado superior para el navbar fijo */}
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Header - Mismo estilo que Hero/Galería */}
            <div className="text-center mb-12 sm:mb-16">
              <div 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 px-5 py-2 rounded-full mb-4"
                style={{ animation: 'fadeInUp 0.6s ease-out' }}
              >
                <span className="text-[#B88B80] font-bold text-sm tracking-widest uppercase">
                  {eventConfig.nombre}
                </span>
              </div>
              
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
              >
                <span className="text-gray-900">Invitaciones Digitales de </span>
                <span className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text text-transparent">
                  {eventConfig.nombre}
                </span>
              </h1>
              
              <p 
                className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
                style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
              >
                {eventConfig.descripcion}
              </p>
            </div>

            {/* Toggle Website/Classic - Mismo estilo que Galería */}
            <div 
              className="flex justify-center mb-12 sm:mb-16"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}
            >
              <div className="inline-flex bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setTipoSeleccionado('website')}
                  className={`px-8 sm:px-12 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                    tipoSeleccionado === 'website'
                      ? 'bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white shadow-md'
                      : 'text-gray-700'
                  }`}
                >
                  Website
                </button>
                <button
                  onClick={() => setTipoSeleccionado('classic')}
                  className={`px-8 sm:px-12 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                    tipoSeleccionado === 'classic'
                      ? 'bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white shadow-md'
                      : 'text-gray-700'
                  }`}
                >
                  Classic
                </button>
              </div>
            </div>

            {/* Grid de modelos - Mismo estilo que Galería */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
              {modelosActuales.map((modelo, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#F5EBE0] to-[#FAF6F1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => navigate(modelo.demoUrl)}
                  style={{ 
                    animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s both` 
                  }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    {modelo.thumbnail || modelo.preview ? (
                      <>
                        {/* Thumbnail para carga rápida */}
                        <img
                          src={modelo.thumbnail || modelo.preview}
                          alt={`Invitación de ${eventConfig.nombreLower} digital ${modelo.nombre} - Diseño elegante y personalizable`}
                          className="w-full h-full object-cover transition-all duration-300"
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            if (modelo.preview && e.target.src !== modelo.preview) {
                              e.target.src = modelo.preview;
                            } else {
                              e.target.src = '/assets/images/paginaoficial/placeholder.png';
                            }
                          }}
                        />
                        
                        {/* Preview en hover (si existe) */}
                        {modelo.preview && modelo.thumbnail && (
                          <img 
                            src={modelo.preview}
                            alt={`Vista previa completa de ${modelo.nombre}`}
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        )}
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <p className="text-gray-400 text-lg font-semibold">Muy Pronto</p>
                      </div>
                    )}
                    
                    {/* Badge en mobile (visible siempre) */}
                    <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-white font-bold text-sm truncate">{modelo.nombre}</p>
                    </div>

                    {/* Overlay hover en desktop */}
                    <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                        <h3 className="text-white font-bold text-lg mb-3 text-center">{modelo.nombre}</h3>
                        <div className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#B88B80] hover:text-white transition-colors duration-300">
                          Ver Demo →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sección "Por qué elegir" - Mismo estilo que otros componentes */}
            <div className="mt-16 sm:mt-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 px-5 py-2 rounded-full mb-4">
                  <span className="text-[#B88B80] font-bold text-sm tracking-widest uppercase">
                    VENTAJAS
                  </span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-gray-900">¿Por qué elegir </span>
                  <span className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text text-transparent">
                    invitaciones digitales?
                  </span>
                </h2>
                
                <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                  {eventConfig.porQueElegir.descripcion}
                </p>
              </div>

              {/* Grid de beneficios */}
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {eventConfig.porQueElegir.beneficios.map((beneficio, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-[#F5EBE0] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#B88B80]/10"
                    style={{ 
                      animation: `fadeInUp 0.6s ease-out ${1.4 + index * 0.1}s both` 
                    }}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      <span className="text-[#B88B80]">✓</span> {beneficio.titulo}
                    </h3>
                    <p className="text-sm text-gray-600">{beneficio.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section - Mismo estilo que Galería */}
            <div 
              className="text-center bg-gradient-to-br from-[#F5EBE0] to-[#FAF6F1] rounded-3xl p-8 sm:p-12 shadow-lg mt-16"
              style={{ animation: 'fadeInUp 0.6s ease-out 2s both' }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                ¿Listo para crear tu invitación?
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Contáctanos y hagamos realidad tu {eventConfig.nombreLower} perfecta
              </p>
              <button
                onClick={() => {
                  const mensaje = encodeURIComponent(eventConfig.mensajeWhatsApp);
                  window.open(`https://wa.me/${config.whatsapp}?text=${mensaje}`, '_blank');
                }}
                className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white px-8 py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              >
                Solicitar Cotización
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* WhatsApp Float Button - Mismo estilo que HomePage */}
        <div className="fixed bottom-[35px] sm:bottom-14 md:bottom-4 right-2 sm:right-3 md:right-4 z-50 flex flex-col items-end gap-2">
          <div className="bg-rose-500 px-4 py-2 rounded-full shadow-xl animate-pulse">
            <p className="text-xs sm:text-sm font-bold text-white whitespace-nowrap flex items-center gap-1.5">
              <span className="text-base">💬</span>
              ¡Cotiza Ahora!
            </p>
          </div>
          <button
            onClick={() => {
              const mensaje = encodeURIComponent(eventConfig.mensajeWhatsApp);
              window.open(`https://wa.me/${config.whatsapp}?text=${mensaje}`, '_blank');
            }}
            className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-green-600 transition-all duration-300 ring-4 ring-green-200"
            aria-label={`Contactar por WhatsApp para ${eventConfig.nombreLower}`}
          >
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Animaciones CSS - Mismas que otros componentes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default EventModelPage;