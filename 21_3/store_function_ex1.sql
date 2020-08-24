-- STORED FUNCTION SEM PARAMETRO DE ENTRADA
DELIMITER $$ 
CREATE FUNCTION CalcularTotalVendasCadastrados() 
RETURNS INT READS SQL DATA BEGIN
  DECLARE total_de_vendas INT;
  SELECT COUNT(*)
  FROM sakila.payment INTO total_de_vendas;
  RETURN total_de_vendas;
END $$ DELIMITER;
-- Como usar:
SELECT CalcularTotalVendasCadastrados();