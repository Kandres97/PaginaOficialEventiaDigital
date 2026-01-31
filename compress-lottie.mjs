import fs from 'fs';
import path from 'path';

// Carpeta donde están tus animaciones JSON
const ASSETS_DIR = './src/assets';

// Función para comprimir JSON (elimina espacios y formatea compacto)
function compressJSON(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(data);
    
    // Guardar de forma compacta (sin espacios)
    fs.writeFileSync(filePath, JSON.stringify(json));
    
    const originalSize = data.length;
    const newSize = JSON.stringify(json).length;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    
    console.log(`✅ ${path.basename(filePath)}: ${originalSize} → ${newSize} bytes (${savings}% reducido)`);
  } catch (error) {
    console.error(`❌ Error en ${filePath}:`, error.message);
  }
}

// Buscar todos los archivos .json en assets
function findJSONFiles(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`❌ La carpeta ${dir} no existe`);
    return;
  }
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findJSONFiles(filePath);
    } else if (file.endsWith('.json')) {
      compressJSON(filePath);
    }
  });
}

console.log('🔧 Comprimiendo archivos JSON de Lottie...\n');
findJSONFiles(ASSETS_DIR);
console.log('\n✅ ¡Compresión completada!');