FROM node:20-alpine3.18

WORKDIR /usr/src/app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN yarn install

COPY . .

CMD ["yarn", "start"]
