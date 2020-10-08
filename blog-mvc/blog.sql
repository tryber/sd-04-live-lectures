DROP DATABASE IF EXISTS blog_mvc;
CREATE DATABASE IF NOT EXISTS blog_mvc;

USE blog_mvc;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
	body VARCHAR(100) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (email, password, first_name, last_name)
VALUES ('renato.filho@betrybe.com', '12345678', 'renato', 'filho'),
       ('vini.vasconcelos@betrybe.com', '12345678', 'vinicius', 'vasconcelos'),
       ('coruja@betrybe.com', '12345678', 'gabriel', 'coruja');

INSERT INTO posts (user_id, title, body)
VALUES (1, 'MVC - Parte 1 - Modelo', 'lorem ipsum'),
       (2, 'MVC - Parte 2 - Controller', 'lorem ipsum'),
       (3, 'MVC - Parte 3 - View', 'lorem ipsum');

SELECT * FROM users;
SELECT * FROM posts;
