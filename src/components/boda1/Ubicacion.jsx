const Ubicacion = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        .ubicacion-section {
          width: 100%;
          padding: 5rem 2rem;
          background: white;
        }

        .ubicacion-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .ubicacion-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          margin-bottom: 4rem;
        }

        .ubicacion-card {
          padding: 4rem 3rem;
          text-align: center;
          border: 1px solid #f0f0f0;
        }

        .ubicacion-card-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          color: #6b6b6b;
          font-weight: 400;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
        }

        .ubicacion-time {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          color: #6b6b6b;
          font-weight: 300;
          margin-bottom: 1.5rem;
        }

        .ubicacion-place {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #8a8a8a;
          font-weight: 400;
          line-height: 1.8;
          margin-bottom: 0.5rem;
        }

        .ubicacion-address {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          color: #a8a8a8;
          font-weight: 400;
          line-height: 1.6;
          font-style: italic;
        }

        .ubicacion-map-link {
          display: inline-block;
          margin-top: 1.5rem;
          font-family: 'Playfair Display', serif;
          font-size: 0.85rem;
          color: #6b6b6b;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          text-decoration: none;
          padding-bottom: 0.25rem;
          border-bottom: 1px solid #c4b5a0;
          transition: all 0.3s ease;
        }

        .ubicacion-map-link:hover {
          color: #c4b5a0;
          border-bottom-color: #6b6b6b;
        }

        /* Código de vestimenta */
        .dress-code-section {
          text-align: center;
          padding: 4rem 2rem;
          background: #fafafa;
        }

        .dress-code-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          color: #6b6b6b;
          font-weight: 400;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
        }

        .dress-code-main {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #6b6b6b;
          font-weight: 300;
          margin-bottom: 2rem;
        }

        .dress-code-description {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #8a8a8a;
          font-weight: 400;
          line-height: 1.8;
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        .dress-code-items {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .dress-code-item {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 1.8vw, 1.1rem);
          color: #8a8a8a;
          font-style: italic;
        }

        .dress-code-note {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.95rem, 1.8vw, 1.05rem);
          color: #a8a8a8;
          font-weight: 400;
          margin-top: 2rem;
          font-style: italic;
        }

        .dress-code-icon-container {
          width: 120px;
          height: 120px;
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .dress-code-icon-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) saturate(100%) invert(45%) sepia(8%) saturate(453%) hue-rotate(348deg) brightness(93%) contrast(87%);
          animation: dress-float 3s ease-in-out infinite;
        }

        .reception-icon-container {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border-radius: 8px;
          overflow: hidden;
        }

        .reception-icon-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          /* Color dorado/beige (#c4b5a0) perfecto para tu paleta */
          filter: brightness(0) saturate(100%) invert(72%) sepia(12%) saturate(534%) hue-rotate(359deg) brightness(92%) contrast(86%);
          animation: cheers-bounce 2s ease-in-out infinite;
        }

        .ceremony-icon-container {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .ceremony-icon-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          /* Color gris (#6b6b6b) para ceremonia */
          filter: brightness(0) saturate(100%) invert(45%) sepia(8%) saturate(453%) hue-rotate(348deg) brightness(93%) contrast(87%);
          animation: church-sway 3s ease-in-out infinite;
        }

        @keyframes church-sway {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes cheers-bounce {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-5px) rotate(-5deg);
          }
          50% {
            transform: translateY(0) rotate(0deg);
          }
          75% {
            transform: translateY(-5px) rotate(5deg);
          }
        }

        .dress-code-icon-circle {
          position: absolute;
          width: 140px;
          height: 140px;
          border: 2px solid #c4b5a0;
          border-radius: 50%;
          opacity: 0.3;
          animation: dress-circle-pulse 3s ease-in-out infinite;
        }

        @keyframes dress-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes dress-circle-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }

        .section-divider {
          width: 60px;
          height: 1px;
          background: #c4b5a0;
          margin: 1rem auto 2rem;
        }

        @media (max-width: 768px) {
          .ubicacion-section {
            padding: 3rem 1rem;
          }

          .ubicacion-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .ubicacion-card {
            padding: 3rem 2rem;
          }

          .dress-code-section {
            padding: 3rem 1.5rem;
          }

          .dress-code-items {
            gap: 2rem;
          }
        }

        @media (max-width: 480px) {
          .ubicacion-card {
            padding: 2.5rem 1.5rem;
          }

          .dress-code-section {
            padding: 2.5rem 1rem;
          }
        }
      `}</style>

      <div className="ubicacion-section">
        <div className="ubicacion-container">
          <div className="ubicacion-grid">
            {/* Ceremonia */}
            <div className="ubicacion-card">
              {/* GIF animado de iglesia */}
              <div className="ceremony-icon-container">
                <img src="/assets/boda1/output-onlinegiftools.gif" alt="Ceremonia" />
              </div>
              
              <h3 className="ubicacion-card-title">Ceremonia</h3>
              <div className="ubicacion-time">17:00 hrs</div>
              <p className="ubicacion-place">Basílica de Santa María del Coro</p>
              <p className="ubicacion-address">
                Plaza de la Constitución, 1<br />
                San Sebastián, España
              </p>
              <a
                href="https://maps.google.com/?q=Basílica+de+Santa+María+del+Coro+San+Sebastián"
                target="_blank"
                rel="noopener noreferrer"
                className="ubicacion-map-link"
              >
                Ver ubicación
              </a>
            </div>

            {/* Recepción */}
            <div className="ubicacion-card">
              {/* GIF animado de brindis sin fondo */}
              <div className="reception-icon-container">
                <img src="/assets/boda1/cheers.gif" alt="Brindis" />
              </div>
              
              <h3 className="ubicacion-card-title">Recepción</h3>
              <div className="ubicacion-time">19:00 hrs</div>
              <p className="ubicacion-place">Hotel María Cristina</p>
              <p className="ubicacion-address">
                Paseo República Argentina, 4<br />
                San Sebastián, España
              </p>
              <a
                href="https://maps.google.com/?q=Hotel+María+Cristina+San+Sebastián"
                target="_blank"
                rel="noopener noreferrer"
                className="ubicacion-map-link"
              >
                Ver ubicación
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Código de vestimenta */}
      <div className="dress-code-section">
        <div className="ubicacion-container">
          {/* Icono animado */}
          <div className="dress-code-icon-container">
            <div className="dress-code-icon-circle"></div>
            <img src="/assets/boda1/wedding-dress.png" alt="Código de vestimenta" />
          </div>
          
          <h3 className="dress-code-title">Código de Vestimenta</h3>
          <div className="section-divider"></div>
          <div className="dress-code-main">Etiqueta Formal</div>
          <p className="dress-code-description">
            Les pedimos vestir con elegancia para esta ocasión especial
          </p>
          <div className="dress-code-items">
            <span className="dress-code-item">Traje oscuro / Smoking</span>
            <span className="dress-code-item">Vestido largo o midi</span>
            <span className="dress-code-item">Colores elegantes</span>
          </div>
          <p className="dress-code-note">
            Sugerimos tonos oscuros y tierra en armonía con nuestra paleta
          </p>
        </div>
      </div>
    </>
  );
};

export default Ubicacion;