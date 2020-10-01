FROM node:latest

ENV NODE_ENV=development
ENV NODE_DEBUG=API-LOGGER*

ADD . /app

WORKDIR /app
VOLUME ["/app"]

RUN npm install

RUN npm install -g nodemon

EXPOSE 3000

CMD npm start
