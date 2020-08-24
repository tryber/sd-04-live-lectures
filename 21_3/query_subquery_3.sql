-- SUBQUERY NO WHERE
SELECT first_name,
  last_name
FROM sakila.actor
WHERE actor_id IN (
    SELECT actor_id
    FROM sakila.film_actor
    GROUP BY actor_id
    HAVING COUNT(*) > 20
  );