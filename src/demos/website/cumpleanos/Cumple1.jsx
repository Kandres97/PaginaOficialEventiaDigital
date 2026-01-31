import React from 'react';

function Cumple1() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>🎂</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Demo Party Time</h2>
        <p style={{ fontSize: '1.5rem' }}>Muy Pronto</p>
      </div>
    </div>
  );
}

export default Cumple1;
