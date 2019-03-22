FROM mysql/mysql-server:latest

WORKDIR /db
COPY . .

ENV MYSQL_ROOT_PASSWORD 'root'
ENV MYSQL_ALLOW_EMPTY_PASSWORD 1

ADD database.sql /docker-entrypoint-initdb.d
