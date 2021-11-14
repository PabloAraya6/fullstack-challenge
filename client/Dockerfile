FROM node:lts-alpine

WORKDIR /var/www/src

COPY package.json ./

COPY package-lock.json ./

RUN npm i --silent

COPY . ./

CMD ["npm", "start"]
