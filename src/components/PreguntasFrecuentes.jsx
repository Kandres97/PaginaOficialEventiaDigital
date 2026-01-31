import React, { useState } from 'react';

const PreguntasFrecuentes = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const preguntas = [
    {
      pregunta: "¿Qué es exactamente una 'invitación web'? ¿Es un PDF o un diseño de Canva?",
      respuesta: "Una tarjeta digital es un sitio web dinámico y adaptable, disponible desde cualquier dispositivo conectado a la red. No se trata de una imagen fija ni de una plantilla básica, sino de una experiencia multimedia integral con efectos visuales, sonido ambiente, ubicaciones en tiempo real y múltiples características que un archivo plano o gráfico simple no puede proporcionar."
    },
    {
      pregunta: "¿Puedo personalizar cada invitación con el nombre de un invitado diferente? ¿Hay un límite?",
      respuesta: "Sí, tienes la opción de adaptar cada tarjeta con datos específicos de cada persona. No existe restricción en el número de tarjetas personalizadas que puedes generar, lo que permite que cada destinatario reciba una experiencia exclusiva y se sienta valorado con su invitación particular."
    },
    {
      pregunta: "¿Puedo cambiar de diseño (modelo) una vez que ya he elegido uno?",
      respuesta: "Sí, es posible modificar el formato antes de la versión definitiva. Una vez que se haya compartido la invitación, las modificaciones significativas podrían generar un cargo extra, pero los ajustes pequeños no tienen costo adicional."
    },
    {
      pregunta: "¿Qué información se requiere para entregarles para que empiecen?",
      respuesta: "Deberás facilitar: detalles de la celebración (día, horario, ubicación), imágenes que desees incorporar, mensajes personalizados, paleta de colores o estilos de tu preferencia, y cualquier componente adicional que quieras incluir como audio o geolocalización."
    },
    {
      pregunta: "¿Cómo recibo las confirmaciones de asistencia (RSVP)?",
      respuesta: "Las confirmaciones llegan automáticamente a tu planilla en línea o WhatsApp según el plan que hayas elegido. Cada vez que un invitado confirme su asistencia recibirás una notificación, y podrás consultar las estadísticas actualizadas al instante."
    },
    {
      pregunta: "¿Puedo guardar mi invitación como recuerdo después de que expire?",
      respuesta: "Sí, tu invitación permanece activa según el plan elegido. Si deseas mantenerla disponible indefinidamente como recuerdo digital permanente, puedes adquirir un dominio propio como servicio adicional con costo, permitiéndote conservar ese momento especial y compartirlo con familiares y amigos en cualquier momento."
    },
    {
      pregunta: "¿Mis invitados podrán usar la invitación fácilmente? ¿Incluso si no son muy tecnológicos?",
      respuesta: "Por supuesto. Nuestras invitaciones están creadas para ser sencillas y accesibles. Los invitados solo deben presionar el enlace, y todo se despliega automáticamente en su dispositivo, sin requerir instalación de programas adicionales."
    },
    {
      pregunta: "¿Qué pasa si quiero una función que no está en ningún paquete (ej: Una animación etc.)?",
      respuesta: "Tenemos la capacidad de desarrollar elementos personalizados de acuerdo a lo que necesites. Comunícate con nosotros compartiendo tu propuesta y te ofreceremos un presupuesto especial para implementar ese detalle exclusivo en tu invitación."
    },
    {
      pregunta: "¿Cuáles son las formas de pago disponibles?",
      respuesta: "Aceptamos transferencias bancarias, pagos por PSE, tarjetas de crédito/débito, y pagos a través de plataformas digitales. Puedes pagar en cuotas según el plan que elijas."
    },
    {
      pregunta: "¿Puedo ver ejemplos de invitaciones antes de elegir?",
      respuesta: "Sí, contamos con un catálogo completo mostrando ejemplos de cada categoría de celebración. Puedes revisar distintos diseños y acceder a demostraciones interactivas antes de elegir tu opción."
    },
    {
      pregunta: "¿Cómo veo mi invitación?",
      respuesta: "Una vez lista, recibirás un enlace privado para previsualizar tu invitación. Podrás revisarla y solicitar ajustes antes de la entrega final."
    },
    {
      pregunta: "¿Cuánto tiempo toma crear mi invitación?",
      respuesta: "El plazo estándar de entrega es de 3 a 5 días hábiles una vez recibida toda la información y los recursos requeridos. Disponemos de servicio urgente con cargo extra si requieres tu invitación en menor tiempo."
    }
  ];

  const togglePregunta = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas-frecuentes" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#FDFBF9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
  {/* Badge */}
  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 px-5 py-2 rounded-full mb-4">
    <span className="text-[#B88B80] font-semibold text-sm tracking-wide uppercase">
      Preguntas
    </span>
  </div>
  
  {/* Título */}
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
    <span className="text-gray-900">Preguntas </span>
    <span className="text-transparent bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text">
      Frecuentes
    </span>
  </h2>
  
</div>

        <div className="space-y-3 sm:space-y-4">
          {preguntas.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => togglePregunta(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 pr-6 sm:pr-8">
                  {item.pregunta}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transform transition-transform duration-300 flex-shrink-0 ${
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
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.respuesta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;