-- PROCEDURE SEM PARÂMETROS
DELIMITER $$ 
CREATE PROCEDURE GerarDataFormatoBrasileiro() BEGIN
  SELECT CONCAT(DAY(NOW()), '/', MONTH(NOW()), '/', YEAR(NOW()));
END $$ DELIMITER;

CALL GerarDataFormatoBrasileiro();