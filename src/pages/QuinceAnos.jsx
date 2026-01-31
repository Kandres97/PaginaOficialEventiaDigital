import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getConfig } from '../config/locales';
import SEO from '../components/SEO';

const QuinceAnosPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const paisActual = location.pathname.startsWith('/es') ? 'es' : 'co';
  const config = getConfig(paisActual);
  const [tipoSeleccionado, setTipoSeleccionado] = useState('website');

  const modelosWebsite = [
    { nombre: "Princess Dream", imagen: null, demoUrl: `/${paisActual}/demo/15anos/princess-dream` },
    { nombre: "Sweet Fifteen", imagen: null, demoUrl: `/${paisActual}/demo/15anos/sweet-fifteen` },
    { nombre: "Royal Crown", imagen: null, demoUrl: `/${paisActual}/demo/15anos/royal-crown` },
    { nombre: "Magical Night", imagen: null, demoUrl: `/${paisActual}/demo/15anos/magical-night` }
  ];

  const modelosClassic = [
    { nombre: "Classic Elegante", imagen: null, demoUrl: `/${paisActual}/demo/classic/15anos/elegante` },
    { nombre: "Classic Romántico", imagen: null, demoUrl: `/${paisActual}/demo/classic/15anos/romantico` },
    { nombre: "Classic Moderno", imagen: null, demoUrl: `/${paisActual}/demo/classic/15anos/moderno` },
    { nombre: "Classic Princess", imagen: null, demoUrl: `/${paisActual}/demo/classic/15anos/princess` }
  ];

  const modelosActuales = tipoSeleccionado === 'classic' ? modelosClassic : modelosWebsite;

  return (
    <>
      <SEO
        title="Invitaciones de 15 Años Digitales Modernas | Eventia Digital"
        description="Solicita invitaciones de quinceañera digitales únicas. Lista de regalos, RSVP, galería y música personalizada. Envío por WhatsApp. ¡Cotiza ahora!"
        canonical="https://eventiadigital.com/modelo/15-anos"
        keywords="invitaciones 15 años digitales, invitaciones quinceañera whatsapp, tarjetas quince años online, invitaciones quinceañera elegantes, comprar invitaciones 15 años, servicio invitaciones quinceañera"
        type="product"
      />

      <div className="min-h-screen bg-gradient-to-br from-[#F5F1ED] via-[#FDFBF9] to-[#FFF8F0]">
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 mb-4">
                Invitaciones Digitales de <span className="font-bold text-[#B88B80]">Quinceañera</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Descubre nuestros diseños modernos y elegantes para tu celebración de 15 años. Invitaciones únicas que reflejen tu estilo y personalidad.
              </p>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-gray-700 text-lg sm:text-xl mb-6 font-medium">
                Elige el formato de tu invitación de quinceañera:
              </h2>
              <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg flex-wrap justify-center gap-2 sm:gap-0">
                <button 
                  onClick={() => setTipoSeleccionado('website')} 
                  className={`px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                    tipoSeleccionado === 'website' 
                      ? 'bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white shadow-md' 
                      : 'text-gray-600 hover:text-[#B88B80]'
                  }`}
                >
                  Website
                </button>
                <button 
                  onClick={() => setTipoSeleccionado('classic')} 
                  className={`px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                    tipoSeleccionado === 'classic' 
                      ? 'bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white shadow-md' 
                      : 'text-gray-600 hover:text-[#B88B80]'
                  }`}
                >
                  Classic
                </button>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Modelos de Invitaciones {tipoSeleccionado === 'website' ? 'Website' : 'Classic'}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {modelosActuales.map((modelo, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 sm:h-80 bg-gray-100 overflow-hidden">
                    {modelo.imagen ? (
                      <img 
                        src={modelo.imagen} 
                        alt={`Invitación de quinceañera digital ${modelo.nombre} - Diseño elegante y personalizable`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <p className="text-gray-400 text-lg font-semibold">Muy Pronto</p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <button 
                        onClick={() => navigate(modelo.demoUrl)} 
                        className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 text-sm sm:text-base"
                        aria-label={`Ver modelo de invitación ${modelo.nombre}`}
                      >
                        Ver Modelo
                      </button>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {modelo.nombre}
                    </h3>
                    <button 
                      onClick={() => navigate(modelo.demoUrl)} 
                      className="text-[#B88B80] hover:text-[#A69B97] font-medium text-sm transition-colors inline-flex items-center space-x-1"
                      aria-label={`Ver demo de ${modelo.nombre}`}
                    >
                      <span>Ver Demo</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 sm:mt-20 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
                ¿Por qué elegir invitaciones digitales para tu quinceañera?
              </h2>
              <p className="text-gray-600 mb-8 text-base sm:text-lg">
                Las invitaciones digitales para 15 años son la opción moderna, elegante y eco-friendly perfecta para tu celebración. 
                Comparte los detalles de tu gran día de forma instantánea por WhatsApp, incluye confirmación de asistencia RSVP, 
                ubicación GPS, galería de fotos, cronograma del evento y música personalizada.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-[#B88B80] mb-2">✓ 100% Personalizables</h3>
                  <p className="text-sm text-gray-600">Ajusta colores, textos, fotos y música a tu gusto</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-[#B88B80] mb-2">✓ Eco-Friendly</h3>
                  <p className="text-sm text-gray-600">Sin papel, cuidando el medio ambiente</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-[#B88B80] mb-2">✓ Envío Instantáneo</h3>
                  <p className="text-sm text-gray-600">Comparte por WhatsApp en segundos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-[35px] sm:bottom-14 md:bottom-4 right-2 sm:right-3 md:right-4 z-50 flex flex-col items-end gap-2">
          <div className="bg-rose-500 px-4 py-2 rounded-full shadow-xl animate-pulse">
            <p className="text-xs sm:text-sm font-bold text-white whitespace-nowrap flex items-center gap-1.5">
              <span className="text-base">💬</span>
              ¡Cotiza tu quinceañera!
            </p>
          </div>
          
          <button
            onClick={() => {
              const mensaje = encodeURIComponent('¡Hola! Me interesa una invitación digital para mis 15 años. ¿Podrían darme más información?');
              window.open(`https://wa.me/${config.whatsapp}?text=${mensaje}`, '_blank');
            }}
            className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-green-600 transition-all duration-300 ring-4 ring-green-200"
            aria-label="Contactar por WhatsApp para invitaciones de quinceañera"
          >
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default QuinceAnosPage;