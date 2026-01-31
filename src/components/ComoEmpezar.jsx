import React from 'react';

const ComoEmpezar = () => {
  const pasos = [
    {
      numero: "1",
      gif: "/assets/paginaoficial/Elige el estilo de invitación.gif",
      titulo: "Elige el estilo de invitación",
      descripcion: "Selecciona entre nuestros diseños el que más te guste"
    },
    {
      numero: "2",
      gif: "/assets/paginaoficial/Completa un formulario.gif",
      titulo: "Completa un formulario con los datos de tu evento",
      descripcion: "Llena la información de tu evento de manera sencilla"
    },
    {
      numero: "3",
      gif: "/assets/paginaoficial/Entrega.gif",
      titulo: "Entrega en 3 - 5 días laborales",
      descripcion: "Recibe tu invitación lista para compartir"
    }
  ];

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contacto = document.getElementById('contacto');
    if (contacto) {
      contacto.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="como-empezar" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#FFF9F0] via-white to-[#FFF5EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 px-5 py-2 rounded-full mb-4">
            <svg className="w-4 h-4 text-[#B88B80]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-[#B88B80] font-semibold text-sm tracking-wide uppercase">Simples pasos</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900">Cómo </span>
            <span className="text-transparent bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text">Empezar</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            En solo 3 pasos tendrás tu invitación digital lista para compartir
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pasos.map((paso, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-6 sm:p-8 text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#B88B80]/30 transform hover:-translate-y-2">
              <div className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                {paso.numero}
              </div>

              <div className="mt-6 sm:mt-8 mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center mx-auto">
                  <img src={paso.gif} alt={`Paso ${paso.numero}: ${paso.titulo}`} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" loading="lazy" style={{ filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)' }} />
                </div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 group-hover:text-[#B88B80] transition-colors duration-300">
                {paso.titulo}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 px-2 leading-relaxed">
                {paso.descripcion}
              </p>

              {index < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#B88B80] to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <a href="#contacto" onClick={handleScrollToContact} className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <span>¡Comienza Ahora!</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-sm text-gray-500 mt-3">Sin compromiso • Cotización gratuita</p>
        </div>
      </div>
    </section>
  );
};

export default ComoEmpezar;