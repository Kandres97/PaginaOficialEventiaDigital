import { useState, useEffect } from 'react';
import fondoImg from '../../../../../assets/demos/website/babyshower/baby1/Fondo2.jpg';
import cuentaImg from '../../../../../assets/demos/website/babyshower/baby1/Cuenta.png';
import ubicacionImg from '../../../../../assets/demos/website/babyshower/baby1/ubicacion.png';
import regalosImg from '../../../../../assets/demos/website/babyshower/baby1/Regalos.png';
import papas1Img from '../../../../../assets/demos/website/babyshower/baby1/papas1.jpeg';
import papas2Img from '../../../../../assets/demos/website/babyshower/baby1/papas2.jpeg';
import walletGif from '../../../../../assets/demos/website/babyshower/baby1/wallet.gif';
import bebeGif from '../../../../../assets/demos/website/babyshower/baby1/bebe.gif';

const CountdownSection = ({ guestType }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showRSVPForm, setShowRSVPForm] = useState(false);
  const [rsvpData, setRsvpData] = useState({
    nombres: '',
    cantidad: 1
  });

  useEffect(() => {
    // Fecha del evento: Domingo 15 de Febrero 2026, 3:00 PM
    const eventDate = new Date('2026-02-15T15:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOpenMaps = () => {
    window.open('https://maps.app.goo.gl/6bEhVVdVidArLe1W7', '_blank');
  };

  const handleRSVPSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "573224554802"; // Cambia por el número real
    const mensaje = `¡Hola! Confirmo asistencia a la revelación de género:\n\nNombres: ${rsvpData.nombres}\nCantidad de personas: ${rsvpData.cantidad}\n\n💕`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    setShowRSVPForm(false);
    setRsvpData({ nombres: '', cantidad: 1 });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&family=Dancing+Script:wght@400;500;600;700&display=swap');
        
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse-soft {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }

        .pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }

        .parent-photo {
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .parent-photo:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }

        .rsvp-button, .map-button {
          transition: all 0.3s ease;
        }

        .rsvp-button:hover, .map-button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .gift-icon {
          filter: brightness(0) saturate(100%) invert(86%) sepia(9%) saturate(1015%) hue-rotate(207deg) brightness(95%) contrast(88%);
          width: 80px;
          height: 80px;
          object-fit: contain;
        }

        @media (min-width: 768px) {
          .gift-icon {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>

      <div className="min-h-screen relative overflow-hidden bg-white">
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ 
            backgroundImage: `url(${fondoImg})`,
            zIndex: 0
          }}
        ></div>

        {/* CONTENIDO */}
        <div className="relative z-10 py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto space-y-20">

            {/* CUENTA REGRESIVA */}
            <div>
              <img 
                src={cuentaImg}
                alt="Zapatitos"
                className="w-32 h-auto object-contain mx-auto mb-8 float-gentle md:w-40"
              />

              <div className="text-center mb-8">
                <p 
                  className="text-sm tracking-widest mb-4 md:text-base"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif",
                    color: '#9ca3af',
                    fontWeight: 600,
                    letterSpacing: '0.2em'
                  }}
                >
                  {guestType === 'plural' ? 'LOS ESPERAMOS' : 'TE ESPERAMOS'}
                </p>

                <h2 
                  className="text-2xl mb-4 px-4 md:text-4xl"
                  style={{ 
                    fontFamily: "'Dancing Script', cursive",
                    background: 'linear-gradient(135deg, #f9a8d4, #93c5fd)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 600,
                    lineHeight: '1.4'
                  }}
                >
                  Hay secretos que el alma guarda con ternura
                </h2>

                <h3 
                  className="text-3xl mb-6 md:text-5xl"
                  style={{ 
                    fontFamily: "'Dancing Script', cursive",
                    background: 'linear-gradient(135deg, #e8a0bf, #a0c4e8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 700
                  }}
                >
                  y este es el más hermoso de todos
                </h3>

                <p 
                  className="text-base mb-2 md:text-lg"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif",
                    color: '#9ca3af',
                    fontWeight: 600,
                    letterSpacing: '0.15em'
                  }}
                >
                  {guestType === 'plural' ? 'Los invitamos a descubrirlo' : 'Te invitamos a descubrirlo'}
                </p>
              </div>

              {/* Fecha */}
              <div className="text-center mb-8">
                <div className="inline-block px-8 py-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg md:px-12 md:py-6">
                  <p className="text-xs tracking-widest mb-1 md:text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#9ca3af', fontWeight: 600 }}>DOMINGO</p>
                  <p className="text-4xl font-bold mb-1 md:text-6xl" style={{ fontFamily: "'Playfair Display', serif", color: '#6b7280' }}>15</p>
                  <p className="text-base tracking-wider mb-1 md:text-xl" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#9ca3af', fontWeight: 600 }}>FEBRERO</p>
                  <p className="text-2xl font-bold mb-2 md:text-4xl" style={{ fontFamily: "'Playfair Display', serif", color: '#6b7280' }}>2026</p>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto my-2 md:w-24"></div>
                  <p className="text-lg md:text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#9ca3af', fontWeight: 600 }}>3:30 PM</p>
                </div>
              </div>

              {/* Contador */}
              <div className="text-center">
                <p className="text-xs tracking-widest mb-4 md:text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#9ca3af', fontWeight: 600, letterSpacing: '0.2em' }}>FALTAN</p>
                <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto md:gap-6">
                  {[
                    { value: timeLeft.days, label: 'DÍAS' },
                    { value: timeLeft.hours, label: 'HORAS' },
                    { value: timeLeft.minutes, label: 'MIN' },
                    { value: timeLeft.seconds, label: 'SEG' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-3 pulse-soft md:rounded-xl md:p-6">
                      <p className="text-3xl font-bold md:text-5xl" style={{ fontFamily: "'Playfair Display', serif", background: 'linear-gradient(135deg, #f9a8d4, #93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{item.value}</p>
                      <p className="text-xs md:text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#9ca3af', fontWeight: 600 }}>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* UBICACIÓN */}
            <div>
              <div className="flex justify-center mb-8">
                <img src={ubicacionImg} alt="Ubicación" className="w-24 h-24 md:w-32 md:h-32 object-contain float-gentle" />
              </div>
              <h2 className="text-center text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Dancing Script', cursive", background: 'linear-gradient(135deg, #f9a8d4, #93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 }}>¿Dónde será?</h2>
              <div className="text-center mb-6">
                <p className="text-lg md:text-xl mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#6b7280', fontWeight: 600 }}>Haciendas Campestres Bogotá By Luxury</p>
                <p className="text-sm md:text-base" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#9ca3af', fontWeight: 500 }}>Bogotá Colombia</p>
              </div>
              <div className="flex justify-center">
                <button onClick={handleOpenMaps} className="map-button px-8 py-3 md:px-10 md:py-4 rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #f9a8d4, #93c5fd)', color: 'white', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', border: 'none', cursor: 'pointer' }}>VER UBICACIÓN</button>
              </div>
            </div>

            {/* MESA DE REGALOS */}
            <div>
              <div className="flex justify-center mb-8">
                <img src={regalosImg} alt="Regalos" className="w-24 h-24 md:w-32 md:h-32 object-contain float-gentle" style={{ animationDelay: '1s' }} />
              </div>
              <h2 className="text-center text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Dancing Script', cursive", background: 'linear-gradient(135deg, #e8a0bf, #a0c4e8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 }}>Mesa de regalos</h2>
              <div className="text-center max-w-2xl mx-auto mb-8">
                <p className="text-base md:text-lg mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#6b7280', fontWeight: 500, lineHeight: '1.8' }}>Tu presencia es nuestro mejor regalo, pero si deseas contribuir a la llegada de nuestro bebé, te dejamos algunas opciones:</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <img src={walletGif} alt="Lluvia de sobres" className="gift-icon" />
                  </div>
                  <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#6b7280', fontWeight: 600 }}>Lluvia de sobres</h3>
                  <p className="text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#9ca3af', fontWeight: 500 }}>Tu aporte en efectivo será muy apreciado</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <img src={bebeGif} alt="Artículos para bebé" className="gift-icon" />
                  </div>
                  <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#6b7280', fontWeight: 600 }}>Artículos para bebé</h3>
                  <p className="text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#9ca3af', fontWeight: 500 }}>Cualquier detalle será bienvenido</p>
                </div>
              </div>
            </div>


            {/* CONFIRMAR ASISTENCIA */}
            <div>
              <h2 className="text-center text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Dancing Script', cursive", background: 'linear-gradient(135deg, #e8a0bf, #a0c4e8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 }}>Confirma tu asistencia</h2>
              <div className="text-center max-w-2xl mx-auto mb-8">
                <p className="text-base md:text-lg mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#6b7280', fontWeight: 500, lineHeight: '1.8' }}>Tu presencia es muy importante para nosotros. Por favor confirma para poder preparar todo con amor.</p>
              </div>

              {!showRSVPForm ? (
                <div className="flex justify-center">
                  <button onClick={() => setShowRSVPForm(true)} className="rsvp-button px-8 py-3 md:px-10 md:py-4 rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #f9a8d4, #93c5fd)', color: 'white', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', border: 'none', cursor: 'pointer' }}>CONFIRMAR ASISTENCIA</button>
                </div>
              ) : (
                <form onSubmit={handleRSVPSubmit} className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8">
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#6b7280' }}>Nombre(s) completo(s):</label>
                    <input type="text" required value={rsvpData.nombres} onChange={(e) => setRsvpData({...rsvpData, nombres: e.target.value})} className="w-full px-4 py-2 rounded-lg border-2 border-pink-200 focus:border-pink-400 outline-none" style={{ fontFamily: "'Cormorant Garamond', serif" }} placeholder="Ej: Juan Pérez, María García" />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#6b7280' }}>Cantidad de personas:</label>
                    <input type="number" min="1" max="10" required value={rsvpData.cantidad} onChange={(e) => setRsvpData({...rsvpData, cantidad: e.target.value})} className="w-full px-4 py-2 rounded-lg border-2 border-pink-200 focus:border-pink-400 outline-none" style={{ fontFamily: "'Cormorant Garamond', serif" }} />
                  </div>
                  <div className="flex gap-3">
                    <button type="submit" className="flex-1 px-6 py-3 rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #f9a8d4, #93c5fd)', color: 'white', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, border: 'none', cursor: 'pointer' }}>ENVIAR</button>
                    <button type="button" onClick={() => setShowRSVPForm(false)} className="px-6 py-3 rounded-full" style={{ background: '#f3f4f6', color: '#6b7280', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, border: 'none', cursor: 'pointer' }}>Cancelar</button>
                  </div>
                </form>
              )}
            </div>

            {/* FOTOS DE LOS PADRES */}
            <div>
              <h2 className="text-center text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Dancing Script', cursive", background: 'linear-gradient(135deg, #f9a8d4, #93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 }}>Los futuros papás</h2>
              <p className="text-center text-base md:text-lg mb-10" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#9ca3af', fontWeight: 500 }}>Quienes esperan con amor la llegada de su bebé</p>

              {/* Grid de 2 fotos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="parent-photo rounded-2xl shadow-xl" style={{ border: '5px solid #f9a8d4' }}>
                  <img src={papas1Img} alt="Mamá y Papá" className="w-full h-96 md:h-[500px] object-cover object-top rounded-xl" />
                </div>
                <div className="parent-photo rounded-2xl shadow-xl" style={{ border: '5px solid #93c5fd' }}>
                  <img src={papas2Img} alt="Mamá y Papá" className="w-full h-96 md:h-[500px] object-cover object-top rounded-xl" />
                </div>
              </div>
            </div>


            {/* MENSAJE FINAL */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl mb-8 leading-relaxed" style={{ fontFamily: "'Dancing Script', cursive", background: 'linear-gradient(135deg, #f9a8d4, #93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 600 }}>Cada latido, cada sueño, cada momento de espera nos acerca más a conocer a nuestro pequeño milagro</p>
              <p className="text-lg md:text-xl mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#6b7280', fontWeight: 500, lineHeight: '2' }}>Queremos que este día sea tan especial como ustedes lo son para nosotros. Su amor y bendiciones son el regalo más grande que podríamos recibir.</p>
              <p className="text-3xl md:text-4xl" style={{ fontFamily: "'Dancing Script', cursive", background: 'linear-gradient(135deg, #e8a0bf, #a0c4e8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 }}>¡Nos vemos pronto!</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownSection;