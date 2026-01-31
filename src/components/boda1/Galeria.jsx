import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import digitalCameraAnimation from '../../assets/boda1/Digital Camera.json';

const Galeria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array con las rutas de las 6 fotografías
  const images = [
    '/assets/boda1/foto1.webp',
    '/assets/boda1/foto2.webp',
    '/assets/boda1/foto3.webp',
    '/assets/boda1/foto4.webp',
    '/assets/boda1/foto5.webp',
    '/assets/boda1/foto6.webp',
  ];

  // Cambio automático de imagen cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Función para ir a una imagen específica
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Navegación manual
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&display=swap');

        .gallery-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1rem;
        }

        .gallery-slider {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }

        .gallery-slide {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .gallery-slide.active {
          opacity: 1;
        }

        .gallery-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gallery-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .gallery-nav-btn:hover {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-50%) scale(1.1);
        }

        .gallery-nav-btn.prev {
          left: 20px;
        }

        .gallery-nav-btn.next {
          right: 20px;
        }

        .gallery-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .gallery-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .gallery-dot:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: scale(1.2);
        }

        .gallery-dot.active {
          background: rgba(255, 255, 255, 1);
          width: 30px;
          border-radius: 6px;
        }

        .gallery-title {
          text-align: center;
          margin-bottom: 2rem;
        }

        .gallery-title h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          color: #6b6b6b;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }

        .gallery-title-line {
          width: 60px;
          height: 2px;
          background: #c4b5a0;
          margin: 0 auto;
        }

        .camera-animation-container {
          transition: transform 0.3s ease;
        }

        .camera-animation-container:hover {
          transform: scale(1.1);
        }

        /* Texto romántico */
        .gallery-text-section {
          max-width: 900px;
          margin: 2rem auto 3rem;
          text-align: center;
          padding: 0 2rem;
        }

        .gallery-text-content {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.1rem, 2.2vw, 1.4rem);
          color: #7a7a7a;
          line-height: 2;
          font-weight: 400;
        }

        .gallery-text-highlight {
          font-weight: 600;
          color: #6b6b6b;
        }

        @media (max-width: 768px) {
          .gallery-slider {
            height: 400px;
          }

          .gallery-text-section {
            margin: 1rem auto 2.5rem;
            padding: 0 1.5rem;
          }

          .gallery-nav-btn {
            width: 40px;
            height: 40px;
          }

          .gallery-nav-btn.prev {
            left: 10px;
          }

          .gallery-nav-btn.next {
            right: 10px;
          }

          .gallery-dots {
            bottom: 15px;
            gap: 8px;
          }

          .gallery-dot {
            width: 10px;
            height: 10px;
          }

          .gallery-dot.active {
            width: 24px;
          }
        }

        @media (max-width: 480px) {
          .gallery-slider {
            height: 300px;
            border-radius: 8px;
          }

          .gallery-text-section {
            margin: 0.75rem auto 2rem;
          }
        }
      `}</style>

      <div className="gallery-container">
        {/* Título de la galería */}
        <div className="gallery-title">
          {/* Animación de cámara digital */}
          <div className="camera-animation-container" style={{ 
            width: '250px', 
            height: '250px', 
            margin: '0 auto 1.5rem auto' 
          }}>
            <Lottie 
              animationData={digitalCameraAnimation}
              loop={true}
              autoplay={true}
            />
          </div>
          <h2>Nuestra Historia</h2>
          <div className="gallery-title-line"></div>
        </div>

        {/* Texto romántico - ARRIBA de las fotos */}
        <div className="gallery-text-section">
          <p className="gallery-text-content">
            Nuestro amor comenzó de forma inesperada, y desde entonces hemos compartido 
            innumerables momentos de risas, complicidad y sueños. Hoy queremos celebrar 
            este nuevo capítulo junto a quienes más amamos. 
            <span className="gallery-text-highlight"> ¡Nos casamos!</span>
          </p>
        </div>

        {/* Slider de imágenes */}
        <div className="gallery-slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={image} alt={`Foto ${index + 1}`} />
            </div>
          ))}

          {/* Botones de navegación */}
          <button
            className="gallery-nav-btn prev"
            onClick={goToPrevious}
            aria-label="Imagen anterior"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6b6b6b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            className="gallery-nav-btn next"
            onClick={goToNext}
            aria-label="Imagen siguiente"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6b6b6b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Indicadores de puntos */}
          <div className="gallery-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Galeria;