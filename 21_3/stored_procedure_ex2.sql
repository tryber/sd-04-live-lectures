-- PROCEDURE COM PARÂMETROS
DROP PROCEDURE GerarDataFormatoBrasileiroComAno;
DELIMITER $$ 
CREATE PROCEDURE GerarDataFormatoBrasileiroComAno(IN ano INT) BEGIN
  SELECT CONCAT(DAY(NOW()), '/', MONTH(NOW()), '/', ano);
END $$ DELIMITER;

CALL GerarDataFormatoBrasileiroComAno(2021);