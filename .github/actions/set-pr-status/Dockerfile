FROM node:alpine

COPY package*.json ./

RUN npm ci

COPY entrypoint.js /entrypoint.js

ENTRYPOINT ["node", "/entrypoint.js"]