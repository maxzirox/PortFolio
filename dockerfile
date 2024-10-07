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

