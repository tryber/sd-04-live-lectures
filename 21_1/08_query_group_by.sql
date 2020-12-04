SELECT store_id
FROM sakila.customer
GROUP BY store_id;

SELECT store_id, COUNT(*)
FROM sakila.customer
GROUP BY store_id;

SELECT rating, AVG(rental_rate)
FROM sakila.film
GROUP BY rating;

SELECT rating, MIN(rental_rate)
FROM sakila.film
GROUP BY rating;

SELECT rating, MAX(rental_rate)
FROM sakila.film
GROUP BY rating;

SELECT rating, SUM(rental_rate)
FROM sakila.film
GROUP by rating;