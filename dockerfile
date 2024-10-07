# Usa una imagen de Node.js para compilar la aplicación
FROM node:18-alpine AS builder

WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos y ejecuta la build
COPY . .
RUN npm run build

# Usa una imagen de Apache para servir la aplicación
FROM httpd:alpine

# Copia tu archivo de configuración de Apache
COPY httpd.conf /usr/local/apache2/conf/httpd.conf

# Copia los archivos generados por Vite al directorio de Apache
COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/

# Expone el puerto 8080
EXPOSE 8080
