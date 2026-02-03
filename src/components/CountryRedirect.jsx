import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CountryRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const browserLang = (navigator.language || navigator.userLanguage).toLowerCase();
    
    // Detección precisa por código de país
    if (browserLang === 'es-co' || browserLang.startsWith('es-co')) {
      navigate('/co', { replace: true });
    } 
    // Si es español de cualquier otro país (España, México, Argentina, etc.)
    else if (browserLang.startsWith('es')) {
      navigate('/es', { replace: true });
    }
    // Todos los demás idiomas → España por defecto
    else {
      navigate('/es', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EBE0] via-[#FAF6F1] to-[#FFF9F0] flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-[#B88B80] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default CountryRedirect;