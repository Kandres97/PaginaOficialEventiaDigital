import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CountryRedirect = () => {
  const navigate = useNavigate();
  const [detecting, setDetecting] = useState(true);

  useEffect(() => {
    // Si ya tiene país guardado, usar ese
    const savedCountry = localStorage.getItem('eventia_country');
    if (savedCountry) {
      navigate(`/${savedCountry}`, { replace: true });
      return;
    }

    // Detectar país por IP
    const detectCountry = async () => {
      try {
        // ipapi.co es gratuito (1000 req/día sin API key)
        const response = await fetch('https://ipapi.co/json/', {
          signal: AbortSignal.timeout(5000)
        });
        const data = await response.json();
        const countryCode = data.country_code; // "CO", "ES", "MX", "AR", etc.

        // Colombia → /co | Cualquier otro país → /es
        const target = countryCode === 'CO' ? 'co' : 'es';
        localStorage.setItem('eventia_country', target);
        navigate(`/${target}`, { replace: true });
      } catch (error) {
        console.warn('Error detectando país, usando fallback por idioma:', error);
        
        // Fallback: detectar por idioma del navegador
        const lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        const target = lang === 'es-co' || lang.startsWith('es-co') ? 'co' : 'es';
        localStorage.setItem('eventia_country', target);
        navigate(`/${target}`, { replace: true });
      } finally {
        setDetecting(false);
      }
    };

    detectCountry();
  }, [navigate]);

  if (!detecting) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EBE0] via-[#FAF6F1] to-[#FFF9F0] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#B88B80] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-400 text-sm">Detectando tu ubicación...</p>
      </div>
    </div>
  );
};

export default CountryRedirect;