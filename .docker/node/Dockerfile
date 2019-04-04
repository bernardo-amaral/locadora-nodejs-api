FROM node:latest

# ARG PROXY

# ENV http_proxy="http://$PROXY/"
# ENV https_proxy="http://$PROXY/"
# ENV no_proxy=""

ADD . /app

WORKDIR /app

COPY . .

VOLUME ["/app"]

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
