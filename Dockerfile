# Usa la imagen oficial de Node.js como base
FROM node:16

# Crea y establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente de la aplicación
COPY . .

# Expone el puerto que usará la aplicación (3000 en este caso)
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["node", "index.js"]
