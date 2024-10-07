# Usa una imagen de Node.js para compilar la aplicación
FROM node:18-alpine AS builder

WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos y ejecuta la build
COPY . .
RUN npm run build  # Asegúrate de que este comando genera la carpeta 'dist'

# Usa Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos de la carpeta de build al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto en el que Nginx escucha
EXPOSE 80  # Asegúrate de que esto esté en línea con tu docker-compose.yml

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
