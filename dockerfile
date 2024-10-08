# Usa una imagen de Node.js para compilar la aplicación
FROM node:18-alpine AS builder

WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json .

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos y ejecuta la build
COPY . .
RUN npm run build

# Segunda etapa: usar una imagen de Apache
FROM httpd:2.4

# Habilitar el MPM event
RUN echo "LoadModule mpm_event_module modules/mod_mpm_event.so" >> /usr/local/apache2/conf/httpd.conf

# Copia los archivos construidos al directorio de Apache
COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/

# Exponer el puerto 8080
EXPOSE 3000

CMD [ "npm", "run", "dev" ]
