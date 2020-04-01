FROM node:slim

COPY package*.json ./

RUN npm ci

COPY entrypoint.js /entrypoint.js

ENTRYPOINT ["node", "/entrypoint.js"]