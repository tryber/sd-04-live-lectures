-- soma
SELECT 5 + 5;

-- subtração
SELECT 10 - 5;

-- multiplicação
SELECT 10 * 5;

-- divisão
SELECT 10 / 5;

-- retorna a parte inteira de uma divisão
SELECT 20 DIV 3; 

-- retorna o resto de uma divisão
SELECT 18 MOD 3; 
SELECT 5 MOD 2; 

-- arredondar valor
SELECT ROUND(20.49);
SELECT ROUND(20.51); 
SELECT ROUND(20.34, 1); 
SELECT ROUND(20.34, 2); 
SELECT ROUND(20.34, 3); 

-- arredondar o valor sempre para o valor inteiro mais próximo para cima.
SELECT CEIL(20.51);
SELECT CEIL(20.01);
SELECT CEIL(20.2);

-- arredondar o valor sempre para o valor inteiro mais próximo por baixo.
SELECT FLOOR(10.51);
SELECT FLOOR(20.3);
SELECT FLOOR(20.51);
SELECT FLOOR(20.99);

-- potenciação onde temos numero X elevado ao numero Y.
SELECT POW(2, 5);
SELECT POW(2, 0);
SELECT POW(2, 3);
SELECT POW(2, 4);

-- Encontrar a raíz quadrada usando SQRT. Caso não exista uma raiz NULL é retornado.
SELECT SQRT(16);
SELECT SQRT(-1);
SELECT SQRT(3);
SELECT SQRT(4); 

-- Gerar valores aleatórios entre 0 (incluso) e 1.0 (excluso) usando o RAND.
SELECT RAND() 

 -- Gera um valor entre 1 e 10 da seguinte forma:
SELECT FLOOR(1 + (RAND() * 10));