# Image de base
FROM node:latest

# Changement du repertoire courant
WORKDIR /app

# Ajout du fichier de dépendances package.json
COPY package.json /app

# Installation des dépendances
RUN npm install

# Ajout des sources
ADD . /app

# On expose le port 3000
EXPOSE 3000

# On partage un dossier de log
VOLUME /app/log

# On lance le serveur quand on démarre le conteneur
CMD npm run start