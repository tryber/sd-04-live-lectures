SHOW CREATE TABLE tabela;

CREATE INDEX index_country 
ON sakila.country (country);

SELECT * FROM country
WHERE country=’Sudan’;

DROP INDEX index_country ON sakila.country;

--  FULL TEXT INDEX
CREATE FULLTEXT INDEX description_index
ON film (description);

SELECT * FROM film
WHERE MATCH (description) AGAINST (‘PASTRY’);