FROM mysql/mysql-server:latest

WORKDIR /db
COPY . .
RUN mysql -u locadorauser -plocadorapass locadora < database.sql
