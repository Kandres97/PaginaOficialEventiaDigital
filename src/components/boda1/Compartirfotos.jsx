  import React from 'react';
  import Lottie from 'lottie-react';
  // Importa tus archivos JSON de animaciones
import parejaAnimation from "../../assets/boda1/pareja.json";
import fotosAnimation from '../../assets/boda1/Animación de fotos.json';
import bebeAnimation from '../../assets/boda1/Animación de bebé (solo adultos).json';

  const CompartirFotos = () => {
    // URL del álbum compartido de Google Photos (reemplaza con tu URL real)
    const albumUrl = "https://photos.app.goo.gl/uZUNsBh9fykKLv5E9";
    
    const handleCompartirFotos = () => {
      window.open(albumUrl, '_blank');
    };

    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

          /* Contenedor estandarizado - mismo tamaño para TODAS las animaciones */
          .lottie-container {
            width: 120px !important;
            height: 120px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            filter: brightness(0) saturate(100%) invert(42%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(88%);
          }

          /* Asegurar que el div interno de Lottie ocupe todo el contenedor */
          .lottie-container > div {
            width: 100% !important;
            height: 100% !important;
          }

          /* Grosor de líneas */
          .lottie-container svg {
            width: 100% !important;
            height: 100% !important;
            stroke-width: 7.5 !important;
          }

          .lottie-container svg * {
            stroke-width: 7.5 !important;
          }

          /* Animación de fotos: contorno gris con relleno blanco */
          .lottie-fotos {
            filter: none !important;
          }

          .lottie-fotos svg * {
            stroke: #6b6b6b !important;
            stroke-width: 4 !important;
            fill: white !important;
          }

          /* Hacer la animación del bebé más pequeña */
          .lottie-bebe {
            width: 100px !important;
            height: 100px !important;
          }

          /* Animación suave para las cards */
          .photo-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .photo-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12) !important;
          }
        `}</style>
        
        <div className="w-full py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 - Familia y Amigos */}
            <div className="photo-card bg-white rounded-2xl border border-gray-200 p-10 text-center shadow-sm">
              {/* Animación Lottie de pareja con filtro gris */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 lottie-container">
                  <Lottie 
                    animationData={parejaAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>
              <h3 
                className="text-xl font-normal mb-4 text-stone-700"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Querida Familia y Amigos
              </h3>
              <p 
                className="text-stone-600 leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}
              >
                Nos llena de alegría compartir este momento tan especial con ustedes. 
                Los esperamos con mucho amor y entusiasmo, listos para celebrar y crear 
                recuerdos maravillosos juntos. Su presencia hace que este día sea aún 
                más significativo. Gracias por acompañarnos en esta nueva etapa de 
                nuestras vidas.
              </p>
            </div>

            {/* Card 2 - Compartir Fotos */}
            <div className="photo-card bg-white rounded-2xl border border-gray-200 p-10 text-center shadow-sm">
              {/* Animación Lottie de fotos con filtro gris Y solo contornos */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 lottie-container lottie-fotos">
                  <Lottie 
                    animationData={fotosAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>
              <h3 
                className="text-xl font-normal mb-4 text-stone-700"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Compartir Fotografías
              </h3>
              <p 
                className="text-stone-600 leading-relaxed mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}
              >
                Queremos que seas parte de nuestra historia. Captura los momentos 
                más especiales desde tu perspectiva y compártelos con nosotros. 
                Cada foto será un tesoro que nos ayudará a revivir la magia de 
                este día inolvidable.
              </p>
              <button 
                onClick={handleCompartirFotos}
                className="bg-stone-600 hover:bg-stone-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.1em' }}
              >
                COMPARTIR FOTOGRAFÍAS
              </button>
            </div>

            {/* Card 3 - Solo Adultos */}
            <div className="photo-card bg-white rounded-2xl border border-gray-200 p-10 text-center shadow-sm">
              {/* Animación Lottie de bebé con filtro gris - MÁS PEQUEÑA */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 lottie-container lottie-bebe">
                  <Lottie 
                    animationData={bebeAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>
              <h3 
                className="text-xl font-normal mb-4 text-stone-700"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Solo Adultos
              </h3>
              <p 
                className="text-stone-600 leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}
              >
                Aunque adoramos a los niños y son una bendición en nuestras vidas, 
                hemos decidido que nuestra celebración sea solo para adultos. 
                Queremos que puedan relajarse y disfrutar plenamente de la fiesta. 
                Agradecemos su comprensión y esperamos verlos listos para bailar y 
                celebrar con nosotros.
              </p>
            </div>

          </div>
        </div>
      </>
    );
  };

  export default CompartirFotos;