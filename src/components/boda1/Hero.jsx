import { useState, useEffect } from 'react';
import InvitationContent from './InvitationContent';
import WeddingDate from './WeddingDate';
import Galeria from './Galeria';
import Ubicacion from './Ubicacion';
import MesaDeRegalos from './Mesaderegalos';
import CompartirFotos from './CompartirFotos';
import ConfirmacionAsistencia from './ConfirmacionAsistencia';
import FooterPremium from "./FooterPremium";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestType, setGuestType] = useState('singular'); // 'singular' o 'plural'

  useEffect(() => {
    // Leer parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const nombre = params.get('nombre') || params.get('invitado');
    const tipo = params.get('tipo'); // 'familia' o 'pareja' o null
    
    if (nombre) {
      setGuestName(decodeURIComponent(nombre));
      
      // Detectar si es plural (familia/pareja)
      if (tipo === 'familia' || tipo === 'pareja' || 
          nombre.toLowerCase().includes('familia') ||
          nombre.includes('&') || nombre.includes('y')) {
        setGuestType('plural');
      }
    }
  }, []);

  const handleClick = () => {
    setShowContent(true);
  };

  if (showContent) {
    return (
      <div className="w-full">
        <InvitationContent guestName={guestName} guestType={guestType} />
        <WeddingDate />
        <Galeria />
        <Ubicacion />
        <MesaDeRegalos />
        <CompartirFotos />
        <ConfirmacionAsistencia />
        <FooterPremium />
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        #root {
          width: 100%;
          min-height: 100vh;
        }

        @keyframes grow-pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.9);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
          }
          100% {
            transform: translate(-50%, -50%) scale(0.9);
          }
        }

        @keyframes chevrons-fall {
          0% {
            transform: translateY(-5px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        /* Animación suave para el nombre del invitado */
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .guest-name-animate {
          animation: fade-in-down 1.2s ease-out;
        }

        .seal-animate {
          animation: grow-pulse 2.5s ease-in-out infinite;
        }

        .chevrons-container {
          animation: chevrons-fall 2s ease-in-out infinite;
        }

        /* Media queries para móviles */
        @media (max-width: 768px) {
          .envelope-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10vh;
          }
          
          .envelope-left {
            position: relative !important;
            width: auto !important;
            height: 70vh !important;
            min-width: unset !important;
            max-width: none !important;
            object-fit: cover !important;
            left: auto !important;
            transform: translateX(8%) !important;
          }
          
          .envelope-right {
            position: relative !important;
            width: auto !important;
            height: 70vh !important;
            min-width: unset !important;
            max-width: none !important;
            object-fit: cover !important;
            right: auto !important;
            transform: translateX(10%) !important;
          }
          
          .wedding-info {
            bottom: calc(50% + 60px) !important;
          }
          
          .seal-image {
            width: 100px !important;
            height: 100px !important;
          }

          /* Ajuste del sello en móvil */
          .seal-button {
            top: 55% !important;
          }
        }

        @media (max-width: 480px) {
          .envelope-container {
            margin-top: 12vh;
          }
          
          .envelope-left {
            height: 70vh !important;
            max-width: none !important;
            transform: translateX(6%) !important;
          }
          
          .envelope-right {
            height: 70vh !important;
            max-width: none !important;
            transform: translateX(8%) !important;
          }
          
          .wedding-info {
            bottom: calc(50% + 50px) !important;
          }
          
          .seal-image {
            width: 90px !important;
            height: 90px !important;
          }

          /* Ajuste del sello en móvil pequeño */
          .seal-button {
            top: 56% !important;
          }
        }
      `}</style>
      
      <div className="relative w-full h-screen overflow-hidden">
        {/* Diagonal background - lighter gray */}
        <div className="absolute inset-0">
          {/* Top left diagonal section - lighter gray */}
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: '#f0f0f0',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0 100%)'
            }}
          ></div>
          
          {/* Bottom right diagonal section - lighter gray */}
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: '#f0f0f0',
              clipPath: 'polygon(50% 100%, 100% 0, 100% 100%)'
            }}
          ></div>
        </div>

        {/* Envelope images */}
        <div className="envelope-container absolute inset-0 pointer-events-none md:block flex justify-center items-center">
          {/* Capa de respaldo del color del sobre para móviles */}
          <div className="absolute inset-0 bg-[#f0f0f0] md:hidden"></div>
          
          {/* Recurso-1 - aligned to LEFT edge */}
          <img 
            src="/assets/boda1/Recurso-1Sobres-copia-scaled.webp"
            alt="Sobre base"
            className="envelope-left absolute left-0 top-0 h-full object-cover object-left"
            style={{ width: '49.5%', minWidth: '480px' }}
          />
          
          {/* Recurso-2 - aligned to RIGHT edge */}
          <img 
            src="/assets/boda1/Recurso-2Sobres-copia-scaled.webp" 
            alt="Solapa del sobre"
            className="envelope-right absolute right-0 top-0 h-full object-cover object-right"
            style={{ width: '50%', minWidth: '480px' }}
          />
        </div>

        {/* Clickable seal button - outside envelope container with high z-index */}
        <button
          onClick={handleClick}
          className="seal-button absolute focus:outline-none seal-animate"
          style={{ 
            top: '50%', 
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 50,
            cursor: 'pointer'
          }}
          aria-label="Abrir invitación"
        >
          <img 
            src="/assets/boda1/SELLO-VERDE.webp"
            alt="Sello"
            className="seal-image w-24 h-24 md:w-28 md:h-28 object-contain"
            style={{ filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))' }}
          />
        </button>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          
          {/* Wedding info section - raised higher */}
          <div 
            className="wedding-info absolute text-center"
            style={{ 
              bottom: 'calc(50% + 80px)', 
              left: '50%', 
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '500px',
              padding: '0 1rem'
            }}
          >
            {/* NOMBRE DEL INVITADO - MÁS OSCURO Y SIN SEPARADOR */}
{guestName && (
  <div className="guest-name-animate mb-5">
    <p 
      className="uppercase font-semibold"
      style={{ 
        color: '#4a4a4a',
        fontFamily: "'Cormorant Garamond', serif",
        letterSpacing: '0.15em',
        fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
        lineHeight: '1.4'
      }}
    >
      {guestName}
    </p>
  </div>
)}

{/* Decorative line and dot */}
<div className="flex items-center justify-center mb-3">
  <div className="decorative-line" style={{ width: 'clamp(30px, 8vw, 40px)', height: '1px', background: '#c4b5a0' }}></div>
  <div style={{ 
    width: '4px', 
    height: '4px', 
    background: '#c4b5a0', 
    borderRadius: '50%',
    margin: '0 8px'
  }}></div>
  <div className="decorative-line" style={{ width: 'clamp(30px, 8vw, 40px)', height: '1px', background: '#c4b5a0' }}></div>
</div>

{/* TEXTO ADICIONAL SI HAY INVITADO - PRIMERO */}
{guestName && (
  <p 
    className="uppercase font-light mb-2"
    style={{ 
      color: '#8a8a8a',
      fontFamily: "'Cormorant Garamond', serif",
      letterSpacing: '0.2em',
      fontSize: 'clamp(0.75rem, 2.2vw, 0.9rem)'
    }}
  >
    {guestType === 'plural' ? 'Los invitamos a' : 'Te invitamos a'}
  </p>
)}

{/* NUESTRA BODA - SIEMPRE SE MUESTRA */}
<p 
  className="uppercase font-light mb-4"
  style={{ 
    color: '#a8a8a8',
    fontFamily: "'Playfair Display', serif",
    letterSpacing: '0.25em',
    fontSize: 'clamp(0.65rem, 2vw, 0.75rem)'
  }}
>
  NUESTRA BODA
</p>

{/* Names */}
<h1 
  className="names-title font-light mb-4"
  style={{ 
    color: '#6b6b6b',
    fontFamily: "'Playfair Display', serif",
    lineHeight: '1.2',
    fontSize: 'clamp(2rem, 8vw, 3.75rem)'
  }}
>
  Julián & Rocío
</h1>

            {/* Decorative line and date */}
            <div className="flex items-center justify-center mb-6">
              <div className="decorative-line-date" style={{ width: 'clamp(35px, 10vw, 50px)', height: '1px', background: '#c4b5a0' }}></div>
              <p 
                className="uppercase font-light mx-3"
                style={{ 
                  color: '#a8a8a8',
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: '0.2em',
                  fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
                  whiteSpace: 'nowrap'
                }}
              >
                21 DE ENERO
              </p>
              <div className="decorative-line-date" style={{ width: 'clamp(35px, 10vw, 50px)', height: '1px', background: '#c4b5a0' }}></div>
            </div>

            {/* Ver invitación text - in bold */}
            <p 
              className="uppercase font-semibold mt-6 mb-4"
              style={{ 
                color: '#9ca3af',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                letterSpacing: '0.3em',
                fontSize: 'clamp(0.65rem, 2vw, 0.75rem)'
              }}
            >
              Ver invitación
            </p>

            {/* Chevrons container - now inside wedding-info block */}
            <div 
              className="chevrons-container pointer-events-none flex flex-col items-center"
              style={{ 
                lineHeight: 0,
                gap: 0
              }}
            >
              {/* First chevron */}
              <svg 
                className="w-5 h-5 block" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="4.5" 
                viewBox="0 0 24 24" 
                stroke="#a8a8a8"
                style={{ display: 'block' }}
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
              
              {/* Second chevron */}
              <svg 
                className="w-5 h-5 block" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="4.5" 
                viewBox="0 0 24 24" 
                stroke="#a8a8a8"
                style={{ display: 'block', marginTop: '-12px' }}
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;