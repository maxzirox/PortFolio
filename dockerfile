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

# Segunda etapa: usar una imagen de Apache
FROM httpd:2.4

# Copia los archivos construidos al directorio de Apache
COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/

# Establecer el nombre del servidor para evitar advertencias
COPY httpd.conf /usr/local/apache2/conf/httpd.conf

# Exponer el puerto 8080
EXPOSE 8080
