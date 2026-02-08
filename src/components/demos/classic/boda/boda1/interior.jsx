import { useState } from 'react';

const Interior = () => {
  const handleGoogleMapsIglesia = () => {
    window.open("https://maps.google.com/?q=Iglesia+San+Francisco", '_blank');
  };

  const handleGoogleMapsHacienda = () => {
    window.open("https://maps.google.com/?q=Hacienda+Los+Robles", '_blank');
  };

  const styles = {
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '20px 20px', // ← Reducido padding top
      zIndex: 3,
      background: 'transparent',
    },
    // Sección superior - ALINEADA A LA DERECHA
    topSection: {
      alignSelf: 'flex-end',
      textAlign: 'right',
      width: '70%',
      paddingRight: '10px',
      marginTop: '10px', // ← Reducido de 15px a 10px
    },
    // Sección media - CENTRADA
    middleSection: {
      alignSelf: 'center',
      textAlign: 'center',
      width: '75%',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px', // ← Reducido de 15px a 12px
      marginTop: '10px', // ← Reducido de 20px a 10px
    },
    // Sección inferior - ALINEADA A LA IZQUIERDA
    bottomSection: {
      alignSelf: 'flex-start',
      textAlign: 'left',
      width: '70%',
      paddingLeft: '10px',
      marginBottom: '10px', // ← Reducido de 15px a 10px
    },
    mainTitle: {
      fontSize: '2.5em',
      fontFamily: 'Edwardian Script ITC, cursive',
      color: '#6b4d42',
      margin: '0',
      textShadow: '2px 2px 6px rgba(255,255,255,0.9)',
      lineHeight: '1.1',
    },
    subtitle: {
      fontSize: '0.85em',
      fontFamily: 'Cormorant Garamond, serif',
      color: '#5a4035',
      margin: '5px 0 0 0',
      letterSpacing: '0.5px',
      lineHeight: '1.4',
      textShadow: '1px 1px 4px rgba(255,255,255,0.9)',
    },
    // Ceremonia - corrido a la derecha
    ceremoniaBlock: {
      marginBottom: '6px', // ← Reducido
      marginLeft: '40px',
    },
    // Recepción - corrido a la izquierda
    recepcionBlock: {
      marginBottom: '6px', // ← Reducido
      marginRight: '120px',
    },
    eventTitle: {
      fontSize: '1.5em',
      fontFamily: 'Edwardian Script ITC, cursive',
      color: '#a67c5c',
      margin: '0 0 5px 0',
      textShadow: '1px 1px 4px rgba(255,255,255,0.9)',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '5px',
    },
    infoItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    infoLabel: {
      fontSize: '0.7em',
      fontFamily: 'Cormorant Garamond, serif',
      color: '#8b7355',
      textTransform: 'uppercase',
      letterSpacing: '0.8px',
      fontWeight: '600',
      textShadow: '1px 1px 3px rgba(255,255,255,0.9)',
      marginBottom: '3px',
    },
    infoValue: {
      fontSize: '0.85em',
      fontFamily: 'Cormorant Garamond, serif',
      color: '#5a4035',
      fontWeight: '500',
      textShadow: '1px 1px 3px rgba(255,255,255,0.9)',
      lineHeight: '1.3',
    },
    mapButton: {
      background: 'rgba(255, 255, 255, 0.95)',
      border: '1px solid #a67c5c',
      borderRadius: '14px',
      color: '#5a4035',
      fontSize: '0.65em',
      fontFamily: 'Cormorant Garamond, serif',
      cursor: 'pointer',
      padding: '5px 15px',
      marginTop: '5px',
      transition: 'all 0.3s ease',
      letterSpacing: '0.5px',
      fontWeight: '600',
      pointerEvents: 'auto',
      boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
    },
    verticalDivider: {
      width: '1px',
      height: '40px',
      background: '#c9a87c',
    },
    giftMessage: {
      fontSize: '0.9em',
      fontFamily: 'Cormorant Garamond, serif',
      color: '#5a4035',
      fontStyle: 'italic',
      margin: '5px 0',
      lineHeight: '1.4',
      textShadow: '1px 1px 4px rgba(255,255,255,0.9)',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.container}>
      {/* SECCIÓN SUPERIOR - DERECHA */}
      <div style={styles.topSection}>
        <h1 style={styles.mainTitle}>Nuestra Boda</h1>
        <p style={styles.subtitle}>
          Queremos compartir contigo la felicidad de nuestra unión
        </p>
      </div>

      {/* SECCIÓN MEDIA - CENTRO */}
      <div style={styles.middleSection}>
        {/* Ceremonia */}
        <div style={styles.ceremoniaBlock}>
          <h2 style={styles.eventTitle}>Ceremonia Religiosa</h2>
          
          <div style={styles.infoGrid}>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>DÍA</span>
              <span style={styles.infoValue}>25 de Mayo</span>
            </div>
            
            <div style={styles.verticalDivider}></div>
            
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>HORA</span>
              <span style={styles.infoValue}>4:00 PM</span>
            </div>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <span style={styles.infoLabel}>LUGAR</span>
            <span style={styles.infoValue}>Iglesia San Francisco</span>
            <br />
            <button 
              style={styles.mapButton}
              onClick={handleGoogleMapsIglesia}
              onMouseEnter={(e) => {
                e.target.style.background = '#a67c5c';
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                e.target.style.color = '#5a4035';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Ver ubicación
            </button>
          </div>
        </div>

        {/* Recepción */}
        <div style={styles.recepcionBlock}>
          <h2 style={styles.eventTitle}>Recepción</h2>
          
          <div style={{textAlign: 'center', marginBottom: '5px'}}>
            <span style={styles.infoLabel}>LUGAR</span>
            <span style={styles.infoValue}>Hacienda Los Robles</span>
            <br />
            <button 
              style={styles.mapButton}
              onClick={handleGoogleMapsHacienda}
              onMouseEnter={(e) => {
                e.target.style.background = '#a67c5c';
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                e.target.style.color = '#5a4035';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Ver ubicación
            </button>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <span style={styles.infoLabel}>HORA</span>
            <span style={styles.infoValue}>6:00 PM</span>
          </div>
        </div>
      </div>

      {/* SECCIÓN INFERIOR - IZQUIERDA */}
      <div style={styles.bottomSection}>
        <p style={styles.giftMessage}>
            <span style={{ fontSize: '1em', color: '#d4a574' }}>♥</span>
          "Lluvia de sobres"
        </p>
      </div>
    </div>
  );
};

export default Interior;