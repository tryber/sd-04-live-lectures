CREATE VIEW atores_com_lista_filmes AS
SELECT CONCAT(a.first_name, ' ', a.last_name) as ator, GROUP_CONCAT(f.title) FROM actor as a
INNER JOIN film_actor fa ON fa.actor_id=a.actor_id
INNER JOIN film f ON f.film_id=fa.film_id
GROUP BY ator;

SELECT * FROM atores_com_lista_filmes;