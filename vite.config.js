import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permitir conexiones desde fuera del contenedor
    port: 8080, // Puerto en el que se ejecutará el servidor
  },
  build: {
    outDir: 'dist', // Asegúrate de que este sea el directorio de salida
  },
});
