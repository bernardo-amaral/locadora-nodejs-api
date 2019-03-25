FROM mysql:latest

WORKDIR /db
COPY . .

#RUN apt install -y apparmor-profiles

ADD database.sql /docker-entrypoint-initdb.d
COPY my.cnf /etc/mysql/conf.d/
