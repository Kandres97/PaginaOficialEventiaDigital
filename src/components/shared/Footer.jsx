import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getConfig } from '../../config/locales';
import logo from "../../assets/logo eventia-02.png";

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const location = useLocation();
  const paisActual = location.pathname.startsWith('/es') ? 'es' : 'co';
  const config = getConfig(paisActual);

  const redesSociales = [
    {
      nombre: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61585466177772",
      icono: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: "hover:bg-blue-600"
    },
    {
      nombre: "Instagram",
      url: "https://www.instagram.com/eventiadigital",
      icono: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600"
    },
    {
      nombre: "TikTok",
      url: "https://www.tiktok.com/@eventiadigital",
      icono: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: "hover:bg-black"
    },
    {
      nombre: "WhatsApp Business",
      url: `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.mensajeWhatsApp)}`,
      icono: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      color: "hover:bg-green-600"
    },
    {
      nombre: "Gmail",
      url: "mailto:eventiia.digital@gmail.com",
      icono: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      ),
      color: "hover:bg-red-600"
    }
  ];

  const openModal = (type) => {
    setModalContent(type);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <img 
              src={logo} 
              alt="Eventia Digital" 
              className="h-10 w-auto brightness-0 invert"
              style={{filter: 'brightness(0) invert(1)'}}
            />
            <div className="flex gap-3">
              {redesSociales.map((red, index) => (
                <a
                
                  key={index}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${red.color}`}
                  title={red.nombre}
                >
                  {red.icono}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <p className="text-gray-400 text-xs text-center sm:text-left">
                © {new Date().getFullYear()} Eventia Digital. Todos los derechos reservados.
              </p>
              <div className="flex gap-6">
                <button 
                  onClick={() => openModal('privacidad')}
                  className="text-gray-400 hover:text-[#B88B80] transition-colors text-xs cursor-pointer"
                >
                  Política de Privacidad
                </button>
                <button 
                  onClick={() => openModal('terminos')}
                  className="text-gray-400 hover:text-[#B88B80] transition-colors text-xs cursor-pointer"
                >
                  Términos y Condiciones
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#B88B80]">
                {modalContent === 'privacidad' ? 'Política de Privacidad' : 'Términos y Condiciones'}
              </h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 flex-shrink-0 ml-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {modalContent === 'privacidad' ? (
              <div className="prose max-w-none text-gray-700 text-sm sm:text-base">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">1. Información que recopilamos</h3>
                <p className="mb-3 sm:mb-4">Recopilamos información que nos proporcionas directamente, como nombre, email, teléfono y detalles del evento cuando solicitas una invitación digital.</p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">2. Uso de la información</h3>
                <p className="mb-3 sm:mb-4">Utilizamos tu información para crear y entregar invitaciones digitales personalizadas, comunicarnos contigo sobre tu evento y mejorar nuestros servicios.</p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">3. Protección de datos</h3>
                <p className="mb-3 sm:mb-4">Implementamos medidas de seguridad para proteger tu información personal. No compartimos tus datos con terceros sin tu consentimiento.</p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">4. Tus derechos</h3>
                <p className="mb-3 sm:mb-4">Tienes derecho a acceder, rectificar o eliminar tu información personal en cualquier momento contactándonos a eventiia.digital@gmail.com</p>
              </div>
            ) : (
              <div className="prose max-w-none text-gray-700 text-sm sm:text-base">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">1. Aceptación de términos</h3>
                <p className="mb-3 sm:mb-4">Al utilizar nuestros servicios, aceptas estos términos y condiciones en su totalidad.</p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">2. Servicios</h3>
                <p className="mb-3 sm:mb-4">Eventia Digital ofrece servicios de creación de invitaciones digitales personalizadas para eventos. Los tiempos de entrega son de 5-7 días laborales.</p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">3. Pagos</h3>
                <p className="mb-3 sm:mb-4">Los pagos deben realizarse según lo acordado. Los precios están sujetos a cambios sin previo aviso.</p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">4. Propiedad intelectual</h3>
                <p className="mb-3 sm:mb-4">Todos los diseños y contenidos son propiedad de Eventia Digital. El cliente tiene licencia de uso para su evento específico.</p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">5. Modificaciones</h3>
                <p className="mb-3 sm:mb-4">Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entran en vigor inmediatamente.</p>
              </div>
            )}

            <button
              onClick={closeModal}
              className="mt-4 sm:mt-6 w-full bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;