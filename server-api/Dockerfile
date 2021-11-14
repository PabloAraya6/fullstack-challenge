FROM node:15.14.0

WORKDIR /var/www/src

COPY package.json .

RUN npm i

COPY . .

CMD [ "node", "dist/main" ]