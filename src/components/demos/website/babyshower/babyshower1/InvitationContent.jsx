import { useState, useEffect, useRef } from 'react';
import revelaImg from '../../../../../assets/demos/website/babyshower/baby1/Img1.jpeg';
import fondoImg from '../../../../../assets/demos/website/babyshower/baby1/Fondo.jpg';
import cancion from '../../../../../assets/demos/website/babyshower/baby1/cancion1.mp3';

const InvitationContent = ({ guestName, guestType }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Intentar reproducir automáticamente cuando el componente se monta
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          // Si el navegador bloquea el autoplay, el usuario tendrá que dar click
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&family=Dancing+Script:wght@400;500;600;700&display=swap');
        
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

        @keyframes shimmer-reveal {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .shimmer-reveal-text {
          background: linear-gradient(90deg, #e8a0bf, #a0c4e8, #e8a0bf, #a0c4e8);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-reveal 3s linear infinite;
        }

        .question-mark-animation {
          display: inline-block;
          animation: float 2s ease-in-out infinite;
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

      {/* Botón de música flotante */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 animate-float"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <svg 
            className="w-5 h-5 md:w-6 md:h-6" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            style={{ color: '#e8a0bf' }}
          >
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg 
            className="w-5 h-5 md:w-6 md:h-6" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            style={{ color: '#a0c4e8' }}
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>

      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-blue-50 to-pink-50">
        {/* VERSIÓN MÓVIL */}
        <div className="md:hidden min-h-screen flex flex-col">
          {/* Imagen de revelación */}
          <div className="relative h-[60vh] overflow-hidden">
            <img 
              src={revelaImg}
              alt="Revelación de género"
              className="w-full h-full object-cover object-center"
            />
            
            {/* Overlay gradient suave */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-35% via-white/25 via-65% via-white/70 via-85% to-white to-100%"></div>
          </div>

          {/* Contenido de texto */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-white animate-fade-in relative overflow-hidden">
            {/* Imagen de fondo detrás del texto */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ 
                backgroundImage: `url(${fondoImg})`,
                zIndex: 0
              }}
            ></div>

            <div className="text-center max-w-md relative" style={{ zIndex: 2 }}>
              {/* Pregunta intrigante */}
              <p 
                className="text-sm tracking-widest mb-4"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#9ca3af',
                  fontWeight: 600
                }}
              >
                ¿QUÉ CREES QUE SERÁ?
              </p>

              {/* Noah o Salomé con shimmer */}
              <h1 
                className="shimmer-reveal-text font-bold mb-3"
                style={{ 
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: 'clamp(3.5rem, 10vw, 4.5rem)',
                  lineHeight: '1'
                }}
              >
                Noah
              </h1>

              <p 
                className="font-bold mb-3"
                style={{ 
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: 'clamp(1.8rem, 5vw, 2.2rem)',
                  background: 'linear-gradient(135deg, #f9a8d4, #93c5fd)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                or
              </p>

              <h1 
                className="shimmer-reveal-text font-bold"
                style={{ 
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: 'clamp(3.5rem, 10vw, 4.5rem)',
                  lineHeight: '1'
                }}
              >
                Salomé
              </h1>
            </div>
          </div>
        </div>

        {/* VERSIÓN DESKTOP */}
        <div className="hidden md:flex min-h-screen">
          {/* Lado izquierdo - Imagen */}
          <div className="w-1/2 relative overflow-hidden">
            <img 
              src={revelaImg}
              alt="Revelación de género"
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay muy sutil */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5"></div>
          </div>

          {/* Lado derecho - Contenido */}
          <div className="w-1/2 flex items-center justify-center px-16 bg-white animate-fade-in relative overflow-hidden">
            {/* Imagen de fondo detrás del texto */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-15"
              style={{ 
                backgroundImage: `url(${fondoImg})`,
                zIndex: 0
              }}
            ></div>

            <div className="text-center max-w-lg relative" style={{ zIndex: 2 }}>
              {/* Pregunta intrigante */}
              <p 
                className="text-sm tracking-widest mb-6"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#9ca3af',
                  fontWeight: 600,
                  letterSpacing: '0.3em'
                }}
              >
                ¿QUÉ CREES QUE SERÁ?
              </p>

              {/* Noah o Salomé con shimmer */}
              <h1 
                className="shimmer-reveal-text font-bold mb-3"
                style={{ 
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: 'clamp(3.5rem, 6vw, 5rem)',
                  lineHeight: '1'
                }}
              >
                Noah
              </h1>

              <p 
                className="font-bold mb-3"
                style={{ 
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                  background: 'linear-gradient(135deg, #f9a8d4, #93c5fd)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                or
              </p>

              <h1 
                className="shimmer-reveal-text font-bold mb-8"
                style={{ 
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: 'clamp(3.5rem, 6vw, 5rem)',
                  lineHeight: '1'
                }}
              >
                Salomé
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvitationContent;