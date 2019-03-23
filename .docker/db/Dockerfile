FROM mysql/mysql-server:latest

WORKDIR /db
COPY . .

ENV MYSQL_ROOT_PASSWORD 'root'
ENV MYSQL_ALLOW_EMPTY_PASSWORD 1

RUN apt-get install -y apparmor-profiles

ADD database.sql /docker-entrypoint-initdb.d
COPY my.cnf /etc/mysql/conf.d/
