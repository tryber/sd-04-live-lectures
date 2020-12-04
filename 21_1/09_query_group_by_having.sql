SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
HAVING COUNT(*) >= 2;

SELECT district, COUNT(*) AS district_count
FROM sakila.address
GROUP BY district
HAVING district_count >= 2;

-- Alias com string não funciona
SELECT district, COUNT(*) AS 'district count'
FROM sakila.address
GROUP BY district
HAVING 'district count' >= 2;