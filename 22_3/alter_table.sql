CREATE DATABASE IF NOT EXISTS Trybe;
USE Trybe;

CREATE table hub(
    id int,
    cidade VARCHAR(50)
);

SHOW COLUMNS FROM hub;

ALTER TABLE hub ADD COLUMN data_fundacao DATE;

ALTER TABLE hub ADD COLUMN estado VARCHAR(30) AFTER cidade;

ALTER TABLE hub MODIFY estado CHAR(2);

ALTER TABLE hub MODIFY id INT PRIMARY KEY AUTO_INCREMENT;

ALTER TABLE hub CHANGE estado uf CHAR(2);

ALTER TABLE hub MODIFY data_fundacao TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE hub DROP COLUMN uf;
