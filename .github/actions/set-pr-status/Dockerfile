FROM node:alpine

COPY package*.json ./

RUN npm cache clean --force

RUN npm i

COPY entrypoint.js /entrypoint.js

ENTRYPOINT ["node", "/entrypoint.js"]