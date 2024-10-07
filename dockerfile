# Usa una imagen de Node.js para compilar la aplicación
FROM node:18-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para instalar dependencias y compilar
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos y ejecuta la build
COPY . .
RUN npm run build

# Usa una imagen de Nginx para servir la aplicación
FROM nginx:stable-alpine

# Copia la configuración de Nginx personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos generados por Vite al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto 80 para acceder a la aplicación
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
