DROP DATABASE IF EXISTS game_mvc;
CREATE DATABASE IF NOT EXISTS game_mvc;

USE game_mvc;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS games (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  user_name VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (email, password, first_name, last_name)
VALUES ('renato.filho@betrybe.com', '12345678', 'renato', 'filho'),
       ('vini.vasconcelos@betrybe.com', '12345678', 'vinicius', 'vasconcelos'),
       ('coruja@betrybe.com', '12345678', 'gabriel', 'coruja');

INSERT INTO games (user_id, user_name, title)
VALUES (1, 'renato', 'PES'),
       (2, 'vinicius', 'FIFA12, FIFA13, FIFA14, FIFA15, FIFA16'),
       (3, 'coruja', 'BOMBA PATCH');

SELECT * FROM users;
SELECT * FROM games;
