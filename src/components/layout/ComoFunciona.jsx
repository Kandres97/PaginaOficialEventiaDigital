import React from 'react';

const ComoFunciona = () => {
  const pasos = [
    {
      numero: "1",
      gif: "/assets/images/paginaoficial/Elige el estilo de invitación.gif",
      titulo: "Elige tu diseño",
      descripcion: "Explora nuestra galería y selecciona el estilo que más se adapte a tu evento"
    },
    {
      numero: "2",
      gif: "/assets/images/paginaoficial/Completa un formulario.gif",
      titulo: "Completa el formulario",
      descripcion: "Proporciona los detalles de tu evento y personaliza cada aspecto"
    },
    {
      numero: "3",
      gif: "/assets/images/paginaoficial/Entrega.gif",
      titulo: "Recibe y comparte",
      descripcion: "Tu invitación lista en 3-5 días laborales para compartir sin límites"
    }
  ];

  const scrollToContact = () => {
    const contacto = document.getElementById('contacto');
    if (contacto) {
      contacto.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="como-funciona" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Compacto */}
        <div className="text-center mb-8 sm:mb-12">
          <div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 px-5 py-2 rounded-full mb-3"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            <span className="text-[#B88B80] font-bold text-sm tracking-widest uppercase">
              Proceso Simple
            </span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
          >
            <span className="text-gray-900">¿Cómo </span>
            <span className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text text-transparent">
              Funciona?
            </span>
          </h2>
          <p 
            className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
          >
            Solo 3 pasos para tener tu invitación perfecta
          </p>
        </div>

        {/* Timeline Horizontal Compacto */}
        <div className="relative max-w-4xl mx-auto">
          {/* Línea conectora - Solo desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 mx-20">
            <div className="h-full bg-gradient-to-r from-[#B88B80] via-[#A69B97] to-[#B88B80]"></div>
          </div>

          {/* Grid de Pasos - MÁS COMPACTO */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {pasos.map((paso, idx) => (
              <div
                key={idx}
                className="relative"
                style={{ 
                  animation: `fadeInUp 0.6s ease-out ${0.6 + idx * 0.15}s both` 
                }}
              >
                <div className="group text-center">
                  
                  {/* Número más pequeño */}
                  <div className="relative inline-flex mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B88B80] to-[#A69B97] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#B88B80] to-[#A69B97] text-white flex items-center justify-center text-xl sm:text-2xl font-black shadow-md group-hover:scale-110 transition-transform duration-300">
                      {paso.numero}
                    </div>
                  </div>

                  {/* GIF más pequeño */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4">
                    <img 
                      src={paso.gif} 
                      alt={paso.titulo}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      style={{ 
                        filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)'
                      }}
                    />
                  </div>

                  {/* Título más pequeño */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#B88B80] transition-colors">
                    {paso.titulo}
                  </h3>

                  {/* Descripción más corta */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed px-2">
                    {paso.descripcion}
                  </p>
                </div>

                {/* Flecha más pequeña */}
                {idx < pasos.length - 1 && (
                  <div className="hidden lg:flex absolute top-6 -right-4 items-center justify-center">
                    <svg className="w-8 h-8 text-[#B88B80]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Compacto */}
        <div 
          className="text-center mt-10 sm:mt-12"
          style={{ animation: 'fadeInUp 0.6s ease-out 1.2s both' }}
        >
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
            
            <span className="relative">¡Comienza Ahora!</span>
            <svg className="relative w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <p className="text-xs sm:text-sm text-gray-500 mt-3">
            Sin compromiso • Cotización gratuita
          </p>
        </div>

      </div>

      {/* Animaciones CSS */}
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

export default ComoFunciona;