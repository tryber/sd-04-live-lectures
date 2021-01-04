USE sakila;

-- DROP table actor_clone;
-- DROP table actor_clone2;

-- COPIA APENAS A ESTRUTURA
CREATE TABLE actor_clone LIKE actor;

-- POVOAR A PARTIR DE OUTRA TABELA
INSERT INTO actor_clone
SELECT * FROM actor;

SELECT * FROM actor_clone;

-- COPIA A ESTRUTURA E DADOS
CREATE TABLE actor_clone2 AS
Select * from actor;

SELECT * FROM actor_clone2;