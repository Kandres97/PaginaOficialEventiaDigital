import React from 'react';

/**
 * Componente LoadingSpinner simplificado
 * Solo lo esencial - Sin props innecesarias
 */
const LoadingSpinner = ({ fullScreen = false }) => {
  const Spinner = () => (
    <div className="flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-[#B88B80] rounded-full animate-spin" />
    </div>
  );
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50">
        <Spinner />
      </div>
    );
  }
  
  return <Spinner />;
};

export default LoadingSpinner;