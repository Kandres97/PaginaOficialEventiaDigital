import React, { useState, useEffect } from 'react';

const Testimonios = () => {
  const [testimonioActivo, setTestimonioActivo] = useState(0);

  const testimonios = [
    {
      id: 1,
      nombre: 'María González',
      evento: 'Boda',
      texto: 'Las invitaciones digitales superaron nuestras expectativas. El diseño fue elegante y todos nuestros invitados quedaron encantados.',
      calificacion: 5,
      iniciales: 'MG',
      color: 'from-[#B88B80] to-[#A69B97]'
    },
    {
      id: 2,
      nombre: 'Carlos Ramírez',
      evento: '15 Años',
      texto: 'Perfecto para los XV años de mi hija. El proceso fue súper fácil y el resultado final fue hermoso. La personalización es increíble.',
      calificacion: 5,
      iniciales: 'CR',
      color: 'from-[#C9BCA8] to-[#B8A890]'
    },
    {
      id: 3,
      nombre: 'Laura Martínez',
      evento: 'Baby Shower',
      texto: 'Me encantó poder enviar las invitaciones por WhatsApp. Fue muy práctico y el diseño quedó precioso.',
      calificacion: 5,
      iniciales: 'LM',
      color: 'from-[#D4C4B0] to-[#E0D5C8]'
    },
    {
      id: 4,
      nombre: 'Andrea Torres',
      evento: 'Empresarial',
      texto: 'Utilizamos sus invitaciones para un evento corporativo y fueron un éxito. Profesionales, elegantes y muy fáciles de compartir.',
      calificacion: 5,
      iniciales: 'AT',
      color: 'from-[#A08968] to-[#8B7355]'
    },
    {
      id: 5,
      nombre: 'Roberto Silva',
      evento: 'Boda',
      texto: 'Excelente servicio y atención al cliente. Nos ayudaron en todo el proceso y el resultado fue exactamente lo que queríamos.',
      calificacion: 5,
      iniciales: 'RS',
      color: 'from-[#B88B80] to-[#A69B97]'
    }
  ];

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonioActivo((prev) => (prev + 1) % testimonios.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonios.length]);

  const handlePrev = () => {
    setTestimonioActivo((prev) => 
      prev === 0 ? testimonios.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setTestimonioActivo((prev) => (prev + 1) % testimonios.length);
  };

  return (
    <section id="testimonios" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#FFF9F0] via-white to-[#FFF5EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Compacto */}
        <div className="text-center mb-8 sm:mb-12">
          <div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 px-5 py-2 rounded-full mb-3"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            <span className="text-[#B88B80] font-bold text-sm tracking-widest uppercase">
              Testimonios
            </span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
          >
            <span className="text-gray-900">Clientes </span>
            <span className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text text-transparent">
              Satisfechos
            </span>
          </h2>
          <p 
            className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
          >
            Lo que dicen quienes ya confiaron en nosotros
          </p>
        </div>

        {/* Carrusel Compacto */}
        <div 
          className="relative max-w-4xl mx-auto"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}
        >
          
          {/* Card del Testimonio - MÁS COMPACTA */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 relative overflow-hidden">
            
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#B88B80]/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
            
            {/* Comillas pequeñas */}
            <div className="absolute top-4 left-4 text-[#B88B80]/20 text-5xl sm:text-6xl font-serif leading-none">
              "
            </div>

            <div className="relative">
              {/* Contenido */}
              <div className="pt-8 sm:pt-10">
                
                {/* Texto del testimonio */}
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  {testimonios[testimonioActivo].texto}
                </p>

                {/* Footer del card: Avatar + Info + Estrellas */}
                <div className="flex items-center justify-between gap-4">
                  
                  {/* Avatar + Info */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Avatar con iniciales */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${testimonios[testimonioActivo].color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <span className="text-white font-bold text-base sm:text-lg">
                        {testimonios[testimonioActivo].iniciales}
                      </span>
                    </div>

                    {/* Nombre y evento */}
                    <div className="min-w-0">
                      <p className="text-sm sm:text-base font-bold text-gray-900 truncate">
                        {testimonios[testimonioActivo].nombre}
                      </p>
                      <p className="text-xs sm:text-sm text-[#B88B80] font-semibold">
                        {testimonios[testimonioActivo].evento}
                      </p>
                    </div>
                  </div>

                  {/* Estrellas */}
                  <div className="flex gap-0.5 sm:gap-1 flex-shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controles de navegación - MÁS COMPACTOS */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6">
            
            {/* Botón anterior */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gradient-to-r hover:from-[#B88B80] hover:to-[#A69B97] hover:text-white transition-all duration-300 border border-gray-100"
              aria-label="Testimonio anterior"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicadores dots */}
            <div className="flex items-center gap-2">
              {testimonios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonioActivo(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === testimonioActivo
                      ? 'w-8 h-2.5 bg-gradient-to-r from-[#B88B80] to-[#A69B97]'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            {/* Botón siguiente */}
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gradient-to-r hover:from-[#B88B80] hover:to-[#A69B97] hover:text-white transition-all duration-300 border border-gray-100"
              aria-label="Siguiente testimonio"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Badge de calificación - MÁS PEQUEÑO */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm sm:text-base font-bold">
                4.9/5.0 promedio
              </span>
            </div>
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

export default Testimonios;