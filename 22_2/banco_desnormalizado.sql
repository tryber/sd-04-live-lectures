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
VALUES ('12','Bruce','86 99900000','86379 Skyla Light Suite 766 - Homestead, MO / 15190','Diretoria','10000','0','10000',NULL,NULL);
INSERT INTO funcionarios
VALUES ('13','Alex','47 33556699,  47 99587365','805 Leatha Springs Suite 104 - Bossier City, MN / 38027','TI','5000','850','5850','12','Bruce');
INSERT INTO funcionarios
VALUES ('14','David','47 77445428','265 Fay Ports Suite 344 - North Las Vegas, NM / 64485','Marketing','6000','0','6000','12','Bruce');
INSERT INTO funcionarios
VALUES ('15','Sarah','33 55447722, 30 88554162','545 Ritchie Trail Suite 834 - South Gate, NY / 68619','Vendas','8000','1000','9000','12','Bruce');
INSERT INTO funcionarios
VALUES ('16','Estela','41 82653488','2741 Koepp Union Suite 445 - Huntington, NY / 61348','Marketing','6000','500','6500','14','David');
SELECT *
from funcionarios;