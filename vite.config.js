import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permitir conexiones desde fuera del contenedor
    port: 3000, // Puerto en el que se ejecutará el servidor
  },
  build: {
    outDir: 'dist', // Asegúrate de que este sea el directorio de salida
  },
});
