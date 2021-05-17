# Image de base
FROM node:latest

# Changement du repertoire courant
WORKDIR /usr/src/app

# Ajout du fichier de dépendances package.json
COPY package.json ./

# Installation des dépendances
RUN npm install

COPY . .

# On expose le port 3000
EXPOSE 3000

# On lance le serveur quand on démarre le conteneur
CMD ["node", "server.js"]