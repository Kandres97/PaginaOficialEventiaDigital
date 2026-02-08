import { useState, useRef, useEffect } from 'react';
import Interior from './interior';

// IMPORTAR LAS IMÁGENES Y AUDIO DESDE SRC
// Desde: src/components/demos/classic/boda/boda1/WeddingInvitation.jsx
// Hacia: src/assets/demos/classic/Classicboda/boda1/
import backCover from '../../../../../assets/demos/classic/Classicboda/boda1/backCover.webp';
import fondo2 from '../../../../../assets/demos/classic/Classicboda/boda1/fondo2.webp';
import cancion from '../../../../../assets/demos/classic/Classicboda/boda1/cancion.mp3';

function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    // Siempre intentar reproducir la música al abrir
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setMusicPlaying(true))
        .catch((error) => {
          console.log('No se pudo reproducir automáticamente:', error);
        });
    }
  };

  const handleClose = () => setIsOpen(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
        setMusicPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setMusicPlaying(true))
          .catch(console.log);
      }
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
      // Reproducir música al pasar el mouse
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setMusicPlaying(true))
          .catch((error) => {
            console.log('No se pudo reproducir automáticamente:', error);
          });
      }
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        @keyframes pulseButton {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 3px 12px rgba(0,0,0,0.2);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 5px 20px rgba(139, 115, 85, 0.5);
          }
        }
      `}</style>

      <div style={{
        fontFamily: 'Georgia, serif',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#ffffff',
        overflow: 'hidden',
        margin: 0,
        padding: isMobile ? '20px' : '40px',
        gap: isMobile ? '30px' : '80px',
      }}>
        
        {/* INVITACIÓN */}
        <div style={{ order: 1 }}>
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            perspective: '1500px',
          }}>
            <div 
              style={{
                position: 'relative',
                width: isMobile ? '90vw' : '400px',
                maxWidth: '400px',
                height: isMobile ? 'auto' : '550px',
                aspectRatio: isMobile ? '3/4' : 'auto',
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* INTERIOR */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${fondo2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                zIndex: 1,
              }}>
                <Interior />
                <div style={{
                  position: 'absolute',
                  bottom: '15px',
                  right: '15px',
                  zIndex: 5,
                  display: isMobile && isOpen ? 'block' : 'none',
                }}>
                  <button 
                    style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      color: '#6b5d52',
                      fontSize: '1.5em',
                      cursor: 'pointer',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 3px 12px rgba(0,0,0,0.25)',
                      pointerEvents: 'auto',
                      fontWeight: '300',
                      lineHeight: '1',
                    }}
                    onClick={handleClose}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                      e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
                      e.currentTarget.style.color = '#5a4d45';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                      e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                      e.currentTarget.style.color = '#6b5d52';
                    }}
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* PORTADA */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${backCover})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
                transition: 'transform 2s cubic-bezier(0.4, 0.0, 0.2, 1)',
                transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
                backfaceVisibility: 'hidden',
                zIndex: 2,
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 10,
                  display: isMobile && !isOpen ? 'block' : 'none',
                }}>
                  <button 
                    style={{
                      background: 'rgba(255, 255, 255, 0.85)',
                      border: '1px solid rgba(139, 115, 85, 0.4)',
                      borderRadius: '25px',
                      color: '#6b5d52',
                      fontSize: '1.05em',
                      fontFamily: 'Cormorant Garamond, serif',
                      cursor: 'pointer',
                      padding: '10px 28px',
                      transition: 'all 0.3s ease',
                      letterSpacing: '2px',
                      fontWeight: '500',
                      textTransform: 'lowercase',
                      boxShadow: '0 3px 12px rgba(0,0,0,0.2)',
                      animation: 'pulseButton 2s ease-in-out infinite',
                      pointerEvents: 'auto',
                    }}
                    onClick={handleOpen}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.animation = 'none';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.color = '#5a4d45';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.animation = 'pulseButton 2s ease-in-out infinite';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.color = '#6b5d52';
                    }}
                  >
                    abrir invitación
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTÓN CONFIRMAR ASISTENCIA */}
        <div style={{
          order: isMobile ? 3 : 1.5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <button
            onClick={() => {
              const phoneNumber = "573102345678";
              const message = "¡Hola! Confirmo mi asistencia a la boda de Juliana y Camilo 💕";
              window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              border: '1.5px solid #a67c5c',
              borderRadius: '25px',
              color: '#5a4035',
              fontSize: '1.1em',
              fontFamily: 'Cormorant Garamond, serif',
              cursor: 'pointer',
              padding: '12px 30px',
              transition: 'all 0.3s ease',
              letterSpacing: '1.5px',
              fontWeight: '600',
              boxShadow: '0 3px 12px rgba(0,0,0,0.2)',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#a67c5c';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.color = '#5a4035';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span style={{ fontSize: '1em', color: '#d4a574' }}>♥</span>
            Confirmar Asistencia
          </button>
        </div>

        {/* MENSAJE */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          order: 2,
          maxWidth: '350px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '2em', color: '#d4a574' }}>♥</div>
          <p style={{
            fontSize: isMobile ? '1.1em' : '1.2em',
            fontFamily: 'Cormorant Garamond, serif',
            color: '#8b7355',
            lineHeight: '1.8',
            fontStyle: 'italic',
            textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
          }}>
            "El amor es paciente, el amor es bondadoso. No envidia, no es jactancioso, no se enorgullece."
          </p>
          <p style={{
            fontSize: isMobile ? '1.1em' : '1.2em',
            fontFamily: 'Cormorant Garamond, serif',
            color: '#8b7355',
            lineHeight: '1.8',
            fontStyle: 'italic',
            textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
          }}>
            ¡Esperamos celebrar este día especial contigo!
          </p>
        </div>

      </div>

      {/* CONTROL DE MÚSICA */}
      <button 
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          background: 'transparent',
          border: 'none',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          zIndex: 9999,
          transition: 'all 0.3s ease',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0',
        }}
        onClick={toggleMusic}
        title={musicPlaying ? "Pausar música" : "Reproducir música"}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div style={{
          position: 'relative',
          width: '32px',
          height: '32px',
          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
        }}>
          <svg 
            style={{
              width: '32px',
              height: '32px',
              fill: '#c9a87c',
              transition: 'all 0.3s ease',
            }}
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '38px',
            height: '2.5px',
            background: '#c9a87c',
            borderRadius: '2px',
            transform: 'translate(-50%, -50%) rotate(-45deg)',
            opacity: musicPlaying ? 0 : 1,
            transition: 'opacity 0.3s ease',
            filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.4))',
          }}></div>
        </div>
      </button>

      <audio ref={audioRef} loop playsInline src={cancion} />
    </>
  );
}

export default WeddingInvitation;