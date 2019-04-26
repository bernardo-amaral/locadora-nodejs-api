CREATE TABLE movies (
    movie_id integer NOT NULL,
    title character varying NOT NULL,
    director character varying NOT NULL,
    quantity integer DEFAULT 1 NOT NULL
);
