-- Monte uma query que exiba o id do ator, nome, id do filme e titulo do filme, 
-- usando as tabelas actor, film_actor e film. 
-- Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT a.actor_id,
  concat(a.first_name, " ", a.last_name),
  f.film_id,
  f.title
FROM film_actor fa
  INNER JOIN actor AS a ON a.actor_id = fa.actor_id
  INNER JOIN film AS f ON f.film_id = fa.film_id;