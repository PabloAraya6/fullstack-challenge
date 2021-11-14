FROM node:lts-alpine

WORKDIR /var/www/src

COPY package.json .

RUN npm i

COPY . .

CMD [ "node", "dist/main" ]