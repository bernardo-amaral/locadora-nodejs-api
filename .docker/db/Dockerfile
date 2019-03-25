FROM mysql:latest

WORKDIR /db
COPY . .

ADD database.sql /docker-entrypoint-initdb.d
COPY my.cnf /etc/mysql/conf.d/
