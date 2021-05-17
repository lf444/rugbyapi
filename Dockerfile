# Image de base
FROM node:latest

# Changement du repertoire courant
WORKDIR /usr/src/app

# Ajout du fichier de dépendances package.json
COPY package.json /app

# Installation des dépendances
RUN npm install

# On expose le port 3000
EXPOSE 3000

# On lance le serveur quand on démarre le conteneur
CMD npm run start