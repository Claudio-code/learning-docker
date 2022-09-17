FROM node:lts-alpine

WORKDIR /home/node/api

COPY package.json ./

COPY package-lock.json ./

COPY index.js ./

RUN npm i

EXPOSE 8081

ENTRYPOINT [ "node", "index.js" ]
