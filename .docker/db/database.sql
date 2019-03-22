
CREATE DATABASE myapi;
USE myapi;

CREATE USER 'apiadmin'@'%' IDENTIFIED WITH mysql_native_password BY 'apipass';
GRANT ALL PRIVILEGES ON * . * TO 'apiadmin'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;


CREATE TABLE movies (
  movie_id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  director varchar(255) NOT NULL,
  quantity int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (movie_id),
  UNIQUE KEY title (title)
);

INSERT INTO movies VALUES (1,'Jurassic Park','Steven Spielberg',4),(2,'Madagascar','Tom McGrath, Eric Darnell',3),(3,'Indiana Jones','Steven Spielberg',5),(4,'E.T.','Steven Spielberg',1),(5,'The Avengers','Joss Whedon',8);

CREATE TABLE tokens (
  token varchar(255) NOT NULL,
  user_id int(11) NOT NULL,
  active varchar(1) NOT NULL DEFAULT 'S',
  PRIMARY KEY (token),
  UNIQUE KEY token (token),
  KEY user_id (user_id),
  CONSTRAINT tokens_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE users (
  user_id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE KEY email (email)
);

INSERT INTO users VALUES (1,'Bernardo','bernardo.amaral85@gmail.com','e7d80ffeefa212b7c5c55700e4f7193e'),(2,'Kira','kira@mailteste.com','e7d80ffeefa212b7c5c55700e4f7193e'),(3,'Lola','lola@mailteste.com','e7d80ffeefa212b7c5c55700e4f7193e');

CREATE TABLE users_movies (
  id_user_movie int(11) NOT NULL AUTO_INCREMENT,
  user_id int(11) NOT NULL,
  movie_id int(11) NOT NULL,
  rented varchar(1) NOT NULL DEFAULT 'S',
  PRIMARY KEY (id_user_movie),
  KEY user_id (user_id),
  KEY movie_id (movie_id),
  CONSTRAINT users_movies_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (user_id),
  CONSTRAINT users_movies_ibfk_2 FOREIGN KEY (movie_id) REFERENCES movies (movie_id)
);
