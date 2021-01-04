-- PROCEDURE COM PARÂMETROS DE ENTRADA E DE SAÍDA
DELIMITER $$ CREATE PROCEDURE ChegamosNoCarnaval(IN ano INT, OUT estamosNoCarnaval VARCHAR(100)) BEGIN
  DECLARE mensagem VARCHAR(100);
  IF MONTH(NOW()) = 3 THEN
  SET mensagem = 'Estamos no mês do carnaval!';
  ELSE
  SET mensagem = 'Não estamos no mês do carnaval!';
  END IF;
  SELECT mensagem INTO estamosNoCarnaval;
END $$ DELIMITER;
CALL ChegamosNoCarnaval(2020, @estamosNoCarnaval);
SELECT @estamosNoCarnaval;