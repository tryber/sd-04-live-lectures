DROP DATABASE IF EXISTS empresa;

CREATE DATABASE IF NOT EXISTS empresa;

USE empresa;

CREATE TABLE funcionarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  telefone VARCHAR(80) NOT NULL,
  salario INT NOT NULL,
  setor VARCHAR(50)
);

INSERT INTO funcionarios
VALUES (13,'Alex', '47 33556699, 47 99587365',5850,'Operacional'),
  (14, 'David', '47 77445428', 7500, 'Marketing'),
  (15, 'Sarah', '33 55447722, 30 88554162', 8000,'Vendas'),
  (16, 'Estela', '41 82653488', 6520, 'Marketing');