import React, { useState } from 'react';

const Planes = () => {
  const [tipoInvitacion, setTipoInvitacion] = useState('website');
  const [planSeleccionado, setPlanSeleccionado] = useState(null);
  const [mostrarComparacion, setMostrarComparacion] = useState(false);

  const planesWebsite = [
    {
      nombre: 'EXCLUSIVE',
      color: 'from-[#8B7355] to-[#A08968]',
      caracteristicas: [
        { nombre: 'Confirmación de Asistencia (Planilla en línea)', incluido: true },
        { nombre: 'Confirmación de Asistencia (WhatsApp)', incluido: false },
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
        { nombre: 'Galería de fotos (max 20)', incluido: true },
        { nombre: 'Galería de fotos (max 8)', incluido: false },
        { nombre: 'Galería de fotos (max 4)', incluido: false },
        { nombre: 'Agendar evento (Google Calendar)', incluido: true },
        { nombre: 'Álbum compartido', incluido: true },
        { nombre: 'Apertura tipo sobre', incluido: true },
        { nombre: 'Vigencia por 1 mes', incluido: true }
      ]
    },
    {
      nombre: 'PREMIUM',
      color: 'from-[#B8A890] to-[#C9BCA8]',
      caracteristicas: [
        { nombre: 'Confirmación de Asistencia (Planilla en línea)', incluido: false },
        { nombre: 'Confirmación de Asistencia (WhatsApp)', incluido: true },
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
        { nombre: 'Galería de fotos (max 20)', incluido: false },
        { nombre: 'Galería de fotos (max 8)', incluido: true },
        { nombre: 'Galería de fotos (max 4)', incluido: false },
        { nombre: 'Agendar evento (Google Calendar)', incluido: false },
        { nombre: 'Álbum compartido', incluido: false },
        { nombre: 'Apertura tipo sobre', incluido: false },
        { nombre: 'Vigencia por 1 mes', incluido: true }
      ]
    },
    {
      nombre: 'PLUS',
      color: 'from-[#D4C4B0] to-[#E0D5C8]',
      caracteristicas: [
        { nombre: 'Confirmación de Asistencia (Planilla en línea)', incluido: false },
        { nombre: 'Confirmación de Asistencia (WhatsApp)', incluido: true },
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
        { nombre: 'Galería de fotos (max 20)', incluido: false },
        { nombre: 'Galería de fotos (max 8)', incluido: false },
        { nombre: 'Galería de fotos (max 4)', incluido: true },
        { nombre: 'Agendar evento (Google Calendar)', incluido: false },
        { nombre: 'Álbum compartido', incluido: false },
        { nombre: 'Apertura tipo sobre', incluido: false },
        { nombre: 'Vigencia por 1 mes', incluido: false }
      ]
    }
  ];

  const planClassic = {
    nombre: 'CLASSIC',
    descripcion: 'Invitación digital impresa en formato físico elegante',
    caracteristicas: [
      'Diseño personalizado tipo tarjeta física',
      'Portada con foto de los novios',
      'Interior con todos los detalles del evento',
      'Información de la ceremonia y recepción',
      'Lista de padrinos y familiares',
      'Formato tipo díptico premium',
      'Diseño dorado y elegante',
      'Entrega en formato digital para imprimir',
      'Ideal para eventos formales y tradicionales'
    ]
  };

  return (
    <section id="planes" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#FFF9F0] via-white to-[#FFF5EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 px-5 py-2 rounded-full mb-4">
            <span className="text-[#B88B80] font-semibold text-sm tracking-wide uppercase">Planes y Precios</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900">Nuestros </span>
            <span className="text-transparent bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text">Planes</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Elige el formato perfecto para tu invitación</p>
        </div>

        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex rounded-full bg-white shadow-lg p-1.5 sm:p-2">
            <button onClick={() => setTipoInvitacion('website')} className={`px-6 sm:px-10 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${tipoInvitacion === 'website' ? 'bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}>Website</button>
            <button onClick={() => setTipoInvitacion('classic')} className={`px-6 sm:px-10 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${tipoInvitacion === 'classic' ? 'bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}>Classic</button>
          </div>
        </div>

        {tipoInvitacion === 'website' && (
          <div>
            <div className="hidden lg:block overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-5 bg-white text-left"><span className="text-lg font-bold text-gray-900">Características</span></th>
                        {planesWebsite.map((plan, index) => (
                          <th key={index} className={`px-6 py-5 text-center bg-gradient-to-br ${plan.color}`}><span className="text-white font-bold text-xl tracking-wide">{plan.nombre}</span></th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {planesWebsite[0].caracteristicas.map((_, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-6 py-4 text-sm text-gray-700">{planesWebsite[0].caracteristicas[rowIndex].nombre}</td>
                          {planesWebsite.map((plan, colIndex) => (
                            <td key={colIndex} className="px-6 py-4 text-center">
                              {plan.caracteristicas[rowIndex].incluido ? (
                                <svg className="w-6 h-6 text-[#B88B80] mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                              ) : (
                                <svg className="w-6 h-6 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="lg:hidden space-y-4">
              <p className="text-center text-sm text-gray-600 mb-6">Toca un plan para ver los detalles</p>
              {planesWebsite.map((plan, planIndex) => (
                <button key={planIndex} onClick={() => setPlanSeleccionado(planIndex)} className="w-full bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-[#B88B80] transition-all transform hover:scale-105">
                  <div className={`bg-gradient-to-br ${plan.color} px-6 py-6 text-center`}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">{plan.nombre}</h3>
                  </div>
                  <div className="px-6 py-4 flex items-center justify-between">
                    <span className="text-sm text-gray-600">Ver características</span>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </button>
              ))}
            </div>

            {planSeleccionado !== null && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 lg:hidden" onClick={() => setPlanSeleccionado(null)}>
                <div className="bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
                  <div className={`bg-gradient-to-br ${planesWebsite[planSeleccionado].color} px-6 py-6 sticky top-0 z-10 shadow-md`}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">{planesWebsite[planSeleccionado].nombre}</h3>
                      <button onClick={() => setPlanSeleccionado(null)} className="text-white hover:bg-white/20 rounded-full p-2 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                  </div>

                  <div className="sticky top-[88px] z-10 bg-white border-b border-gray-200 shadow-sm">
                    <button onClick={() => setMostrarComparacion(!mostrarComparacion)} className="w-full py-3 px-6 flex items-center justify-between text-sm font-semibold text-[#B88B80] hover:bg-gray-50 transition-colors">
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                        {mostrarComparacion ? 'Ocultar comparación' : 'Comparar todos los planes'}
                      </span>
                      <svg className={`w-5 h-5 transition-transform ${mostrarComparacion ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                  </div>

                  {mostrarComparacion && (
                    <div className="bg-gray-50 border-b border-gray-200 p-4 overflow-x-auto">
                      <div className="flex gap-3 min-w-max">
                        {planesWebsite.map((plan, idx) => (
                          <div key={idx} className={`flex-1 min-w-[140px] rounded-lg p-3 border-2 transition-all ${idx === planSeleccionado ? 'border-[#B88B80] bg-white shadow-lg' : 'border-gray-200 bg-white'}`}>
                            <h4 className={`text-sm font-bold mb-2 ${idx === planSeleccionado ? 'text-[#B88B80]' : 'text-gray-600'}`}>{plan.nombre}</h4>
                            <div className="text-xs text-gray-600">{plan.caracteristicas.filter(c => c.incluido).length} características</div>
                            <button onClick={() => setPlanSeleccionado(idx)} className={`mt-2 text-xs font-semibold ${idx === planSeleccionado ? 'text-[#B88B80]' : 'text-gray-500'}`}>{idx === planSeleccionado ? 'Viendo ✓' : 'Ver detalles'}</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex-1 overflow-y-auto p-6 space-y-3">
                    {planesWebsite[planSeleccionado].caracteristicas.map((caract, index) => (
                      <div key={index} className={`flex items-center justify-between py-3 px-4 rounded-lg ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <span className="text-sm text-gray-700 flex-1 pr-3">{caract.nombre}</span>
                        {caract.incluido ? (
                          <svg className="w-6 h-6 text-[#B88B80] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        ) : (
                          <svg className="w-6 h-6 text-gray-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="sticky bottom-0 px-6 pb-6 pt-4 bg-white border-t border-gray-200 shadow-lg">
                    <a href="#contacto" onClick={(e) => { e.preventDefault(); setPlanSeleccionado(null); const contacto = document.getElementById('contacto'); if (contacto) { contacto.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}} className={`block w-full bg-gradient-to-r ${planesWebsite[planSeleccionado].color} text-white text-center py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>Seleccionar {planesWebsite[planSeleccionado].nombre}</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {tipoInvitacion === 'classic' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] px-4 sm:px-6 md:px-8 py-6 sm:py-8 text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{planClassic.nombre}</h3>
                <p className="text-sm sm:text-base text-white/90">{planClassic.descripcion}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white">
                <div className="bg-[#2C4A6B] rounded-xl p-4 sm:p-6 md:p-8 shadow-md">
                  <div className="text-center space-y-3 sm:space-y-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" /></svg>
                    </div>
                    <div className="text-[#D4AF37] text-xs sm:text-sm font-serif">SAVE THE DATE</div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-serif">Save the Date</h4>
                    <p className="text-xs sm:text-sm md:text-base text-white/80">Espacio para foto</p>
                    <p className="text-xs sm:text-sm text-[#D4AF37]">Fecha del evento</p>
                  </div>
                </div>
                <div className="bg-[#2C4A6B] rounded-xl p-4 sm:p-6 md:p-8 shadow-md">
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <div className="text-center">
                      <div className="text-xs sm:text-sm text-[#D4AF37] mb-2">SAVE THE DATE</div>
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">We,</h4>
                      <p className="text-sm sm:text-base md:text-lg text-white font-semibold">Nombres</p>
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 leading-relaxed space-y-1.5 sm:space-y-2">
                      <p>✨ Detalles del evento</p>
                      <p>📍 Ubicación de la ceremonia</p>
                      <p>🎊 Información de la recepción</p>
                      <p>👥 Padrinos y familiares</p>
                      <p>⏰ Horarios</p>
                    </div>
                    <p className="text-center text-xs sm:text-sm md:text-base text-white font-semibold mt-3 sm:mt-4">We await you wholeheartedly!</p>
                  </div>
                </div>
              </div>
              <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 bg-white">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">✨ Lo que incluye:</h4>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  {planClassic.caracteristicas.map((caracteristica, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#B88B80] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <span className="text-xs sm:text-sm md:text-base text-gray-700">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 bg-white">
                <a href="#contacto" onClick={(e) => { e.preventDefault(); const contacto = document.getElementById('contacto'); if (contacto) { contacto.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}} className="block w-full bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white text-center py-3 sm:py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">Solicitar Plan Classic</a>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Servicios Adicionales</h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">Personaliza aún más tu invitación con estos servicios complementarios</p>
          </div>
          <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              { titulo: "Personalización Total", desc: "¿Tienen una idea clara o referencias que les encantan? Diseñamos su invitación web desde una hoja en blanco, asegurando que cada detalle, desde la tipografía hasta la disposición, sea un reflejo fiel de su evento soñado." },
              { titulo: "Entrega Express", desc: "Recibe tu invitación web completa en un plazo garantizado de 48 horas." },
              { titulo: "Menú de Navegación", desc: "Organiza tu invitación en secciones claras (ej: Inicio, Evento, Galería, RSVP) para que tus invitados encuentren fácilmente toda la información." },
              { titulo: "Dominio propio", desc: "Tu invitación en una dirección web única y fácil de recordar (ej: www.nombrenovios.com). Incluye el registro del dominio y el hosting por un año." },
              { titulo: "Visibilidad Extendida", desc: "Mantén tu invitación web activa y en línea durante 3 meses adicionales." },
              { titulo: "Ajustes Post-Entrega", desc: "Cubre una solicitud de cambios menores (como textos, fechas o imágenes) realizados después de la aprobación y entrega final." }
            ].map((servicio, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0"><div className="w-2 h-8 bg-gradient-to-b from-[#B88B80] to-[#A69B97] rounded-full"></div></div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900">{servicio.titulo}</h4>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-6">{servicio.desc}</p>
              </div>
            ))}
          </div>
          <div className="md:hidden space-y-3">
            {[
              { titulo: "Personalización Total", desc: "¿Tienen una idea clara o referencias que les encantan? Diseñamos su invitación web desde una hoja en blanco, asegurando que cada detalle, desde la tipografía hasta la disposición, sea un reflejo fiel de su evento soñado." },
              { titulo: "Entrega Express", desc: "Recibe tu invitación web completa en un plazo garantizado de 48 horas." },
              { titulo: "Menú de Navegación", desc: "Organiza tu invitación en secciones claras (ej: Inicio, Evento, Galería, RSVP) para que tus invitados encuentren fácilmente toda la información." },
              { titulo: "Dominio propio", desc: "Tu invitación en una dirección web única y fácil de recordar (ej: www.nombrenovios.com). Incluye el registro del dominio y el hosting por un año." },
              { titulo: "Visibilidad Extendida", desc: "Mantén tu invitación web activa y en línea durante 3 meses adicionales." },
              { titulo: "Ajustes Post-Entrega", desc: "Cubre una solicitud de cambios menores (como textos, fechas o imágenes) realizados después de la aprobación y entrega final." }
            ].map((servicio, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <button onClick={(e) => { const content = e.currentTarget.nextElementSibling; const chevron = e.currentTarget.querySelector('svg'); content?.classList.toggle('max-h-0'); content?.classList.toggle('max-h-40'); chevron?.classList.toggle('rotate-180'); }} className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-6 bg-gradient-to-b from-[#B88B80] to-[#A69B97] rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-semibold text-gray-900">{servicio.titulo}</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-600 transform transition-transform duration-300 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="max-h-0 overflow-hidden transition-all duration-300">
                  <div className="px-4 pb-4 text-xs text-gray-600 leading-relaxed">{servicio.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planes;