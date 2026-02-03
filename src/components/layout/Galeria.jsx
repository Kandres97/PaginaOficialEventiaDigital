import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { demosConfig } from '../../config/routesConfig';
import { getThumbnailPath } from '../../utils/imageLoader';

const Galeria = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const paisActual = location.pathname.startsWith('/es') ? 'es' : 'co';
  
  const [filtroActivo, setFiltroActivo] = useState('boda');
  const [varianteActiva, setVarianteActiva] = useState('website');

  // GIFs por tipo de evento
  const eventGifs = {
    boda: "/assets/images/paginaoficial/boda.gif",
    '15-anos': "/assets/images/paginaoficial/15.gif",
    'baby-shower': "/assets/images/paginaoficial/babyshower.gif",
    cumpleanos: "/assets/images/paginaoficial/cumpleaños.gif",
    comunion: "/assets/images/paginaoficial/comunion.gif",
    egreso: "/assets/images/paginaoficial/graduacion.gif",
    bautizo: "/assets/images/paginaoficial/bautizo.gif",
    empresarial: "/assets/images/paginaoficial/empresarial.gif"
  };

  // Características destacadas (reducidas a las más importantes)
  const caracteristicasDestacadas = [
    {
      gif: "/assets/images/paginaoficial/sobreparainvitacion.gif",
      titulo: "Sobre Animado",
      descripcion: "Elegante apertura"
    },
    {
      gif: "/assets/images/paginaoficial/nombresdeinvitados.gif",
      titulo: "Nombres Personalizados",
      descripcion: "Invitación única para cada invitado"
    },
    {
      gif: "/assets/images/paginaoficial/enviolimitado.gif",
      titulo: "Envío Ilimitado",
      descripcion: "WhatsApp, Email y Redes"
    },
    {
      gif: "/assets/images/paginaoficial/musicadefondo.gif",
      titulo: "Música de Fondo",
      descripcion: "Tu canción favorita"
    },
    {
      gif: "/assets/images/paginaoficial/cuentaregresiva.gif",
      titulo: "Cuenta Regresiva",
      descripcion: "En tiempo real"
    },
    {
      gif: "/assets/images/paginaoficial/ubicacioneindicacion.gif",
      titulo: "Mapa Interactivo",
      descripcion: "Ubicación precisa"
    },
    {
      gif: "/assets/images/paginaoficial/listadeasistentes.gif",
      titulo: "Confirmación RSVP",
      descripcion: "Gestión de invitados"
    },
    {
      gif: "/assets/images/paginaoficial/albumcompartido.gif",
      titulo: "Álbum Compartido",
      descripcion: "Fotos de todos los invitados"
    }
  ];

  // Obtener demos del tipo de evento activo
  const demosActuales = demosConfig[filtroActivo]?.[varianteActiva] || [];

  const handleVerDemo = (eventType, variant, slug) => {
    const path = variant === 'website' 
      ? `/${paisActual}/demo/${eventType}/${slug}`
      : `/${paisActual}/demo/classic/${eventType}/${slug}`;
    navigate(path);
  };

  return (
    <section 
      id="modelos" 
      className="py-16 sm:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 px-5 py-2 rounded-full mb-4"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            <span className="text-[#B88B80] font-bold text-sm tracking-widest uppercase">
              Nuestras Creaciones
            </span>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
          >
            <span className="text-gray-900">Galería de </span>
            <span className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text text-transparent">
              Diseños
            </span>
          </h2>
        </div>

        {/* Event Type Filters */}
        <div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
        >
          {Object.entries(demosConfig).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setFiltroActivo(key)}
              className={`group relative overflow-hidden rounded-full transition-all duration-300 transform hover:scale-105 ${
                filtroActivo === key
                  ? 'bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                  <img 
                    src={eventGifs[key]} 
                    alt={config.label}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    style={{ 
                      filter: filtroActivo === key 
                        ? 'brightness(0) invert(1)' 
                        : 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)'
                    }}
                  />
                </div>
                <span className="text-sm sm:text-base font-semibold whitespace-nowrap">
                  {config.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Variant Toggle */}
        <div 
          className="flex justify-center mb-12 sm:mb-16"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}
        >
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setVarianteActiva('website')}
              className={`px-6 sm:px-8 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                varianteActiva === 'website'
                  ? 'bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white shadow-md'
                  : 'text-gray-700'
              }`}
            >
              Website
            </button>
            <button
              onClick={() => setVarianteActiva('classic')}
              className={`px-6 sm:px-8 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                varianteActiva === 'classic'
                  ? 'bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white shadow-md'
                  : 'text-gray-700'
              }`}
            >
              Classic
            </button>
          </div>
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {demosActuales.map((demo, index) => {
            const thumbnailPath = getThumbnailPath(
              filtroActivo,
              varianteActiva,
              demo.slug
            );

            return (
              <div
                key={demo.id}
                className="group relative bg-gradient-to-br from-[#F5EBE0] to-[#FAF6F1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleVerDemo(filtroActivo, varianteActiva, demo.slug)}
                style={{ 
                  animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s both` 
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={thumbnailPath}
                    alt={demo.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/assets/images/paginaoficial/placeholder.png';
                    }}
                  />
                  
                  <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <p className="text-white font-bold text-sm truncate">{demo.name}</p>
                  </div>

                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <h3 className="text-white font-bold text-lg mb-3 text-center">{demo.name}</h3>
                      <div className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#B88B80] hover:text-white transition-colors duration-300">
                        Ver Demo →
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {demosActuales.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#B88B80]/20 to-[#A69B97]/20 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-[#B88B80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Próximamente
            </h3>
            <p className="text-gray-600">
              Nuevos diseños en camino para esta categoría
            </p>
          </div>
        )}

        {/* NUEVA SECCIÓN: Qué Incluyen - Versión Compacta */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 px-5 py-2 rounded-full mb-4">
              <span className="text-[#B88B80] font-bold text-sm tracking-widest uppercase">
                TODO INCLUIDO
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Características </span>
              <span className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text text-transparent">
                Destacadas
              </span>
            </h2>
          </div>

          {/* Grid Compacto - Móvil: 2 columnas, Desktop: 4 columnas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {caracteristicasDestacadas.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#F5EBE0] to-white rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#B88B80]/10"
                style={{ 
                  animation: `fadeInUp 0.6s ease-out ${1.4 + index * 0.05}s both` 
                }}
              >
                {/* GIF Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <img 
                    src={item.gif}
                    alt={item.titulo}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)'
                    }}
                  />
                </div>
                
                {/* Título */}
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2">
                  {item.titulo}
                </h3>
                
                {/* Descripción */}
                <p className="text-xs sm:text-sm text-gray-600">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>

          {/* Indicador de más características */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-[#B88B80]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Y muchas características más incluidas en todos los planes
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="text-center bg-gradient-to-br from-[#F5EBE0] to-[#FAF6F1] rounded-3xl p-8 sm:p-12 shadow-lg"
          style={{ animation: 'fadeInUp 0.6s ease-out 2.2s both' }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Creamos diseños 100% personalizados para tu evento especial
          </p>
          <button
            onClick={() => {
              const contacto = document.getElementById('contacto');
              if (contacto) contacto.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white px-8 py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            Solicitar Diseño Personalizado
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* CSS Animations */}
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
    </section>
  );
};

export default Galeria;