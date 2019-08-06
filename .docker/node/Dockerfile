FROM node:latest

ENV NODE_ENV=development

ADD . /app

WORKDIR /app
VOLUME ["/app"]

RUN yarn install

RUN npm install -g nodemon

EXPOSE 3000

CMD npm start
