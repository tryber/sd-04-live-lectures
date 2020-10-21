SELECT *
FROM sakila.address
where city_id = 449;
--
SELECT *
FROM sakila.city
WHERE city_id = 449;

-- 
SELECT A.address, A.district, A.city_id, C.city
FROM sakila.address as A
INNER JOIN sakila.city AS C ON A.city_id = C.city_id
WHERE A.city_id = 449;