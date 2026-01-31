import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import heartAnimation from '../../assets/boda1/heart-animation.json';
import ringsAnimation from '../../assets/boda1/rings-animation.json';

const WeddingDate = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2026-12-19T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        .countdown-bg {
          background-color: #faf9f7;
          position: relative;
        }

        .countdown-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(222, 184, 135, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(188, 143, 143, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }
      `}</style>

      {/* FONDO BLANCO PARA TODO */}
      <div className="bg-white min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center animate-fade-in-up space-y-4">
            {/* Ubicación - MÁS OSCURA */}
            <p 
              className="text-base sm:text-lg md:text-xl tracking-widest text-stone-700 font-medium"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              SAN SEBASTIÁN, ESPAÑA
            </p>

            {/* Fecha Principal - MENOS ESPACIO */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-10 px-4">
              <div className="flex-1 max-w-[150px] sm:max-w-[200px] text-right">
                <p 
                  className="text-xl sm:text-3xl lg:text-4xl tracking-wider text-stone-700 font-medium"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  VIERNES
                </p>
                <div className="w-full h-px bg-stone-400 mt-2"></div>
              </div>

              <div className="flex-shrink-0">
                <p 
                  className="text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-normal text-stone-800"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  19
                </p>
              </div>

              <div className="flex-1 max-w-[150px] sm:max-w-[200px] text-left">
                <p 
                  className="text-xl sm:text-3xl lg:text-4xl tracking-wider text-stone-700 font-medium"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  DICIEMBRE
                </p>
                <div className="w-full h-px bg-stone-400 mt-2"></div>
              </div>
            </div>

            {/* Año - MENOS ESPACIO Y MÁS OSCURO */}
            <p 
              className="text-xl sm:text-2xl lg:text-3xl text-stone-700 font-medium"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              2026
            </p>

            {/* Animación Lottie de corazones - MÁS GRANDE */}
            <div className="flex items-center justify-center pt-2">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                <Lottie 
                  animationData={heartAnimation}
                  loop={true}
                  autoplay={true}
                />
              </div>
            </div>

            {/* Mensaje - MÁS OSCURO */}
            <div className="space-y-4 px-4 pt-2">
              <p 
                className="text-xl sm:text-2xl lg:text-3xl text-stone-700 italic font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ¡Nos casamos!
              </p>
              
              <p 
                className="text-base sm:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto font-normal"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Con gran ilusión, queremos invitarte a ser parte de esta hermosa etapa de nuestro amor.
              </p>
            </div>

            {/* Cuenta Regresiva - CON FONDO BEIGE Y MÁS OSCURA */}
            <div className="space-y-5 pt-4">
              <p 
                className="text-sm sm:text-base tracking-widest text-stone-700 font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                FALTAN
              </p>
              
              <div className="countdown-bg rounded-2xl py-6 px-4 max-w-4xl mx-auto shadow-sm">
                <div className="flex items-start justify-center gap-3 sm:gap-6 lg:gap-10">
                  {/* Días */}
                  <div className="text-center">
                    <div 
                      className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-800 mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {timeLeft.days}
                    </div>
                    <p 
                      className="text-xs sm:text-sm tracking-wider text-stone-600 font-medium"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      DÍAS
                    </p>
                  </div>

                  <div className="text-3xl sm:text-4xl lg:text-5xl text-stone-400 pt-1">:</div>

                  {/* Horas */}
                  <div className="text-center">
                    <div 
                      className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-800 mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {timeLeft.hours}
                    </div>
                    <p 
                      className="text-xs sm:text-sm tracking-wider text-stone-600 font-medium"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      HORAS
                    </p>
                  </div>

                  <div className="text-3xl sm:text-4xl lg:text-5xl text-stone-400 pt-1">:</div>

                  {/* Minutos */}
                  <div className="text-center">
                    <div 
                      className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-800 mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {timeLeft.minutes}
                    </div>
                    <p 
                      className="text-xs sm:text-sm tracking-wider text-stone-600 font-medium"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      MINUTOS
                    </p>
                  </div>

                  <div className="text-3xl sm:text-4xl lg:text-5xl text-stone-400 pt-1">:</div>

                  {/* Segundos */}
                  <div className="text-center">
                    <div 
                      className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-800 mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {timeLeft.seconds}
                    </div>
                    <p 
                      className="text-xs sm:text-sm tracking-wider text-stone-600 font-medium"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      SEGUNDOS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mensaje final - MÁS OSCURO */}
            <p 
              className="text-lg sm:text-xl lg:text-2xl text-stone-700 italic px-4 pt-3 font-medium"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Será un placer contar con su presencia.
            </p>

            {/* Animación de anillos - DEBAJO DEL MENSAJE - MÁS GRANDE */}
            <div className="flex items-center justify-center pt-2">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <Lottie 
                  animationData={ringsAnimation}
                  loop={true}
                  autoplay={true}
                />
              </div>
            </div>

            {/* Divider con línea decorativa - SIN CORAZÓN */}
            <div className="flex items-center justify-center gap-4 px-4 pt-4">
              <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent"></div>
            </div>

            {/* Sección de Padres - MÁS OSCURO */}
            <div className="space-y-8 sm:space-y-10 px-4 pt-6">
              <p 
                className="text-sm sm:text-base lg:text-lg tracking-wide text-stone-600 max-w-2xl mx-auto font-normal"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                CON LA BENDICIÓN DE DIOS Y GUIADOS POR EL AMOR DE NUESTROS PADRES:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 max-w-4xl mx-auto">
                {/* Padres de la Novia */}
                <div className="text-center space-y-3 sm:space-y-4">
                  <p 
                    className="text-lg sm:text-xl lg:text-2xl tracking-wider text-stone-700 font-semibold"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    PADRES DE LA NOVIA
                  </p>
                  <p 
                    className="text-base sm:text-lg lg:text-xl text-stone-600"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Tomás Escamilla
                  </p>
                  <p 
                    className="text-base sm:text-lg lg:text-xl text-stone-600"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Leonor Rosales
                  </p>
                </div>

                {/* Padres del Novio */}
                <div className="text-center space-y-3 sm:space-y-4">
                  <p 
                    className="text-lg sm:text-xl lg:text-2xl tracking-wider text-stone-700 font-semibold"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    PADRES DEL NOVIO
                  </p>
                  <p 
                    className="text-base sm:text-lg lg:text-xl text-stone-600"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Jaime Díaz
                  </p>
                  <p 
                    className="text-base sm:text-lg lg:text-xl text-stone-600"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    María Eugenia Suárez
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeddingDate;