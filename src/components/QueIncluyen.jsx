import React, { useState } from 'react';

const QueIncluyen = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const caracteristicas = [
    {
      gif: "/assets/paginaoficial/sobreparainvitacion.gif",
      titulo: "Sobre para abrir la invitación",
      descripcion: "Elegante sobre animado que tus invitados abrirán para revelar la invitación completa"
    },
    {
      gif: "/assets/paginaoficial/nombresdeinvitados.gif",
      titulo: "Nombres de invitados",
      descripcion: "Crea invitaciones con los nombres de tus invitados, entregando una invitación única para cada uno."
    },
    {
      gif: "/assets/paginaoficial/enviolimitado.gif",
      titulo: "Envío ilimitado",
      descripcion: "A través de WhatsApp, Correo Electrónico, Redes Sociales y cualquier plataforma digital"
    },
    {
      gif: "/assets/paginaoficial/musicadefondo.gif",
      titulo: "Música de fondo",
      descripcion: "Vuestra canción sonará de fondo en la invitación"
    },
    {
      gif: "/assets/paginaoficial/cuentaregresiva.gif",
      titulo: "Cuenta Regresiva",
      descripcion: "Emocionante cuenta regresiva en tiempo real directo a la fecha de tu evento"
    },
    {
      gif: "/assets/paginaoficial/ubicacioneindicacion.gif",
      titulo: "Ubicación e Indicaciones",
      descripcion: "Mapa interactivo con la ubicación del evento, tus invitados llegarán sin complicaciones"
    },
    {
      gif: "/assets/paginaoficial/regalos.gif",
      titulo: "Regalos",
      descripcion: "Tus invitados tienen la posibilidad de hacerte llegar sus regalos"
    },
    {
      gif: "/assets/paginaoficial/agenda.gif",
      titulo: "Agenda",
      descripcion: "Tus invitados pueden agendar tu gran día con un solo clic en sus agendas"
    },
    {
      gif: "/assets/paginaoficial/albumdefotos.gif",
      titulo: "Álbum de fotos",
      descripcion: "Una historia única en un hermoso recorrido fotográfico"
    },
    {
      gif: "/assets/paginaoficial/listadeasistentes.gif",
      titulo: "Lista de asistentes (RSVP)",
      descripcion: "Tus invitados pueden confirmar su presencia para ayudarte en la lista de invitados final"
    },
    {
      gif: "/assets/paginaoficial/albumcompartido.gif",
      titulo: "Álbum compartido",
      descripcion: "Los invitados pueden tomar fotos durante el evento y subirlas a un álbum compartido para que todos las vean"
    },
    {
      gifs: ["/assets/paginaoficial/vestido.gif", "/assets/paginaoficial/traje.gif"],
      titulo: "Dress Code",
      descripcion: "Informa a tus invitados el código o estilo de vestimenta elegido para tu gran día"
    },
    {
      gif: "/assets/paginaoficial/itinerario.gif",
      titulo: "Itinerario del evento",
      descripcion: "Detalla el cronograma de actividades para que tus invitados sepan qué esperar en cada momento"
    }
  ];

  const toggleCaracteristica = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="que-incluyen" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#FDFBF9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
  {/* Badge pequeño */}
  <div className="inline-block bg-[#B88B80]/10 px-4 py-2 rounded-full mb-4">
    <p className="text-[#B88B80] font-semibold text-sm tracking-wide">
      CARACTERÍSTICAS
    </p>
  </div>
  
  {/* Título principal */}
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
    ¿Qué incluyen nuestras
    <span className="block text-transparent bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text">
      invitaciones?
    </span>
  </h2>
  
</div>

        {/* Versión Móvil - Acordeón */}
        <div className="md:hidden space-y-3">
          {caracteristicas.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300"
            >
              <button
                onClick={() => toggleCaracteristica(index)}
                className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  {item.gifs ? (
                    <div className="flex gap-1 flex-shrink-0 w-24 h-24">
                      {item.gifs.map((gif, i) => (
                        <img 
                          key={i}
                          src={gif}
                          alt={item.titulo}
                          className="w-[49%] h-full object-contain"
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)'
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <img 
                      src={item.gif}
                      alt={item.titulo}
                      className="w-10 h-10 object-contain flex-shrink-0"
                      style={{ 
                        filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)'
                      }}
                    />
                  )}
                  <span className="text-sm font-semibold text-gray-900">
                    {item.titulo}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 flex-shrink-0 ml-2 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="px-4 pb-4 text-xs text-gray-600 leading-relaxed">
                  {item.descripcion}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Versión Desktop - Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caracteristicas.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex items-center justify-center flex-shrink-0 ${item.gifs ? 'w-36 h-36' : 'w-20 h-20'}`}>
                  {item.gifs ? (
                    <div className="flex gap-1 w-full h-full items-center justify-center">
                      {item.gifs.map((gif, i) => (
                        <img 
                          key={i}
                          src={gif}
                          alt={item.titulo}
                          className="w-[49%] h-full object-contain"
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)'
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <img 
                      src={item.gif}
                      alt={item.titulo}
                      className="w-full h-full object-contain"
                      style={{ 
                        filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)'
                      }}
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QueIncluyen;