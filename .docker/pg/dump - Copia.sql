--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2 (Debian 11.2-1.pgdg90+1)
-- Dumped by pg_dump version 11.2

-- Started on 2019-03-25 15:01:40

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 199 (class 1259 OID 16400)
-- Name: movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movies (
    movie_id integer NOT NULL,
    title character varying NOT NULL,
    director character varying NOT NULL,
    quantity integer DEFAULT 1 NOT NULL
);

--
-- TOC entry 198 (class 1259 OID 16398)
-- Name: movies_movie_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movies_movie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- TOC entry 2914 (class 0 OID 0)
-- Dependencies: 198
-- Name: movies_movie_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movies_movie_id_seq OWNED BY public.movies.movie_id;


--
-- TOC entry 200 (class 1259 OID 16412)
-- Name: tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tokens (
    token character varying NOT NULL,
    user_id integer NOT NULL,
    active character varying(1) DEFAULT 'S'::character varying NOT NULL
);

--
-- TOC entry 197 (class 1259 OID 16387)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    name character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL
);

--
-- TOC entry 202 (class 1259 OID 16429)
-- Name: users_movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_movies (
    id_user_movie integer NOT NULL,
    user_id integer NOT NULL,
    movie_id integer NOT NULL,
    rented character varying(1) DEFAULT 'S'::character varying NOT NULL
);

--
-- TOC entry 201 (class 1259 OID 16427)
-- Name: users_movies_id_user_movie_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_movies_id_user_movie_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2915 (class 0 OID 0)
-- Dependencies: 201
-- Name: users_movies_id_user_movie_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_movies_id_user_movie_seq OWNED BY public.users_movies.id_user_movie;


--
-- TOC entry 196 (class 1259 OID 16385)
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2916 (class 0 OID 0)
-- Dependencies: 196
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- TOC entry 2760 (class 2604 OID 16403)
-- Name: movies movie_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies ALTER COLUMN movie_id SET DEFAULT nextval('public.movies_movie_id_seq'::regclass);


--
-- TOC entry 2759 (class 2604 OID 16390)
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- TOC entry 2763 (class 2604 OID 16432)
-- Name: users_movies id_user_movie; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_movies ALTER COLUMN id_user_movie SET DEFAULT nextval('public.users_movies_id_user_movie_seq'::regclass);


--
-- TOC entry 2905 (class 0 OID 16400)
-- Dependencies: 199
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movies (movie_id, title, director, quantity) FROM stdin;
1	Jurassic Park	Steven Spielberg	4
2	Madagascar	Tom McGrath, Eric Darnell	3
3	Indiana Jones	Steven Spielberg	5
4	E.T.	Steven Spielberg	1
5	The Avengers	Joss Whedon	8
\.


--
-- TOC entry 2906 (class 0 OID 16412)
-- Dependencies: 200
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tokens (token, user_id, active) FROM stdin;
\.


--
-- TOC entry 2903 (class 0 OID 16387)
-- Dependencies: 197
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (user_id, name, email, password) FROM stdin;
1	Bernardo	bernardo.amaral85@gmail.com	e7d80ffeefa212b7c5c55700e4f7193e
2	Kira	kira@mailteste.com	e7d80ffeefa212b7c5c55700e4f7193e
3	Lola	lola@mailteste.com	e7d80ffeefa212b7c5c55700e4f7193e
\.


--
-- TOC entry 2908 (class 0 OID 16429)
-- Dependencies: 202
-- Data for Name: users_movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users_movies (id_user_movie, user_id, movie_id, rented) FROM stdin;
\.


--
-- TOC entry 2917 (class 0 OID 0)
-- Dependencies: 198
-- Name: movies_movie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movies_movie_id_seq', 1, false);


--
-- TOC entry 2918 (class 0 OID 0)
-- Dependencies: 201
-- Name: users_movies_id_user_movie_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_movies_id_user_movie_seq', 1, false);


--
-- TOC entry 2919 (class 0 OID 0)
-- Dependencies: 196
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_user_id_seq', 1, false);


--
-- TOC entry 2770 (class 2606 OID 16409)
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (movie_id);


--
-- TOC entry 2772 (class 2606 OID 16411)
-- Name: movies movies_title_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_title_key UNIQUE (title);


--
-- TOC entry 2775 (class 2606 OID 16420)
-- Name: tokens tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (token);


--
-- TOC entry 2766 (class 2606 OID 16397)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 2777 (class 2606 OID 16435)
-- Name: users_movies users_movies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_movies
    ADD CONSTRAINT users_movies_pkey PRIMARY KEY (id_user_movie);


--
-- TOC entry 2768 (class 2606 OID 16395)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- TOC entry 2773 (class 1259 OID 16426)
-- Name: fki_tokens_ibfk_1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_tokens_ibfk_1 ON public.tokens USING btree (user_id);


--
-- TOC entry 2778 (class 2606 OID 16421)
-- Name: tokens tokens_ibfk_1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_ibfk_1 FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- TOC entry 2779 (class 2606 OID 16436)
-- Name: users_movies users_movies_ibfk_1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_movies
    ADD CONSTRAINT users_movies_ibfk_1 FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- TOC entry 2780 (class 2606 OID 16441)
-- Name: users_movies users_movies_ibfk_2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_movies
    ADD CONSTRAINT users_movies_ibfk_2 FOREIGN KEY (movie_id) REFERENCES public.movies(movie_id);


-- Completed on 2019-03-25 15:01:40

--
-- PostgreSQL database dump complete
--

