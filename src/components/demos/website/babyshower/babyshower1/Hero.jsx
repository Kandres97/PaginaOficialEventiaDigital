import { useState, useEffect } from 'react';
import InvitationContent from './InvitationContent';
import CountdownSection from './CountdownSection';
import FooterPremium from './FooterPremium';

import recurso1 from '../../../../../assets/demos/website/babyshower/baby1/Recurso-1Sobres-copia-scaled.webp';
import recurso2 from '../../../../../assets/demos/website/babyshower/baby1/Recurso-2Sobres-copia-scaled.webp';
import selloVerde from '../../../../../assets/demos/website/babyshower/baby1/SELLO-VERDE.webp';
import ositos from '../../../../../assets/demos/website/babyshower/baby1/AZ.webp';

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestType, setGuestType] = useState('singular');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nombre = params.get('nombre') || params.get('invitado');
    const tipo = params.get('tipo');
    
    if (nombre) {
      const nombreDecoded = decodeURIComponent(nombre);
      setGuestName(nombreDecoded);
      
      // Detectar si es plural
      const nombreLower = nombreDecoded.toLowerCase();
      const isPlural = 
        tipo === 'familia' || 
        tipo === 'pareja' ||
        nombreLower.includes('familia') ||
        nombreLower.includes(' y ') ||
        nombreLower.includes(' e ') ||
        nombreDecoded.includes('&');
      
      setGuestType(isPlural ? 'plural' : 'singular');
    }
  }, []);

  const handleClick = () => {
    setShowContent(true);
  };

  if (showContent) {
    return (
      <div className="w-full">
        <InvitationContent guestName={guestName} guestType={guestType} />
        <CountdownSection guestType={guestType} />
        <FooterPremium />
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&family=Dancing+Script:wght@400;500;600;700&display=swap');
        
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

        @keyframes fade-in-out {
          0% {
            opacity: 0;
            transform: translateY(4px);
          }
          30% {
            opacity: 1;
            transform: translateY(0);
          }
          70% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-4px);
          }
        }

        .ver-invitacion-text {
          animation: fade-in-out 2.5s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .seal-animate {
          animation: grow-pulse 2.5s ease-in-out infinite;
        }

        .chevrons-container {
          animation: chevrons-fall 2s ease-in-out infinite;
        }

        .shimmer-text {
          background: linear-gradient(90deg, #e8a0bf, #a0c4e8, #e8a0bf, #a0c4e8);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .or-divider {
          background: linear-gradient(135deg, #f9a8d4, #93c5fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ositos-mobile {
          display: none;
        }

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
            bottom: calc(50% + 55px) !important;
          }
          
          .seal-image {
            width: 140px !important;
            height: 140px !important;
          }

          .seal-button {
            top: 55% !important;
          }

          .ositos-mobile {
            display: block !important;
            margin-top: -10px !important;
            margin-bottom: -8px !important;
          }

          .guest-area {
            bottom: 160px !important;
          }

          .question-text {
            font-size: 0.95rem !important;
          }

          .name-text {
            font-size: 2.8rem !important;
          }

          .or-text {
            font-size: 1.3rem !important;
          }

          .date-text {
            font-size: 0.8rem !important;
          }

          .cta-text {
            font-size: 0.75rem !important;
          }

          .guest-invite-text {
            font-size: 0.75rem !important;
          }

          .guest-name-text {
            font-size: 1.2rem !important;
          }

          .ver-invitacion-text {
            font-size: 0.7rem !important;
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
            bottom: calc(50% + 45px) !important;
          }
          
          .seal-image {
            width: 130px !important;
            height: 130px !important;
          }

          .seal-button {
            top: 56% !important;
          }

          .ositos-mobile {
            margin-top: -12px !important;
            margin-bottom: -10px !important;
          }

          .guest-area {
            bottom: 140px !important;
          }
        }
      `}</style>
      
      <div className="relative w-full h-screen overflow-hidden" style={{ background: 'linear-gradient(180deg, #fdf2f8 0%, #f0f4ff 50%, #fdf2f8 100%)' }}>
        {/* Background pattern */}
        <div className="absolute inset-0" style={{ opacity: 0.3 }}>
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: 'linear-gradient(135deg, #fce4ec 0%, #e3f2fd 100%)',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0 100%)'
            }}
          ></div>
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: 'linear-gradient(225deg, #e3f2fd 0%, #fce4ec 100%)',
              clipPath: 'polygon(50% 100%, 100% 0, 100% 100%)'
            }}
          ></div>
        </div>

        {/* Envelope images */}
        <div className="envelope-container absolute inset-0 pointer-events-none md:block flex justify-center items-center">
          <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(180deg, #fdf2f8, #f0f4ff)' }}></div>
          <img 
            src={recurso1}
            alt="Sobre base"
            className="envelope-left absolute left-0 top-0 h-full object-cover object-left"
            style={{ width: '49.5%', minWidth: '480px' }}
          />
          <img 
            src={recurso2}
            alt="Solapa del sobre"
            className="envelope-right absolute right-0 top-0 h-full object-cover object-right"
            style={{ width: '50%', minWidth: '480px' }}
          />
        </div>

        {/* Seal button */}
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
            src={selloVerde}
            alt="Sello"
            className="seal-image w-24 h-24 md:w-28 md:h-28 object-contain"
            style={{ filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))' }}
          />
        </button>

        {/* Text content ABOVE seal */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <div 
            className="wedding-info absolute text-center"
            style={{ 
              bottom: 'calc(50% + 60px)', 
              left: '50%', 
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '500px',
              padding: '0 1rem'
            }}
          >
            {/* Mobile: Ositos image */}
            <img 
              src={ositos}
              alt="Ositos"
              className="ositos-mobile mx-auto"
              style={{ 
                width: '220px', 
                height: 'auto', 
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.1))',
                marginTop: '-10px',
                marginBottom: '-8px',
                opacity: '0.6'
              }}
            />

            {/* Separator */}
            <div className="flex items-center justify-center" style={{ marginBottom: '4px' }}>
              <div style={{ width: 'clamp(25px, 6vw, 35px)', height: '1px', background: 'linear-gradient(to right, #f9a8d4, #c4b5a0)' }}></div>
              <div style={{ width: '5px', height: '5px', background: 'linear-gradient(135deg, #f9a8d4, #93c5fd)', borderRadius: '50%', margin: '0 8px' }}></div>
              <div style={{ width: 'clamp(25px, 6vw, 35px)', height: '1px', background: 'linear-gradient(to left, #93c5fd, #c4b5a0)' }}></div>
            </div>

            {/* Question */}
            <p 
              className="uppercase question-text"
              style={{ 
                color: '#6b6b6b',
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: '0.25em',
                fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
                fontWeight: 600,
                marginBottom: '2px'
              }}
            >
              ¿SABEN QUIÉN SOY?
            </p>

            {/* Names */}
            <h1 
              className="shimmer-text font-bold name-text"
              style={{ 
                fontFamily: "'Dancing Script', cursive",
                lineHeight: '0.95',
                fontSize: 'clamp(1.8rem, 5.5vw, 3.2rem)',
                marginBottom: '0'
              }}
            >
              Noah
            </h1>

            <p 
              className="or-divider font-bold or-text"
              style={{ 
                fontFamily: "'Dancing Script', cursive",
                fontSize: 'clamp(0.9rem, 3vw, 1.4rem)',
                lineHeight: '1',
                margin: '0'
              }}
            >
              or
            </p>

            <h1 
              className="shimmer-text font-bold name-text"
              style={{ 
                fontFamily: "'Dancing Script', cursive",
                lineHeight: '0.95',
                fontSize: 'clamp(1.8rem, 5.5vw, 3.2rem)',
                marginBottom: '5px'
              }}
            >
              Salomé
            </h1>

            {/* Date */}
            <div className="flex items-center justify-center" style={{ marginBottom: '5px' }}>
              <div style={{ width: 'clamp(30px, 8vw, 45px)', height: '1px', background: 'linear-gradient(to right, #f9a8d4, transparent)' }}></div>
              <p 
                className="uppercase mx-2 date-text"
                style={{ 
                  color: '#6b6b6b',
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: '0.2em',
                  fontSize: 'clamp(0.6rem, 1.8vw, 0.75rem)',
                  whiteSpace: 'nowrap',
                  fontWeight: 600
                }}
              >
                15 DE FEBRERO
              </p>
              <div style={{ width: 'clamp(30px, 8vw, 45px)', height: '1px', background: 'linear-gradient(to left, #93c5fd, transparent)' }}></div>
            </div>

            {/* "Ver invitación" text with fade animation */}
            <p
              className="uppercase ver-invitacion-text"
              style={{
                color: '#b8a0c4',
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: '0.2em',
                fontSize: 'clamp(0.65rem, 1.6vw, 0.8rem)',
                fontWeight: 600,
                marginTop: '6px',
                marginBottom: '2px'
              }}
            >
              Click
            </p>

            <div 
              className="chevrons-container pointer-events-none flex flex-col items-center"
              style={{ lineHeight: 0, gap: 0, marginTop: '4px' }}
            >
              <svg 
                className="w-4 h-4 block" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="4.5" 
                viewBox="0 0 24 24" 
                stroke="#d4a0c0"
                style={{ display: 'block' }}
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
              <svg 
                className="w-4 h-4 block" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="4.5" 
                viewBox="0 0 24 24" 
                stroke="#a0b8d4"
                style={{ display: 'block', marginTop: '-10px' }}
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Guest name BELOW seal */}
        {guestName && (
          <div 
            className="guest-area absolute text-center"
            style={{ 
              bottom: '140px',
              left: '50%', 
              transform: 'translateX(-50%)',
              zIndex: 30,
              width: '90%',
              maxWidth: '400px'
            }}
          >
            <p 
              className="uppercase guest-invite-text"
              style={{ 
                color: '#9ca3af',
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: '0.18em',
                fontSize: 'clamp(0.6rem, 1.6vw, 0.7rem)',
                fontWeight: 500,
                marginBottom: '2px'
              }}
            >
              {guestType === 'plural' ? 'Los invitamos a descubrir' : 'Te invitamos a descubrir'}
            </p>
            <p 
              className="uppercase font-semibold guest-name-text"
              style={{ 
                color: '#6b7280',
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: '0.15em',
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                lineHeight: '1.3'
              }}
            >
              {guestName}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;