// src/utils/imageLoader.js
// Utilidades para manejo optimizado de imágenes

/**
 * Obtener ruta de thumbnail para galería
 * @param {string} eventType - Tipo de evento (boda, 15anos, etc.)
 * @param {string} variant - Variante (website/classic)
 * @param {string} demoId - ID del demo (boda1, quince1, etc.)
 * @returns {string} Ruta del thumbnail
 */
export const getThumbnailPath = (eventType, variant, demoId) => {
  return `/assets/images/demos/${variant}/${eventType}/${demoId}/thumbnail.webp`;
};

/**
 * Obtener ruta de preview para página de modelo
 * @param {string} eventType - Tipo de evento
 * @param {string} variant - Variante
 * @param {string} demoId - ID del demo
 * @returns {string} Ruta del preview
 */
export const getPreviewPath = (eventType, variant, demoId) => {
  return `/assets/images/demos/${variant}/${eventType}/${demoId}/preview.webp`;
};

/**
 * Obtener ruta de ícono de la página oficial
 * @param {string} iconName - Nombre del ícono
 * @returns {string} Ruta del ícono
 */
export const getIconPath = (iconName) => {
  return `/assets/images/paginaoficial/${iconName}`;
};

/**
 * Lazy load de imágenes con Intersection Observer
 * @param {HTMLImageElement} img - Elemento imagen
 * @param {string} src - Ruta de la imagen
 */
export const lazyLoadImage = (img, src) => {
  if ('loading' in HTMLImageElement.prototype) {
    // Soporte nativo de lazy loading
    img.loading = 'lazy';
    img.src = src;
  } else {
    // Fallback con Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.src = src;
          observer.unobserve(img);
        }
      });
    });
    observer.observe(img);
  }
};

/**
 * Precargar imagen
 * @param {string} src - Ruta de la imagen
 * @returns {Promise} Promesa que se resuelve cuando la imagen carga
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Precargar múltiples imágenes
 * @param {string[]} sources - Array de rutas de imágenes
 * @returns {Promise} Promesa que se resuelve cuando todas cargan
 */
export const preloadImages = async (sources) => {
  try {
    await Promise.all(sources.map(src => preloadImage(src)));
    return true;
  } catch (error) {
    console.error('Error preloading images:', error);
    return false;
  }
};

/**
 * Obtener dimensiones de imagen
 * @param {string} src - Ruta de la imagen
 * @returns {Promise<{width: number, height: number}>}
 */
export const getImageDimensions = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Generar srcset para imágenes responsive
 * @param {string} basePath - Ruta base sin extensión
 * @param {number[]} sizes - Tamaños disponibles
 * @returns {string} srcset string
 */
export const generateSrcSet = (basePath, sizes = [320, 640, 960, 1280]) => {
  return sizes
    .map(size => `${basePath}-${size}w.webp ${size}w`)
    .join(', ');
};

/**
 * Hook personalizado para lazy loading (React)
 * Uso: const imgRef = useLazyLoad();
 */
export const useLazyLoadCallback = () => {
  return (node) => {
    if (node && node.dataset.src) {
      lazyLoadImage(node, node.dataset.src);
    }
  };
};