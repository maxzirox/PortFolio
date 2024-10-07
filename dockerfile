FROM node:16  # O la versión que necesites

# Crear el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto que se va a utilizar
EXPOSE 8080

# Comando para servir la aplicación
CMD ["npm", "run", "preview"]
