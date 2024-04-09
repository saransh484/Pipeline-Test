FROM node:20-alpine3.18

RUN addgroup -g 1001 -S docky && \
    adduser -u 1001 -S docky -G docky

WORKDIR /usr/src/app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN yarn install

COPY . .

EXPOSE 5000

USER docky

CMD ["yarn", "start"]
