DROP DATABASE IF EXISTS empresa;
CREATE DATABASE IF NOT EXISTS empresa;
USE empresa;
CREATE TABLE funcionarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  telefone VARCHAR(80) NOT NULL,
  endereco VARCHAR(255) NOT NULL,
  setor VARCHAR(50),
  salario INT NOT NULL,
  adicional_salario INT NOT NULL,
  salario_final INT NOT NULL,
  superior_id INT,
  superior VARCHAR(100)
);
INSERT INTO funcionarios
VALUES (
    '12',
    'Bruce',
    '86 99900000',
    '86379 Skyla Light Suite 766 - Homestead, MO / 15190',
    'Diretoria',
    '10000',
    '0',
    '10000',
    NULL,
    NULL
  );
INSERT INTO funcionarios
VALUES (
    '13',
    'Alex',
    '47 33556699,  47 99587365',
    '805 Leatha Springs Suite 104 - Bossier City, MN / 38027',
    'TI',
    '5000',
    '850',
    '5850',
    '12',
    'Bruce'
  );
INSERT INTO funcionarios
VALUES (
    '14',
    'David',
    '47 77445428',
    '265 Fay Ports Suite 344 - North Las Vegas, NM / 64485',
    'Marketing',
    '6000',
    '0',
    '6000',
    '12',
    'Bruce'
  );
INSERT INTO funcionarios
VALUES (
    '15',
    'Sarah',
    '33 55447722, 30 88554162',
    '545 Ritchie Trail Suite 834 - South Gate, NY / 68619',
    'Vendas',
    '8000',
    '1000',
    '9000',
    '12',
    'Bruce'
  );
INSERT INTO funcionarios
VALUES (
    '16',
    'Estela',
    '41 82653488',
    '2741 Koepp Union Suite 445 - Huntington, NY / 61348',
    'Marketing',
    '6000',
    '500',
    '6500',
    '14',
    'David'
  );
SELECT *
from funcionarios;
SELECT f.nome,
  t.telefone
from funcionarios as f
  INNER JOIN telefones as t ON t.funcionario_id = f.id;
CREATE table telefones(
  id INT PRIMARY KEY AUTO_INCREMENT,
  telefone VARCHAR(40),
  funcionario_id INT NOT NULL,
  FOREIGN KEY (funcionario_id) REFERENCES funcionarios(id)
);
SELECT *
FROM telefones;
INSERT INTO telefones (funcionario_id, telefone)
VALUES (12, '47 33556699'),
  (13, '47 33556699'),
  (13, '47 99587365'),
  (14, '47 77445428'),
  (15, '33 55447722'),
  (15, '30 88554162'),
  (16, '30 88554162');
ALTER TABLE funcionarios DROP COLUMN telefone;
CREATE table setores(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(40)
);
INSERT INTO setores (nome)
VALUES ('Diretoria'),
  ('TI'),
  ('Marketing'),
  ('Vendas');
SELECT *
FROM setores;
ALTER TABLE funcionarios DROP COLUMN setor;
ALTER TABLE funcionarios
ADD COLUMN setor_id INT NOT NULL;
ALTER TABLE funcionarios
ADD CONSTRAINT FOREIGN KEY (setor_id) REFERENCES setores(id);
SELECT *
from funcionarios;
UPDATE funcionarios
SET setor_id = 1
where id = 12;
UPDATE funcionarios
SET setor_id = 2
where id = 13;
UPDATE funcionarios
SET setor_id = 3
where id = 14;
UPDATE funcionarios
SET setor_id = 4
where id = 15;
UPDATE funcionarios
SET setor_id = 3
where id = 16;
ALTER TABLE setores
ADD COLUMN `salario_base` INT NOT NULL
AFTER `nome`;
UPDATE setores
SET salario_base = 10000
where id = 1;
UPDATE setores
SET salario_base = 6000
where id = 2;
UPDATE setores
SET salario_base = 5000
where id = 3;
UPDATE setores
SET salario_base = 6000
where id = 4;
ALTER TABLE funcionarios DROP COLUMN salario;
ALTER TABLE funcionarios DROP COLUMN salario_final;
SELECT f.nome,
  t.telefone,
  (s.salario_base + f.adicional_salario) as salario_final
from funcionarios as f
  INNER JOIN telefones as t ON t.funcionario_id = f.id
  INNER JOIN setores as s ON s.id = f.setor_id;