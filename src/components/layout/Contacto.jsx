import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getConfig } from '../../config/locales';

const Contacto = () => {
  const location = useLocation();
  const paisActual = location.pathname.startsWith('/es') ? 'es' : 'co';
  const config = getConfig(paisActual);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    evento: '',
    fecha: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (formData.nombre.trim().length < 3) {
      newErrors.nombre = 'El nombre debe tener al menos 3 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }

    const phoneRegex = /^[0-9+\s-()]{10,}$/;
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!phoneRegex.test(formData.telefono)) {
      newErrors.telefono = 'Por favor ingresa un teléfono válido (mínimo 10 dígitos)';
    }

    if (!formData.evento) {
      newErrors.evento = 'Por favor selecciona un tipo de evento';
    }

    if (!formData.fecha) {
      newErrors.fecha = 'La fecha del evento es requerida';
    } else {
      const fechaEvento = new Date(formData.fecha);
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      
      if (fechaEvento < hoy) {
        newErrors.fecha = 'La fecha del evento no puede ser en el pasado';
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      
      return;
    }

    setIsSubmitting(true);
    
    const numeroWhatsApp = config.whatsapp;
    
    const mensaje = `
*Nueva Consulta - Eventia Digital*

*Nombre:* ${formData.nombre}
*Email:* ${formData.email}
*Teléfono:* ${formData.telefono}
*Tipo de Evento:* ${formData.evento}
*Fecha del Evento:* ${formData.fecha}

*Mensaje:*
${formData.mensaje || 'No proporcionó mensaje adicional'}
    `.trim();

    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    window.open(urlWhatsApp, '_blank');
    
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      evento: '',
      fecha: '',
      mensaje: ''
    });
    
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Compacto */}
        <div className="text-center mb-8 sm:mb-12">
          <div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B88B80]/10 to-[#A69B97]/10 px-5 py-2 rounded-full mb-3"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            <span className="text-[#B88B80] font-bold text-sm tracking-widest uppercase">
              Contáctanos
            </span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
          >
            <span className="text-gray-900">¿Listo para </span>
            <span className="bg-gradient-to-r from-[#B88B80] to-[#A69B97] bg-clip-text text-transparent">
              Empezar?
            </span>
          </h2>
          <p 
            className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
          >
            Cuéntanos sobre tu evento y hagamos realidad tu invitación perfecta
          </p>
        </div>

        {/* Grid: Info (solo desktop) + Formulario */}
        <div 
          className="grid lg:grid-cols-5 gap-8"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}
        >
          
          {/* Columna Izquierda - Info de contacto (SOLO VISIBLE EN DESKTOP) */}
          <div className="hidden lg:block lg:col-span-2 space-y-6">
            
            {/* Card de WhatsApp */}
            <div className="bg-gradient-to-br from-[#F5EBE0] to-white rounded-2xl p-6 border border-[#B88B80]/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-sm text-gray-600 mb-2">Respuesta inmediata</p>
                  <a 
                    href={`https://wa.me/${config.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
                  >
                    {config.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            {/* Card de Email */}
            <div className="bg-gradient-to-br from-[#F5EBE0] to-white rounded-2xl p-6 border border-[#B88B80]/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#B88B80] to-[#A69B97] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-sm text-gray-600 mb-2">Te respondemos pronto</p>
                  <a 
                    href="mailto:info@eventiadigital.com"
                    className="text-sm font-semibold text-[#B88B80] hover:text-[#A69B97] transition-colors break-all"
                  >
                    info@eventiadigital.com
                  </a>
                </div>
              </div>
            </div>

            {/* Card de Región */}
            <div className="bg-gradient-to-br from-[#F5EBE0] to-white rounded-2xl p-6 border border-[#B88B80]/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#B88B80] to-[#A69B97] rounded-xl flex items-center justify-center shadow-md text-2xl">
                  {config.bandera}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-gray-900 mb-1">Ubicación</h3>
                  <p className="text-sm text-gray-600">
                    Servicio en {config.region}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Formulario (FULL WIDTH en móvil, 3/5 en desktop) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Envíanos tus datos
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm rounded-xl border ${
                      errors.nombre 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-200 focus:ring-[#B88B80] focus:border-[#B88B80]'
                    } focus:ring-2 outline-none transition-all`}
                    placeholder="Tu nombre"
                  />
                  {errors.nombre && (
                    <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      {errors.nombre}
                    </p>
                  )}
                </div>

                {/* Email y Teléfono en grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-sm rounded-xl border ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-200 focus:ring-[#B88B80] focus:border-[#B88B80]'
                      } focus:ring-2 outline-none transition-all`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-sm rounded-xl border ${
                        errors.telefono 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-200 focus:ring-[#B88B80] focus:border-[#B88B80]'
                      } focus:ring-2 outline-none transition-all`}
                      placeholder={paisActual === 'co' ? '+57 300 123 4567' : '+34 600 123 456'}
                    />
                    {errors.telefono && (
                      <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                        </svg>
                        {errors.telefono}
                      </p>
                    )}
                  </div>
                </div>

                {/* Tipo de Evento y Fecha en grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Tipo de Evento */}
                  <div>
                    <label htmlFor="evento" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo de Evento *
                    </label>
                    <select
                      id="evento"
                      name="evento"
                      required
                      value={formData.evento}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-sm rounded-xl border ${
                        errors.evento 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-200 focus:ring-[#B88B80] focus:border-[#B88B80]'
                      } focus:ring-2 outline-none transition-all`}
                    >
                      <option value="">Selecciona</option>
                      <option value="Boda">Boda</option>
                      <option value="15 Años">15 Años</option>
                      <option value="Baby Shower">Baby Shower</option>
                      <option value="Comunión">Comunión</option>
                      <option value="Cumpleaños">Cumpleaños</option>
                      <option value="Egreso">Egreso</option>
                      <option value="Bautizo">Bautizo</option>
                      <option value="Empresarial">Empresarial</option>
                      <option value="Otro">Otro</option>
                    </select>
                    {errors.evento && (
                      <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                        </svg>
                        {errors.evento}
                      </p>
                    )}
                  </div>

                  {/* Fecha del Evento */}
                  <div>
                    <label htmlFor="fecha" className="block text-sm font-semibold text-gray-700 mb-2">
                      Fecha del Evento *
                    </label>
                    <input
                      type="date"
                      id="fecha"
                      name="fecha"
                      required
                      value={formData.fecha}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 text-sm rounded-xl border ${
                        errors.fecha 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-200 focus:ring-[#B88B80] focus:border-[#B88B80]'
                      } focus:ring-2 outline-none transition-all`}
                    />
                    {errors.fecha && (
                      <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                        </svg>
                        {errors.fecha}
                      </p>
                    )}
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje (Opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="3"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#B88B80] focus:border-[#B88B80] outline-none transition-all resize-none"
                    placeholder="Cuéntanos más sobre tu evento..."
                  ></textarea>
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#B88B80] to-[#A69B97] text-white py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span>Enviar por WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

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
      `}</style>
    </section>
  );
};

export default Contacto;