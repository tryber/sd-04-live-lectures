DROP DATABASE IF EXISTS cookmaster;
CREATE DATABASE IF NOT EXISTS cookmaster;

USE cookmaster;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS recipes (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    user VARCHAR(100) NOT NULL,
	name VARCHAR(100) NOT NULL,
    ingredients VARCHAR(300) NOT NULL,
    instructions VARCHAR(300) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (email, password, first_name, last_name)
VALUES ('bruno.batista@gmail.com', '12345678', 'bruno', 'batista'),
       ('vanessa.morato@gmail.com', '12345678', 'vanessa', 'morato'),
       ('carolina.silva@gmail.com', '12345678', 'carolina', 'silva');

INSERT INTO recipes (user_id, user, name, ingredients, instructions)
VALUES (1, 'bruno batista', 'Receita de Bolo', 'Farinha,ovo,leite', '30 minutos no forno'),
       (1, 'bruno batista', 'Receita de Cookie', 'Farinha,ovo,leite', '20 minutos no forno'),
       (1, 'bruno batista', 'Receita de cafe', 'pó de cafe,agua', '10 minutos no fogo'),
       (1, 'bruno batista', 'Receita de miojo', 'miojo,agua', '3 minutos no fogo'),
       (1, 'bruno batista', 'Receita de mexidão', 'ovo,preseunto,queijo', 'mistura e frita na frigideira');

SELECT * FROM users;
SELECT * FROM recipes;
