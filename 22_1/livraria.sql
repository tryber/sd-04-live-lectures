-- DROP DATABASE livraria;
CREATE DATABASE IF NOT EXISTS livraria;
-- CREATE SCHEMA IF NOT EXISTS livraria;
-- DROP DATABASE/SCHEMA livraria;

USE livraria;

CREATE TABLE autor(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE categoria(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE livro (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  preco DECIMAL(6, 2) NOT NULL,
  autor_id INT NOT NULL,
  -- categoria_id INT NOT NULL,
  CONSTRAINT `fk_autor` FOREIGN KEY (autor_id) REFERENCES autor(id) -- CONSTRAINT `fk_categoria` FOREIGN KEY (categoria_id) REFERENCES categoria(id) 
);

CREATE TABlE livro_categoria (
  livro_id INT NOT NULL,
  categoria_id INT NOT NULL,
  CONSTRAINT `fk_lc_livro_id` FOREIGN KEY (livro_id) REFERENCES livro(id),
  CONSTRAINT `fk_lc_categoria_id` FOREIGN KEY (categoria_id) REFERENCES categoria(id),
  PRIMARY KEY(livro_id, categoria_id)
);

INSERT INTO `livraria`.`categoria` (`nome`)
VALUES ('Ficção Científica');
INSERT INTO `livraria`.`categoria` (`nome`)
VALUES ('Fantasia');

INSERT INTO `livraria`.`autor` (`nome`)
VALUES ('Tolkien');
INSERT INTO `livraria`.`autor` (`nome`)
VALUES ('George Martin');
INSERT INTO `livraria`.`autor` (`nome`)
VALUES ('Frank Herbert');

INSERT INTO `livraria`.`livro` (`titulo`, `preco`, `autor_id`)
VALUES ('SENHOR DOS ANEIS 1', 60.00, 2);
INSERT INTO `livraria`.`livro` (`titulo`, `preco`, `autor_id`)
VALUES ('DUNA', 40.00, 1);
INSERT INTO `livraria`.`livro` (`titulo`, `preco`, `autor_id`)
VALUES ('GUERRA DOS TRONOS', 30.00, 3);

INSERT INTO `livraria`.`livro_categoria` (`livro_id`, `categoria_id`)
VALUES (1, 1);
INSERT INTO `livraria`.`livro_categoria` (`livro_id`, `categoria_id`)
VALUES (1, 2);

