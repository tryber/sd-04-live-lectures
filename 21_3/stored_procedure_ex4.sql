-- PROCEDURE COM PARÂMETROS DE ENTRADA E DE SAÍDA
DROP PROCEDURE ChegamosNoCarnaval2;
DELIMITER $$
CREATE PROCEDURE ChegamosNoCarnaval2(
  IN ano INT,
  INOUT mes INT,
  OUT estamosNoCarnaval VARCHAR(100)
) 
BEGIN
    DECLARE mensagem VARCHAR(100);
    IF mes IS NULL THEN
      SET mes = MONTH(NOW());
    END IF;
    IF mes = 3 THEN
      SET mensagem = 'Estamos no mês do carnaval!';
    ELSE
      SET mensagem = 'Não estamos no mês do carnaval!';
    END IF;
    SELECT mensagem INTO estamosNoCarnaval;
END $$ DELIMITER ;

SELECT 3 INTO @mes;
CALL ChegamosNoCarnaval2(2020, @mes, @estamosNoCarnaval);
SELECT @mes, @estamosNoCarnaval;