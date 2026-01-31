import { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import preboda1 from '/assets/boda1/preboda1.webp';
import adornoSvg from '/assets/boda1/Recurso-2Adornos-Allegria.svg';
import cancion from '/assets/boda1/cancion1.mp3';
import corazonAnimation from '../../assets/boda1/corazon.json';

const InvitationContent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Autoplay bloqueado, el usuario debe interactuar primero');
          setIsPlaying(false);
        }
      }
    };

    playAudio();
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@200;300;400&display=swap');
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Audio de fondo */}
      <audio 
        ref={audioRef} 
        loop
        preload="auto"
      >
        <source src={cancion} type="audio/mpeg" />
      </audio>

      {/* Botón de música flotante - ARRIBA A LA DERECHA */}
      <button
        onClick={toggleMusic}
        className="fixed top-8 right-8 z-50 w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 animate-float"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        <svg 
          className="w-6 h-6 text-stone-600" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      </button>

      <div className="min-h-screen bg-white">
        {/* VERSIÓN MÓVIL */}
        <div className="md:hidden min-h-screen flex flex-col bg-white">
          {/* Imagen con overlay */}
          <div className="relative h-[60vh] overflow-hidden">
            <img 
              src={preboda1}
              alt="Julián y Rocío"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% via-white/20 via-80% to-white"></div>

            {/* SVG Adorno en la parte inferior */}
            <div className="absolute bottom-0 left-0 right-0 w-full">
              <img 
                src={adornoSvg}
                alt="Adorno"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20 bg-white animate-fade-in">
            <div className="text-center w-full max-w-md">
              {/* Espacio arriba de NOS CASAMOS */}
              <div className="h-6"></div>
              
              <p 
                className="text-sm tracking-[0.35em] text-stone-900 mb-1 font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                NOS CASAMOS
              </p>

              {/* Corazón animado */}
              <div className="flex items-center justify-center mb-0">
                <div className="w-12 h-12">
                  <Lottie 
                    animationData={corazonAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>

              <h1 
                className="text-4xl text-stone-700 mb-3 font-normal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                JULIÁN
              </h1>
              
              {/* Y con líneas a los lados - PROPORCIONADAS */}
              <div className="flex items-center justify-center my-3 w-full">
                <div className="w-24 h-px bg-stone-600"></div>
                <p 
                  className="text-xl text-stone-600 mx-4 font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Y
                </p>
                <div className="w-24 h-px bg-stone-600"></div>
              </div>

              <h1 
                className="text-4xl text-stone-700 mt-3 font-normal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ROCÍO
              </h1>
            </div>
          </div>
        </div>

        {/* VERSIÓN DESKTOP */}
        <div className="hidden md:flex min-h-screen bg-white">
          {/* Lado izquierdo - Imagen */}
          <div className="w-1/2 relative overflow-hidden">
            <img 
              src={preboda1}
              alt="Julián y Rocío"
              className="w-full h-full object-cover"
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5"></div>
          </div>

          {/* Lado derecho - Contenido */}
          <div className="w-1/2 flex items-center justify-center px-16 bg-white animate-fade-in">
            <div className="text-center max-w-md w-full">
              <p 
                className="text-base tracking-[0.35em] text-stone-900 mb-4 font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                NOS CASAMOS
              </p>

              {/* Corazón animado */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16">
                  <Lottie 
                    animationData={corazonAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>

              <h1 
                className="text-5xl text-stone-700 mb-4 font-normal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                JULIÁN
              </h1>
              
              {/* Y con líneas a los lados - PROPORCIONADAS */}
              <div className="flex items-center justify-center my-4 w-full">
                <div className="w-32 h-px bg-stone-600"></div>
                <p 
                  className="text-2xl text-stone-600 mx-6 font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Y
                </p>
                <div className="w-32 h-px bg-stone-600"></div>
              </div>

              <h1 
                className="text-5xl text-stone-700 mt-4 font-normal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ROCÍO
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvitationContent;