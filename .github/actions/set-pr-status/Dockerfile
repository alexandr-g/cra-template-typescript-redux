FROM node:alpine

COPY package*.json ./

RUN npm i

COPY entrypoint.js /entrypoint.js

ENTRYPOINT ["node", "/entrypoint.js"]