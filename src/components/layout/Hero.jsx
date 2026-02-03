import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getConfig } from '../../config/locales';

const Hero = () => {
  const location = useLocation();
  const paisActual = location.pathname.startsWith('/es') ? 'es' : 'co';
  const config = getConfig(paisActual);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToModelos = () => {
    const modelosSection = document.getElementById('modelos');
    if (modelosSection) {
      modelosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const mensaje = encodeURIComponent(config.mensajeWhatsApp);
    window.open(`https://wa.me/${config.whatsapp}?text=${mensaje}`, '_blank');
  };

  return (
    <section 
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-20 sm:pt-24 md:pt-0 bg-white"
    >
      {/* Fondo con mesh gradient moderno */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(at 0% 0%, rgba(184, 139, 128, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(212, 168, 159, 0.12) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(166, 155, 151, 0.10) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(245, 235, 224, 0.18) 0px, transparent 50%)
          `,
        }}></div>
      </div>

      {/* Orbes flotantes con parallax - más sutiles */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#B88B80]/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-[#D4A89F]/8 rounded-full blur-[120px]" style={{ animationDelay: '2s', animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
      </div>

      {/* Líneas decorativas sutiles */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#B88B80] to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#A69B97] to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-12 lg:py-20">
          
          {/* Columna Izquierda - Contenido con animaciones escalonadas */}
          <div className="space-y-10 z-10">
            {/* Badge animado de región */}
            <div 
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-xl border border-[#B88B80]/20 px-5 py-2.5 rounded-full shadow-lg"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.2s both',
              }}
            >
              <span className="text-2xl">{config.bandera}</span>
              <span className="text-sm font-medium text-gray-700 tracking-wide">{config.region}</span>
            </div>

            {/* Título principal con efecto de gradiente animado */}
            <div 
              className="space-y-6"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.4s both',
              }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
                <span className="block text-gray-900 mb-2">Invitaciones</span>
                <span 
                  className="block bg-gradient-to-r from-[#B88B80] via-[#A69B97] to-[#8B7B76] bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% auto',
                    animation: 'gradient-shift 3s ease infinite',
                  }}
                >
                  Digitales
                </span>
              </h1>
              
              {/* Nueva descripción con los beneficios integrados */}
              <p className="text-xl sm:text-2xl text-gray-700 font-light leading-relaxed max-w-2xl">
                Diseños <span className="font-semibold text-[#B88B80]">personalizados</span> y únicos para tus eventos especiales. 
                <span className="block mt-2">
                  <span className="font-semibold text-[#A69B97]">Instantáneos</span>, <span className="font-semibold text-[#8B7B76]">sustentables</span> y listos para compartir en un click.
                </span>
              </p>
            </div>

            {/* Stats con efecto glassmorphism */}
            <div 
              className="grid grid-cols-3 gap-4"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.6s both',
              }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B88B80]/30 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/70 backdrop-blur-xl border border-[#B88B80]/20 rounded-2xl p-5 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-black bg-gradient-to-br from-[#B88B80] to-[#8B7B76] bg-clip-text text-transparent">+500</div>
                  <div className="text-xs text-gray-600 mt-2 tracking-wider uppercase font-semibold">Eventos</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4A89F]/30 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/70 backdrop-blur-xl border border-[#B88B80]/20 rounded-2xl p-5 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-black bg-gradient-to-br from-[#B88B80] to-[#8B7B76] bg-clip-text text-transparent">99%</div>
                  <div className="text-xs text-gray-600 mt-2 tracking-wider uppercase font-semibold">Satisfacción</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5EBE0]/30 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/70 backdrop-blur-xl border border-[#B88B80]/20 rounded-2xl p-5 hover:bg-white/90 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-black bg-gradient-to-br from-[#B88B80] to-[#8B7B76] bg-clip-text text-transparent">+64</div>
                  <div className="text-xs text-gray-600 mt-2 tracking-wider uppercase font-semibold">Diseños</div>
                </div>
              </div>
            </div>

            {/* CTAs con efectos de hover avanzados */}
            <div 
              className="flex flex-col sm:flex-row gap-4"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.8s both',
              }}
            >
              <button 
                onClick={scrollToModelos}
                className="group relative px-10 py-5 rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#B88B80] to-[#A69B97] transition-transform duration-500 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#A69B97] to-[#8B7B76] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative text-white flex items-center justify-center gap-2">
                  Explorar Diseños
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <button 
                onClick={handleWhatsApp}
                className="group relative px-10 py-5 rounded-full font-bold text-lg border-2 border-[#B88B80]/40 bg-white/50 backdrop-blur-sm overflow-hidden hover:border-[#B88B80] hover:bg-white/80 transition-all shadow-lg hover:shadow-xl"
              >
                <span className="relative text-gray-800 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Cotizar Ahora
                </span>
              </button>
            </div>
          </div>

          {/* Columna Derecha - iPhone con efectos premium */}
          <div 
            className="relative flex items-center justify-center lg:justify-end"
            style={{
              animation: 'fadeInRight 1s ease-out 0.6s both',
            }}
          >
            {/* Glow effect detrás del iPhone */}
            <div className="absolute w-full h-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#B88B80]/40 to-[#D4A89F]/30 rounded-full blur-[100px] animate-pulse"></div>
            </div>
            
            {/* iPhone Mockup Premium */}
            <div className="relative max-w-sm w-full transform hover:scale-105 transition-transform duration-700 ease-out">
              {/* Sombra dramática */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B88B80]/30 to-transparent rounded-[4rem] blur-3xl transform translate-y-8"></div>
              
              {/* iPhone Frame */}
              <div className="relative mx-auto border-[12px] border-neutral-800 rounded-[3.5rem] shadow-2xl overflow-hidden bg-black" style={{ width: '300px', height: '610px' }}>
                {/* Notch premium */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20 flex items-center justify-center gap-2">
                  <div className="w-16 h-1.5 bg-neutral-700 rounded-full"></div>
                </div>
                
                {/* Screen glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 pointer-events-none"></div>
                
                {/* Video con overlay sutil */}
                <div className="relative w-full h-full overflow-hidden">
                  <video 
                    src="/assets/images/paginaoficial/video.mp4" 
                    autoPlay
                    loop
                    muted
                    playsInline
                    loading="lazy"
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  {/* Vignette effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none"></div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-white/30 rounded-full z-20"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#B88B80] to-[#A69B97] text-white px-6 py-3 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-300">
                <p className="text-sm font-black tracking-wider">¡NUEVO!</p>
              </div>

              {/* Decorative elements - colores cálidos */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#B88B80]/40 rounded-full"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-[#D4A89F]/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button Premium con animación de pulso */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleWhatsApp}
          className="group relative"
          aria-label="Contactar por WhatsApp"
        >
          {/* Pulsos animados */}
          <div className="absolute inset-0 bg-green-500 rounded-full opacity-75 animate-ping"></div>
          <div className="absolute inset-0 bg-green-400 rounded-full opacity-50 animate-pulse"></div>
          
          {/* Botón principal con glassmorphism */}
          <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 border-4 border-green-400/30">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>

          {/* Tooltip elegante */}
          <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform group-hover:-translate-y-2">
            <div className="bg-white/90 backdrop-blur-xl border border-[#B88B80]/20 text-gray-800 px-6 py-3 rounded-2xl shadow-2xl whitespace-nowrap">
              <p className="text-sm font-bold">¡Hablemos! 💬</p>
              <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/90"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Animaciones CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;