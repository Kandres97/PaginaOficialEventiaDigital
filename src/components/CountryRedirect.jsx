import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CountryRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Detectar país del usuario
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const pais = data.country_code; // "CO", "ES", "US", "MX", etc.
        
        // Si es Colombia → /co
        if (pais === 'CO') {
          navigate('/co', { replace: true });
        } 
        // Resto del mundo → /es
        else {
          navigate('/es', { replace: true });
        }
      })
      .catch(error => {
        // Si falla la detección, ir a España por defecto
        console.error('Error detectando país:', error);
        navigate('/es', { replace: true });
      });
  }, [navigate]);

  // Mostrar loading mientras detecta
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EBE0] via-[#FAF6F1] to-[#FFF9F0] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#B88B80] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg">Cargando...</p>
      </div>
    </div>
  );
};

export default CountryRedirect;