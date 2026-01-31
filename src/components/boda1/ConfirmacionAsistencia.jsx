import React from 'react';
import Lottie from 'lottie-react';
import confirmarAnimation from "../../assets/boda1/Confirmation.json";

const ConfirmacionAsistencia = () => {
  // ⚠️ IMPORTANTE: Reemplaza con tu URL de Google Forms
  const GOOGLE_FORM_URL = "https://forms.gle/BGtqxbiP6xRZufQY7";

  const handleConfirmarAsistencia = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        .confirmacion-wrapper {
          background: #f8f8f6;
          position: relative;
          padding: 3rem 1rem;
        }

        .confirmacion-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .lottie-confirmar-icon {
          width: 250px;
          height: 250px;
          filter: brightness(0) saturate(100%) invert(42%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(88%);
          margin: 0 auto;
        }

        .confirmacion-content {
          position: absolute;
          top: 65%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          width: 100%;
        }

        .btn-confirmar-asistencia {
          transition: all 0.3s ease;
          background: #6b6b6b;
          border: 2px solid #6b6b6b;
          cursor: pointer;
        }

        .btn-confirmar-asistencia:hover {
          background: #8a8a8a;
          border-color: #8a8a8a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(107, 107, 107, 0.3);
        }

        .info-text {
          margin-top: 1rem;
          font-family: 'Cormorant Garamond', serif;
          color: #6b6b6b;
          font-size: 0.9rem;
        }

        /* Ajuste para móviles */
        @media (max-width: 768px) {
          .lottie-confirmar-icon {
            width: 220px;
            height: 220px;
            margin-bottom: 1.5rem;
          }

          .confirmacion-content {
            top: 70%;
          }
        }
      `}</style>
      
      <div className="confirmacion-wrapper w-full">
        <div className="confirmacion-container">
          
          <div className="flex justify-center">
            <div className="lottie-confirmar-icon">
              <Lottie 
                animationData={confirmarAnimation}
                loop={true}
                autoplay={true}
              />
            </div>
          </div>

          <div className="confirmacion-content">
            <h2 
              className="text-3xl md:text-4xl font-light text-stone-700 mb-6"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em' }}
            >
              Confirma tu Asistencia
            </h2>

            <button 
              onClick={handleConfirmarAsistencia}
              className="btn-confirmar-asistencia text-white font-semibold py-3 px-8 rounded-full"
              style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                letterSpacing: '0.15em',
                fontSize: '1rem'
              }}
            >
              CONFIRMAR ASISTENCIA
            </button>

            <p className="info-text">
              Se abrirá un formulario seguro para confirmar tu asistencia
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmacionAsistencia;