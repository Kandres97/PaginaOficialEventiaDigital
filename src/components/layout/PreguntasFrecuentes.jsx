import React, { useState } from 'react';

const PreguntasFrecuentes = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const preguntas = [
    {
      pregunta: "¿Qué es exactamente una invitación web?",
      respuesta: "Es un sitio web dinámico y adaptable con efectos visuales, música, ubicación en tiempo real y confirmación de asistencia. No es un PDF ni una imagen, es una experiencia multimedia completa que funciona en cualquier dispositivo."
    },
    {
      pregunta: "¿Puedo personalizar cada invitación con nombres diferentes?",
      respuesta: "Sí, puedes personalizar cada invitación con el nombre de cada invitado sin límite de cantidad. Cada persona recibirá su invitación única y personalizada."
    },
    {
      pregunta: "¿Puedo cambiar de diseño después de elegir uno?",
      respuesta: "Sí, puedes cambiar el diseño antes de la versión final sin costo. Una vez compartida la invitación, los cambios grandes pueden tener costo adicional, pero los ajustes menores son gratuitos."
    },
    {
      pregunta: "¿Qué información necesitan para empezar?",
      respuesta: "Necesitamos: fecha, hora y lugar del evento, fotos que desees incluir, textos personalizados, colores preferidos, y cualquier elemento adicional como música o mapa de ubicación."
    },
    {
      pregunta: "¿Cómo recibo las confirmaciones de asistencia?",
      respuesta: "Las confirmaciones llegan automáticamente según tu plan: por planilla en línea o WhatsApp. Recibes notificaciones instantáneas cada vez que alguien confirma su asistencia."
    },
    {
      pregunta: "¿Puedo guardar mi invitación como recuerdo?",
      respuesta: "Sí, tu invitación permanece activa según el plan elegido. Para mantenerla disponible indefinidamente, puedes adquirir un dominio propio como servicio adicional."
    },
    {
      pregunta: "¿Es fácil de usar para personas poco tecnológicas?",
      respuesta: "Absolutamente. Tus invitados solo necesitan tocar el enlace y todo se abre automáticamente en su dispositivo. No requiere descargas ni instalaciones."
    },
    {
      pregunta: "¿Puedo agregar funciones personalizadas no incluidas?",
      respuesta: "Sí, podemos desarrollar elementos personalizados según tus necesidades. Contáctanos con tu idea y te daremos un presupuesto especial."
    },
    {
      pregunta: "¿Cuáles son las formas de pago?",
      respuesta: "Aceptamos transferencias bancarias, PSE, tarjetas de crédito/débito y plataformas digitales. Puedes pagar en cuotas según el plan elegido."
    },
    {
      pregunta: "¿Cuánto tiempo toma crear mi invitación?",
      respuesta: "El tiempo estándar es de 3-5 días hábiles una vez recibida toda la información. Ofrecemos servicio express con costo adicional si lo necesitas más rápido."
    }
  ];

  const togglePregunta = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas-frecuentes" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#FFF9F0] via-white to-[#FFF5EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Compacto */}
        <div className="text-center mb-8 sm:mb-12">
          <div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 px-5 py-2 rounded-full mb-3"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            <span className="text-[#B88B80] font-bold text-sm tracking-widest uppercase">
              FAQ
            </span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
          >
            <span className="text-gray-900">Preguntas </span>
            <span className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
          <p 
            className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
          >
            Resolvemos tus dudas más comunes
          </p>
        </div>

        {/* Accordion de preguntas */}
        <div 
          className="space-y-3"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}
        >
          {preguntas.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 hover:border-[#B88B80]/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Pregunta - Botón */}
              <button
                onClick={() => togglePregunta(index)}
                className="w-full px-4 sm:px-6 py-3.5 sm:py-4 text-left flex justify-between items-start gap-4 hover:bg-gray-50 transition-colors"
              >
                {/* Icono de pregunta */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#B88B80]/10 to-[#A69B97]/10 flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#B88B80]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>

                {/* Texto de la pregunta */}
                <span className="flex-1 text-sm sm:text-base font-bold text-gray-900 leading-snug">
                  {item.pregunta}
                </span>

                {/* Icono chevron */}
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-[#B88B80] transform transition-transform duration-300 mt-0.5 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Respuesta - Panel expandible */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 pt-2 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100">
                  {/* Barra decorativa */}
                  <div className="w-12 h-1 bg-gradient-to-r from-[#B88B80] to-[#A69B97] rounded-full mb-3"></div>
                  {item.respuesta}
                </div>
              </div>
            </div>
          ))}
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

export default PreguntasFrecuentes;