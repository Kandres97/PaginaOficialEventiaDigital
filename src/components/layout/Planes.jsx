import React, { useState } from 'react';

const Planes = () => {
  const [tipoInvitacion, setTipoInvitacion] = useState('website');
  const [planExpandido, setPlanExpandido] = useState(null);

  const planesWebsite = [
    {
      nombre: 'PLUS',
      precio: 'Básico',
      color: 'from-[#E0D5C8] to-[#D4C4B0]',
      colorTexto: 'text-[#8B7355]',
      popularidad: false,
      caracteristicasDestacadas: [
        'Confirmación WhatsApp',
        'Ubicación Maps',
        'Cuenta Regresiva',
        'Dress Code',
        'Galería 4 fotos',
        'Envíos Ilimitados'
      ],
      todasCaracteristicas: [
        { nombre: 'Confirmación de Asistencia (WhatsApp)', incluido: true },
        { nombre: 'Confirmación de Asistencia (Planilla en línea)', incluido: false },
        { nombre: 'Personalización de Color', incluido: false },
        { nombre: 'Ubicación Maps', incluido: true },
        { nombre: 'Cuenta Regresiva', incluido: true },
        { nombre: 'Itinerario', incluido: false },
        { nombre: 'Dress Code', incluido: true },
        { nombre: 'Sugerencia de Regalos', incluido: true },
        { nombre: 'Envíos Ilimitados', incluido: true },
        { nombre: 'Música de fondo', incluido: false },
        { nombre: 'Nombres de los Invitados', incluido: false },
        { nombre: 'Tickets / Pases', incluido: false },
        { nombre: 'Galería de fotos (max 4)', incluido: true },
        { nombre: 'Galería de fotos (max 8)', incluido: false },
        { nombre: 'Galería de fotos (max 20)', incluido: false },
        { nombre: 'Agendar evento (Google Calendar)', incluido: false },
        { nombre: 'Álbum compartido', incluido: false },
        { nombre: 'Apertura tipo sobre', incluido: false },
        { nombre: 'Vigencia por 1 mes', incluido: false }
      ]
    },
    {
      nombre: 'PREMIUM',
      precio: 'Intermedio',
      color: 'from-[#C9BCA8] to-[#B8A890]',
      colorTexto: 'text-[#8B7355]',
      popularidad: true,
      caracteristicasDestacadas: [
        'Todo lo de PLUS',
        'Confirmación WhatsApp',
        'Personalización de Color',
        'Música de fondo',
        'Galería 8 fotos',
        'Itinerario completo'
      ],
      todasCaracteristicas: [
        { nombre: 'Confirmación de Asistencia (WhatsApp)', incluido: true },
        { nombre: 'Confirmación de Asistencia (Planilla en línea)', incluido: false },
        { nombre: 'Personalización de Color', incluido: true },
        { nombre: 'Ubicación Maps', incluido: true },
        { nombre: 'Cuenta Regresiva', incluido: true },
        { nombre: 'Itinerario', incluido: true },
        { nombre: 'Dress Code', incluido: true },
        { nombre: 'Sugerencia de Regalos', incluido: true },
        { nombre: 'Envíos Ilimitados', incluido: true },
        { nombre: 'Música de fondo', incluido: true },
        { nombre: 'Nombres de los Invitados', incluido: false },
        { nombre: 'Tickets / Pases', incluido: false },
        { nombre: 'Galería de fotos (max 4)', incluido: false },
        { nombre: 'Galería de fotos (max 8)', incluido: true },
        { nombre: 'Galería de fotos (max 20)', incluido: false },
        { nombre: 'Agendar evento (Google Calendar)', incluido: false },
        { nombre: 'Álbum compartido', incluido: false },
        { nombre: 'Apertura tipo sobre', incluido: false },
        { nombre: 'Vigencia por 1 mes', incluido: true }
      ]
    },
    {
      nombre: 'EXCLUSIVE',
      precio: 'Premium',
      color: 'from-[#A08968] to-[#8B7355]',
      colorTexto: 'text-[#6B5744]',
      popularidad: false,
      caracteristicasDestacadas: [
        'Todo lo de PREMIUM',
        'Confirmación en línea',
        'Nombres personalizados',
        'Tickets digitales',
        'Galería 20 fotos',
        'Álbum compartido',
        'Apertura tipo sobre'
      ],
      todasCaracteristicas: [
        { nombre: 'Confirmación de Asistencia (WhatsApp)', incluido: false },
        { nombre: 'Confirmación de Asistencia (Planilla en línea)', incluido: true },
        { nombre: 'Personalización de Color', incluido: true },
        { nombre: 'Ubicación Maps', incluido: true },
        { nombre: 'Cuenta Regresiva', incluido: true },
        { nombre: 'Itinerario', incluido: true },
        { nombre: 'Dress Code', incluido: true },
        { nombre: 'Sugerencia de Regalos', incluido: true },
        { nombre: 'Envíos Ilimitados', incluido: true },
        { nombre: 'Música de fondo', incluido: true },
        { nombre: 'Nombres de los Invitados', incluido: true },
        { nombre: 'Tickets / Pases', incluido: true },
        { nombre: 'Galería de fotos (max 4)', incluido: false },
        { nombre: 'Galería de fotos (max 8)', incluido: false },
        { nombre: 'Galería de fotos (max 20)', incluido: true },
        { nombre: 'Agendar evento (Google Calendar)', incluido: true },
        { nombre: 'Álbum compartido', incluido: true },
        { nombre: 'Apertura tipo sobre', incluido: true },
        { nombre: 'Vigencia por 1 mes', incluido: true }
      ]
    }
  ];

  const planClassic = {
    nombre: 'CLASSIC',
    descripcion: 'Invitación digital impresa en formato físico elegante',
    imagen: '/assets/images/paginaoficial/classic-preview.jpg',
    caracteristicas: [
      'Diseño tipo tarjeta física premium',
      'Portada con foto personalizada',
      'Interior con detalles del evento',
      'Lista de padrinos y familiares',
      'Formato díptico elegante',
      'Estilo dorado y sofisticado',
      'Listo para imprimir',
      'Ideal para eventos formales'
    ]
  };

  const serviciosAdicionales = [
    {
      icono: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      titulo: 'Personalización Total',
      desc: 'Diseño desde cero según tus ideas',
      duracion: 'Diseño único'
    },
    {
      icono: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      titulo: 'Entrega Express',
      desc: 'Invitación lista en tiempo récord',
      duracion: '48 horas'
    },
    {
      icono: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      titulo: 'Menú de Navegación',
      desc: 'Secciones organizadas y elegantes',
      duracion: 'UX mejorada'
    },
    {
      icono: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      titulo: 'Dominio Propio',
      desc: 'URL personalizada memorable',
      duracion: '1 año hosting'
    },
    {
      icono: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      titulo: 'Vigencia Extendida',
      desc: 'Tu invitación disponible por más tiempo',
      duracion: '+3 meses'
    },
    {
      icono: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      titulo: 'Ajustes Post-Entrega',
      desc: 'Modificaciones después de entregar',
      duracion: 'Cambios menores'
    }
  ];

  const scrollToContact = () => {
    const contacto = document.getElementById('contacto');
    if (contacto) {
      contacto.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="planes" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#FFF9F0] via-white to-[#FFF5EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 px-5 py-2 rounded-full mb-4"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            <span className="text-[#B88B80] font-bold text-sm tracking-widest uppercase">
              Planes y Precios
            </span>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
          >
            <span className="text-gray-900">Encuentra tu </span>
            <span className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text text-transparent">
              Plan Ideal
            </span>
          </h2>
          <p 
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
          >
            Elige el formato perfecto para tu invitación especial
          </p>
        </div>

        {/* Toggle Website/Classic */}
        <div 
          className="flex justify-center mb-12 sm:mb-16"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}
        >
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setTipoInvitacion('website')}
              className={`px-8 sm:px-12 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                tipoInvitacion === 'website'
                  ? 'bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white shadow-md'
                  : 'text-gray-700'
              }`}
            >
              Website
            </button>
            <button
              onClick={() => setTipoInvitacion('classic')}
              className={`px-8 sm:px-12 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                tipoInvitacion === 'classic'
                  ? 'bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white shadow-md'
                  : 'text-gray-700'
              }`}
            >
              Classic
            </button>
          </div>
        </div>

        {/* PLANES WEBSITE */}
        {tipoInvitacion === 'website' && (
          <div className="space-y-8">
            {/* Grid de Planes - Mobile: Stack, Desktop: 3 columns */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {planesWebsite.map((plan, index) => (
                <div
                  key={plan.nombre}
                  className="relative group"
                  style={{ 
                    animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s both` 
                  }}
                >
                  {/* Badge "Más Popular" */}
                  {plan.popularidad && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        MÁS POPULAR
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div className={`relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    plan.popularidad ? 'ring-2 ring-[#B88B80] scale-105 sm:scale-110' : ''
                  }`}>
                    {/* Header con gradiente */}
                    <div className={`bg-gradient-to-br ${plan.color} px-6 py-8 text-center relative overflow-hidden`}>
                      {/* Decoración de fondo */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wide mb-2">
                          {plan.nombre}
                        </h3>
                        <p className="text-white/90 text-sm font-medium">
                          {plan.precio}
                        </p>
                      </div>
                    </div>

                    {/* Características Destacadas */}
                    <div className="p-6 space-y-3">
                      {plan.caracteristicasDestacadas.map((caract, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#B88B80] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-700">{caract}</span>
                        </div>
                      ))}
                    </div>

                    {/* Botón Ver Detalles */}
                    <div className="px-6 pb-6">
                      <button
                        onClick={() => setPlanExpandido(planExpandido === index ? null : index)}
                        className="w-full py-3 text-sm font-semibold text-[#B88B80] hover:text-[#A69B97] transition-colors flex items-center justify-center gap-2"
                      >
                        {planExpandido === index ? 'Ocultar detalles' : 'Ver todas las características'}
                        <svg 
                          className={`w-4 h-4 transition-transform ${planExpandido === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {/* CTA Button */}
                    <div className="px-6 pb-6">
                      <button
                        onClick={scrollToContact}
                        className={`w-full bg-gradient-to-r ${plan.color} text-white py-3.5 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                      >
                        Seleccionar Plan
                      </button>
                    </div>
                  </div>

                  {/* Panel Expandible con TODAS las características */}
                  {planExpandido === index && (
                    <div 
                      className="mt-4 bg-white rounded-2xl shadow-lg p-6 space-y-2"
                      style={{ animation: 'fadeInUp 0.3s ease-out' }}
                    >
                      <h4 className="font-bold text-gray-900 mb-4 text-center">
                        Todas las características
                      </h4>
                      {plan.todasCaracteristicas.map((caract, idx) => (
                        <div key={idx} className={`flex items-center justify-between py-2 px-3 rounded-lg ${
                          idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                        }`}>
                          <span className="text-sm text-gray-700 flex-1">{caract.nombre}</span>
                          {caract.incluido ? (
                            <svg className="w-5 h-5 text-[#B88B80] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PLAN CLASSIC */}
        {tipoInvitacion === 'classic' && (
          <div 
            className="max-w-4xl mx-auto"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.8s both' }}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] px-6 sm:px-8 py-8 sm:py-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-16 -translate-x-16"></div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-wide">
                    {planClassic.nombre}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base">
                    {planClassic.descripcion}
                  </p>
                </div>
              </div>

              {/* Preview Visual */}
              <div className="grid sm:grid-cols-2 gap-6 p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white">
                {/* Portada */}
                <div className="bg-[#2C4A6B] rounded-xl p-6 sm:p-8 shadow-lg">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                      </svg>
                    </div>
                    <div className="text-[#D4AF37] text-xs font-serif">SAVE THE DATE</div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white font-serif">Save the Date</h4>
                    <p className="text-sm text-white/80">Espacio para foto</p>
                    <p className="text-xs text-[#D4AF37]">Fecha del evento</p>
                  </div>
                </div>

                {/* Interior */}
                <div className="bg-[#2C4A6B] rounded-xl p-6 sm:p-8 shadow-lg">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-xs text-[#D4AF37] mb-2">SAVE THE DATE</div>
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2">We,</h4>
                      <p className="text-base sm:text-lg text-white font-semibold">Nombres</p>
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 leading-relaxed space-y-2">
                      <p>✨ Detalles del evento</p>
                      <p>📍 Ubicación de la ceremonia</p>
                      <p>🎊 Información de la recepción</p>
                      <p>👥 Padrinos y familiares</p>
                      <p>⏰ Horarios</p>
                    </div>
                    <p className="text-center text-sm text-white font-semibold mt-4">
                      We await you wholeheartedly!
                    </p>
                  </div>
                </div>
              </div>

              {/* Características */}
              <div className="px-6 sm:px-8 py-8 bg-white">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  ✨ Lo que incluye
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {planClassic.caracteristicas.map((caract, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#B88B80] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{caract}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 sm:px-8 pb-8 bg-white">
                <button
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Solicitar Plan Classic
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SERVICIOS ADICIONALES - NUEVA VERSIÓN CON CARDS HORIZONTALES */}
        <div className="mt-20 sm:mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 px-5 py-2 rounded-full mb-4">
              <span className="text-[#B88B80] font-bold text-sm tracking-widest uppercase">
                Mejora tu Plan
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Servicios </span>
              <span className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text text-transparent">
                Adicionales
              </span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lleva tu invitación al siguiente nivel
            </p>
          </div>

          {/* Grid de servicios - Cards horizontales */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {serviciosAdicionales.map((servicio, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                style={{ 
                  animation: `fadeInUp 0.6s ease-out ${1.2 + idx * 0.1}s both` 
                }}
              >
                {/* Barra lateral de color */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#B88B80] to-[#A69B97] group-hover:w-2 transition-all duration-300"></div>

                <div className="p-6 flex items-start gap-5">
                  {/* Ícono */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#B88B80]/10 to-[#A69B97]/10 flex items-center justify-center text-[#B88B80] group-hover:scale-110 transition-transform duration-300">
                      {servicio.icono}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#B88B80] transition-colors">
                        {servicio.titulo}
                      </h4>
                      {/* Badge de duración */}
                      <span className="flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 text-[#B88B80]">
                        {servicio.duracion}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {servicio.desc}
                    </p>
                  </div>
                </div>

                {/* Decoración de hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B88B80]/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Animaciones CSS */}
      <style>{`
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

export default Planes;