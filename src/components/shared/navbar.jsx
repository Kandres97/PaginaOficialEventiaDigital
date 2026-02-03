import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "/assets/images/paginaoficial/logo-eventia.png";
import { getConfig } from '../../config/locales';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModelosDropdownOpen, setIsModelosDropdownOpen] = useState(false);
  const [isModelosMobileOpen, setIsModelosMobileOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const paisActual = location.pathname.startsWith('/es') ? 'es' : 'co';
  const config = getConfig(paisActual);

  // Función para hacer scroll a secciones
  const scrollToSection = (sectionId) => {
    // Si no estamos en la página principal, navegar primero
    if (location.pathname !== `/${paisActual}` && location.pathname !== '/') {
      navigate(`/${paisActual}`);
      // Esperar a que la navegación complete antes de hacer scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Ya estamos en la página principal, solo hacer scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Cerrar menú móvil si está abierto
    setIsMenuOpen(false);
  };

  const cambiarPais = (nuevoPais) => {
    if (location.pathname === '/' || location.pathname === '/co' || location.pathname === '/es') {
      navigate(`/${nuevoPais}`);
    } else {
      const rutaSinPais = location.pathname.replace(/^\/(co|es)/, '');
      navigate(`/${nuevoPais}${rutaSinPais}`);
    }
  };

  const modelos = [
    { nombre: "Boda", gif: "/assets/images/paginaoficial/boda.gif", url: `/${paisActual}/modelo/boda` },
    { nombre: "15 Años", gif: "/assets/images/paginaoficial/15.gif", url: `/${paisActual}/modelo/15-anos` },
    { nombre: "Baby Shower", gif: "/assets/images/paginaoficial/babyshower.gif", url: `/${paisActual}/modelo/baby-shower` },
    { nombre: "Cumpleaños", gif: "/assets/images/paginaoficial/cumpleaños.gif", url: `/${paisActual}/modelo/cumpleanos` },
    { nombre: "Comunión", gif: "/assets/images/paginaoficial/comunion.gif", url: `/${paisActual}/modelo/comunion` },
    { nombre: "Egreso", gif: "/assets/images/paginaoficial/graduacion.gif", url: `/${paisActual}/modelo/egreso` },
    { nombre: "Bautizo", gif: "/assets/images/paginaoficial/bautizo.gif", url: `/${paisActual}/modelo/bautizo` },
    { nombre: "Empresarial", gif: "/assets/images/paginaoficial/empresarial.gif", url: `/${paisActual}/modelo/empresarial` }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to={`/${paisActual}`} className="flex items-center">
            <img src={logo} alt="Eventia Digital" className="h-12 w-auto" />
          </Link>
          
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="text-gray-700 hover:text-[#B88B80] transition-colors font-medium"
            >
              Inicio
            </button>
            
            {/* Dropdown de Diseños */}
            <div 
              className="relative" 
              onMouseEnter={() => setIsModelosDropdownOpen(true)} 
              onMouseLeave={() => setIsModelosDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-[#B88B80] transition-colors font-medium flex items-center space-x-1">
                <span>Diseños</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isModelosDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isModelosDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 pt-2 w-56">
                  <div className="bg-white rounded-xl shadow-2xl py-2 border border-gray-100">
                    {modelos.map((modelo, index) => (
                      <Link 
                        key={index} 
                        to={modelo.url} 
                        className="flex items-center space-x-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-[#E8D5D0] hover:text-[#B88B80] transition-colors"
                      >
                        <img 
                          src={modelo.gif} 
                          alt={modelo.nombre} 
                          className="w-5 h-5 object-contain" 
                          style={{ filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)' }} 
                        />
                        <span>{modelo.nombre}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => scrollToSection('planes')} 
              className="text-gray-700 hover:text-[#B88B80] transition-colors font-medium"
            >
              Planes
            </button>
            
            {/* 🆕 CAMBIO: sectionId actualizado a 'como-funciona' */}
            <button 
              onClick={() => scrollToSection('como-funciona')} 
              className="text-gray-700 hover:text-[#B88B80] transition-colors font-medium"
            >
              Cómo Funciona
            </button>
            
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="text-gray-700 hover:text-[#B88B80] transition-colors font-medium"
            >
              Contacto
            </button>

            {/* Selector de País con banderas SVG */}
            <div className="flex gap-2 ml-4 pl-4 border-l border-gray-300">
              <button 
                onClick={() => cambiarPais('co')} 
                className={`w-7 h-7 rounded-full transition-all duration-300 flex items-center justify-center overflow-hidden hover:scale-110 ${
                  paisActual === 'co' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                }`} 
                title="Cambiar a Colombia"
              >
                <img src="/assets/images/paginaoficial/es-CO.svg" alt="Colombia" className="w-full h-full object-cover" />
              </button>
              <button 
                onClick={() => cambiarPais('es')} 
                className={`w-7 h-7 rounded-full transition-all duration-300 flex items-center justify-center overflow-hidden hover:scale-110 ${
                  paisActual === 'es' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                }`} 
                title="Cambiar a España"
              >
                <img src="/assets/images/paginaoficial/es-ES.svg" alt="España" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          {/* Botón hamburguesa móvil */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-gray-700 hover:text-[#B88B80] transition-colors p-2" 
            aria-label="Menú"
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* MENÚ MÓVIL */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-1 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg overflow-y-auto max-h-[calc(80vh-2rem)]">
            
            {/* Inicio */}
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-[#E8D5D0] hover:text-[#B88B80] transition-colors font-medium rounded-lg mx-2 w-full text-left"
            >
              <img 
                src="/assets/images/paginaoficial/inicio.gif" 
                alt="Inicio" 
                className="w-5 h-5 object-contain" 
                style={{ filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)' }} 
              />
              <span>Inicio</span>
            </button>
            
            {/* Diseños (Dropdown móvil) */}
            <div className="mx-2">
              <button 
                onClick={() => setIsModelosMobileOpen(!isModelosMobileOpen)} 
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-[#E8D5D0] hover:text-[#B88B80] transition-colors font-medium rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <img 
                    src="/assets/images/paginaoficial/modelos.gif" 
                    alt="Diseños" 
                    className="w-5 h-5 object-contain" 
                    style={{ filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)' }} 
                  />
                  <span>Diseños</span>
                </div>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isModelosMobileOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`transition-all duration-300 overflow-hidden ${isModelosMobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-1 mt-2">
                  {modelos.map((modelo, index) => (
                    <Link 
                      key={index} 
                      to={modelo.url} 
                      onClick={() => setIsMenuOpen(false)} 
                      className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-600 hover:bg-[#F5F1ED] hover:text-[#B88B80] transition-colors font-medium rounded-lg"
                    >
                      <img 
                        src={modelo.gif} 
                        alt={modelo.nombre} 
                        className="w-5 h-5 object-contain" 
                        style={{ filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)' }} 
                      />
                      <span>{modelo.nombre}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Planes */}
            <button 
              onClick={() => scrollToSection('planes')} 
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-[#E8D5D0] hover:text-[#B88B80] transition-colors font-medium rounded-lg mx-2 w-full text-left"
            >
              <img 
                src="/assets/images/paginaoficial/planes.gif" 
                alt="Planes" 
                className="w-5 h-5 object-contain" 
                style={{ filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)' }} 
              />
              <span>Planes</span>
            </button>
            
            {/* 🆕 CAMBIO: sectionId actualizado a 'como-funciona' */}
            <button 
              onClick={() => scrollToSection('como-funciona')} 
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-[#E8D5D0] hover:text-[#B88B80] transition-colors font-medium rounded-lg mx-2 w-full text-left"
            >
              <img 
                src="/assets/images/paginaoficial/comoempezar.gif" 
                alt="Cómo Funciona" 
                className="w-5 h-5 object-contain" 
                style={{ filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)' }} 
              />
              <span>Cómo Funciona</span>
            </button>
            
            {/* Contacto */}
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-[#E8D5D0] hover:text-[#B88B80] transition-colors font-medium rounded-lg mx-2 w-full text-left"
            >
              <img 
                src="/assets/images/paginaoficial/contacto.gif" 
                alt="Contacto" 
                className="w-5 h-5 object-contain" 
                style={{ filter: 'brightness(0) saturate(100%) invert(54%) sepia(12%) saturate(817%) hue-rotate(324deg) brightness(91%) contrast(87%)' }} 
              />
              <span>Contacto</span>
            </button>

            {/* Selector de País Móvil */}
            <div className="mx-2 mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center mb-3">Selecciona tu país</p>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => { cambiarPais('co'); setIsMenuOpen(false); }} 
                  className={`w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center overflow-hidden hover:scale-110 ${
                    paisActual === 'co' ? 'opacity-100' : 'opacity-50'
                  }`}
                  title="Cambiar a Colombia"
                >
                  <img src="/assets/images/paginaoficial/es-CO.svg" alt="Colombia" className="w-full h-full object-cover" />
                </button>
                <button 
                  onClick={() => { cambiarPais('es'); setIsMenuOpen(false); }} 
                  className={`w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center overflow-hidden hover:scale-110 ${
                    paisActual === 'es' ? 'opacity-100' : 'opacity-50'
                  }`}
                  title="Cambiar a España"
                >
                  <img src="/assets/images/paginaoficial/es-ES.svg" alt="España" className="w-full h-full object-cover" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;