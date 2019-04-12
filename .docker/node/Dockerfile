FROM node:latest

# ENV http_proxy="http://10.203.222.109:3128/"
# ENV https_proxy="http://10.203.222.109:3128/"
# ENV no_proxy=""

ADD . /app

WORKDIR /app
VOLUME ["/app"]

RUN npm install

EXPOSE 3000

CMD npm start
