import { useState } from 'react';
import giftGif from '../../../../../assets/demos/website/boda/boda1/animations/gift.gif';
import walletGif from '../../../../../assets/demos/website/boda/boda1/animations/wallet.gif';
import moneyGif from '../../../../../assets/demos/website/boda/boda1/animations/money.gif';

const MesaDeRegalos = () => {
  const [copiedBank, setCopiedBank] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const bankData = {
    bank: "Banco Santander",
    accountHolder: "Julián Díaz y Rocío Escamilla",
    iban: "ES91 2100 0418 4502 0005 1332",
    swift: "CAIXESBBXXX"
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'bank') {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2000);
    } else {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');

        .regalos-section {
          width: 100%;
          padding: 5rem 2rem;
          background: #fafafa;
          position: relative;
        }

        .regalos-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .gift-icon-container {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gift-icon-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(0) saturate(100%) invert(42%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(88%);
          animation: gift-bounce 2s ease-in-out infinite;
        }

        @keyframes gift-bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }

        .regalos-title {
          text-align: center;
          margin-bottom: 3rem;
        }

        .regalos-title h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          color: #6b6b6b;
          font-weight: 400;
          margin-bottom: 1rem;
        }

        .regalos-title-line {
          width: 60px;
          height: 2px;
          background: #c4b5a0;
          margin: 0 auto 1.5rem;
        }

        .regalos-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.1rem, 2.2vw, 1.4rem);
          color: #8a8a8a;
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto;
        }

        .regalos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .regalo-card {
          background: #fafafa;
          border-radius: 12px;
          padding: 3rem 2rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .regalo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .regalo-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .regalo-gif {
          width: 50px;
          height: 50px;
          object-fit: contain;
          filter: brightness(0) saturate(100%) invert(42%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(88%);
          animation: gift-bounce 2s ease-in-out infinite;
        }

        .regalo-card-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.3rem, 2.5vw, 1.6rem);
          color: #6b6b6b;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .regalo-card-description {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 1.8vw, 1.1rem);
          color: #8a8a8a;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .bank-details {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          margin-top: 1.5rem;
          text-align: left;
        }

        .bank-detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .bank-detail-row:last-child {
          border-bottom: none;
        }

        .bank-detail-label {
          font-family: 'Playfair Display', serif;
          font-size: 0.85rem;
          color: #a8a8a8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .bank-detail-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          color: #6b6b6b;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .copy-button {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.25rem;
          color: #c4b5a0;
          transition: all 0.3s ease;
        }

        .copy-button:hover {
          color: #6b6b6b;
          transform: scale(1.1);
        }

        .copy-button.copied {
          color: #6b6b6b;
        }

        @media (max-width: 768px) {
          .regalos-section {
            padding: 3rem 1rem;
          }

          .regalos-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .regalo-card {
            padding: 2.5rem 1.5rem;
          }

          .bank-detail-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .bank-detail-value {
            font-size: 0.9rem;
            word-break: break-all;
          }
        }
      `}</style>

      <div className="regalos-section">
        <div className="regalos-container">
          <div className="regalos-title">
            <div className="gift-icon-container">
              <img src={giftGif} alt="Regalo" />
            </div>
            
            <h2>Mesa de Regalos</h2>
            <div className="regalos-title-line"></div>
            <p className="regalos-subtitle">
              El mejor regalo es compartir este día tan especial con vosotros. 
              Si deseáis obsequiarnos algo, podéis hacerlo de las siguientes formas:
            </p>
          </div>

          <div className="regalos-grid">
            <div className="regalo-card">
              <div className="regalo-icon">
                <img src={walletGif} alt="Sobre" className="regalo-gif" />
              </div>
              <h3 className="regalo-card-title">Lluvia de Sobres</h3>
              <p className="regalo-card-description">
                Habrá un buzón especial en la recepción donde podréis depositar vuestro sobre. 
                Vuestra presencia y buenos deseos son lo más valioso para nosotros.
              </p>
            </div>

            <div className="regalo-card">
              <div className="regalo-icon">
                <img src={moneyGif} alt="Transferencia" className="regalo-gif" />
              </div>
              <h3 className="regalo-card-title">Transferencia Bancaria</h3>
              <p className="regalo-card-description">
                Si preferís realizar una transferencia, aquí tenéis nuestros datos bancarios:
              </p>

              <div className="bank-details">
                <div className="bank-detail-row">
                  <span className="bank-detail-label">Banco</span>
                  <span className="bank-detail-value">
                    {bankData.bank}
                    <button 
                      className={`copy-button ${copiedBank ? 'copied' : ''}`}
                      onClick={() => copyToClipboard(bankData.bank, 'bank')}
                      aria-label="Copiar nombre del banco"
                    >
                      {copiedBank ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                        </svg>
                      )}
                    </button>
                  </span>
                </div>

                <div className="bank-detail-row">
                  <span className="bank-detail-label">Titular</span>
                  <span className="bank-detail-value" style={{ fontSize: '0.9rem' }}>
                    {bankData.accountHolder}
                  </span>
                </div>

                <div className="bank-detail-row">
                  <span className="bank-detail-label">IBAN</span>
                  <span className="bank-detail-value">
                    {bankData.iban}
                    <button 
                      className={`copy-button ${copiedAccount ? 'copied' : ''}`}
                      onClick={() => copyToClipboard(bankData.iban, 'account')}
                      aria-label="Copiar IBAN"
                    >
                      {copiedAccount ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                        </svg>
                      )}
                    </button>
                  </span>
                </div>

                <div className="bank-detail-row">
                  <span className="bank-detail-label">SWIFT/BIC</span>
                  <span className="bank-detail-value">
                    {bankData.swift}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MesaDeRegalos;