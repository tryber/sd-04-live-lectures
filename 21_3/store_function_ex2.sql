-- STORED FUNCTION COM PARAMETRO DE ENTRADA
DELIMITER $$ 
CREATE FUNCTION ObterQuantidadeVendasPorCliente(id_cliente int) 
RETURNS INT READS SQL DATA BEGIN
  DECLARE total_de_vendas INT;
  SELECT COUNT(*)
  FROM sakila.payment
  WHERE sakila.payment.customer_id = id_cliente INTO total_de_vendas;
  RETURN total_de_vendas;
END $$ DELIMITER;
-- Como usar:
SELECT ObterQuantidadeVendasPorCliente(3);