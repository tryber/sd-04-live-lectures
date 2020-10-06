DROP DATABASE IF EXISTS real_state;
CREATE DATABASE IF NOT EXISTS real_state;

USE real_state;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS buildings (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    address VARCHAR(100) NOT NULL,
	description VARCHAR(100) NOT NULL,
    details VARCHAR(300) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (email, password, first_name, last_name)
VALUES ('renato.filho@betrybe.com', '12345678', 'renato', 'filho'),
       ('vini.vasconcelos@betrybe.com', '12345678', 'vinicius', 'vasconcelos'),
       ('coruja@betrybe.com', '12345678', 'gabriel', 'coruja');

INSERT INTO buildings (user_id, address, description, details)
VALUES (1, 'Av Afonso Penha', 'Apartamento com 3 quartos, perto da Savassi', 'suíte,sala,cozinha'),
       (1, 'Av Nossa Senhora do Carmo', 'Apartamento com 2 quartos, perto da Savassi', 'sala,cozinha'),
       (2, 'Rua Monte Sião', 'Apartamento com 4 quartos, perto da Savassi', 'sala,cozinha,suite,varanda');

SELECT * FROM users;
SELECT * FROM buildings;
