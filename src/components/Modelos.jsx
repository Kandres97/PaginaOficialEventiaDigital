import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Modelos = () => {
  // Detectar país actual
  const location = useLocation();
  const paisActual = location.pathname.startsWith('/es') ? 'es' : 'co';

  const modelos = [
    { titulo: "Boda", gif: "/assets/paginaoficial/boda.gif", url: `/${paisActual}/modelo/boda` },
    { titulo: "15 Años", gif: "/assets/paginaoficial/15.gif", url: `/${paisActual}/modelo/15-anos` },
    { titulo: "Baby Shower", gif: "/assets/paginaoficial/babyshower.gif", url: `/${paisActual}/modelo/baby-shower` },
    { titulo: "Cumpleaños", gif: "/assets/paginaoficial/cumpleaños.gif", url: `/${paisActual}/modelo/cumpleanos` },
    { titulo: "Comunión", gif: "/assets/paginaoficial/comunion.gif", url: `/${paisActual}/modelo/comunion` },
    { titulo: "Egreso", gif: "/assets/paginaoficial/graduacion.gif", url: `/${paisActual}/modelo/egreso` },
    { titulo: "Bautizo", gif: "/assets/paginaoficial/bautizo.gif", url: `/${paisActual}/modelo/bautizo` },
    { titulo: "Empresarial", gif: "/assets/paginaoficial/empresarial.gif", url: `/${paisActual}/modelo/empresarial` }
  ];

  return (
    <section id="modelos" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#FFF9F0] via-white to-[#FFF5EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 px-5 py-2 rounded-full mb-4">
            <span className="text-[#B88B80] font-semibold text-sm tracking-wide uppercase">
              NUESTROS DISEÑOS
            </span>
          </div>
          
          {/* Título */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900">¿Que vas a </span>
            <span className="text-transparent bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text">
              celebrar?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {modelos.map((modelo, index) => (
            <Link key={index} to={modelo.url} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
              <div className="bg-gradient-to-br from-[#F5EBE0] to-[#FAF6F1] p-4 sm:p-6 md:p-8 h-40 sm:h-44 md:h-48 flex flex-col items-center justify-center relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img src={modelo.gif} alt={modelo.titulo} className="w-full h-full object-contain" loading="lazy" style={{filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)'}} />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-center text-gray-800 relative z-10 transition-colors duration-300 group-hover:text-[#B88B80]">{modelo.titulo}</h3>
                
                {/* VERSIÓN MÓVIL: Siempre visible abajo */}
                <div className="md:hidden absolute bottom-2 left-0 right-0 flex justify-center">
                  <p className="text-[10px] font-semibold text-[#B88B80] flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full shadow-md">
                    <span>Ver modelos</span>
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </p>
                </div>

                {/* VERSIÓN DESKTOP: Aparece al hover */}
                <div className="hidden md:flex absolute inset-0 bg-white/0 group-hover:bg-white/30 transition-all duration-300 items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-semibold text-[#B88B80] flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                      <span>Ver modelos</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modelos;