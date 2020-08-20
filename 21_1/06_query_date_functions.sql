-- Retornar a data atual 
SELECT CURRENT_DATE(); -- yyyy-mm-dd Atual
-- Retornar a data e hora atual 
SELECT NOW(); -- yyyy-mm-dd hh-mm-ss Atual

-- Como obter a diferença em dias (primeira data - segunda data)
SELECT DATEDIFF('2020-05-01', '2020-05-31');
SELECT DATEDIFF(return_date, rental_date) FROM sakila.rental;

-- Como obter a diferença de tempo (primeiro tempo - segundo tempo)
SELECT TIMEDIFF('05:15:30', '06:15:30');
SELECT TIMEDIFF('05:15:30', '05:12:30');
SELECT TIMEDIFF(return_date, rental_date) FROM sakila.rental;

-- DATE extrai a data do que foi passado como parâmetro
SELECT return_date, DATE(return_date) FROM sakila.rental; 
-- YEAR extrai o ano do que foi passado como parâmetro
SELECT return_date, YEAR(return_date) FROM sakila.rental; 
-- MONTH extrai o mês do que foi passado como parâmetro
SELECT return_date, MONTH(return_date) FROM sakila.rental; 
-- DAY extrai o dia do que foi passado como parâmetro
SELECT return_date, DAY(return_date) FROM sakila.rental; 
-- HOUR extrai a hora do que foi passado como parâmetro
SELECT return_date, HOUR(return_date) FROM sakila.rental; 
-- MINUTE extrai o minuto do que foi passado como parâmetro
SELECT return_date, MINUTE(return_date) FROM sakila.rental; 
-- SECOND extrai o segundo do que foi passado como parâmetro
SELECT return_date, SECOND(return_date) FROM sakila.rental; 

-- Retornar parte de uma data
SELECT HOUR(CURRENT_DATE());
SELECT DAY(CURRENT_DATE());
SELECT MONTH(CURRENT_DATE());

SELECT HOUR(NOW());
SELECT MINUTE(NOW());
SELECT HOUR(NOW());

-- função DATE_FORMAT: https://www.w3schools.com/sql/func_mysql_date_format.asp