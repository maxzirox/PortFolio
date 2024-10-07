# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Compila el proyecto (asumiendo que es una aplicación Vite)
RUN npm run build

# Expone el puerto en el que se servirá tu aplicación
EXPOSE 80

# Usa Vite para servir la aplicación
CMD ["npm", "run", "preview"]
