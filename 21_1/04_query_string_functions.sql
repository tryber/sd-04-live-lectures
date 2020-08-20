-- exibe tamanho da string passada como parâmetro
SELECT LENGTH('Curso BeTrybe'); 

-- retorna em caixa alta a string passada como parâmetro
SELECT UCASE('Curso BeTrybe'); 

-- retorna em caixa baixa a string passada como parâmetro
SELECT LCASE('Curso BeTrybe'); 

-- substitui todas as ocorrências de 'e' por 'eeee' em 'Curso BeTrybe'
SELECT REPLACE('Curso BeTrybe', 'e', 'eeee'); 

-- retorna 5 caracteres a partir da esquerda
SELECT LEFT('Curso BeTrybe', 5); 

-- retorna 5 caracteres a partir da direita
SELECT RIGHT('Curso BeTrybe', 5); -- 

-- retorna todos os caracteres começando a partir do sexto caractere à esquerda
SELECT SUBSTRING('Curso BeTrybe', 6); 

-- retorna uma string de tamanho 4, começando a partir do segundo caractere à esquerda
SELECT SUBSTRING('Curso BeTrybe', 2, 4); 

 -- retorna uma string de tamanho 6, começando a partir do quinto caractere à direita
SELECT SUBSTRING('Curso BeTrybe', -5, 6);