-- Retornar o nome completo de todos os atores que fizeram pelo menos 30 filmes
select actor_id,
  concat(first_name, " ", last_name) as full_name
from actor as a
where exists (
    select actor_id
    from film_actor as fa
    where a.actor_id = fa.actor_id
    group by fa.actor_id
    having count(fa.film_id) >= 30
  )
order by full_name;

-- MESMO RESULTADO COM JOIN
select a.actor_id,
  concat(first_name, " ", last_name) as full_name
from actor as a
INNER JOIN film_actor as fa ON a.actor_id = fa.actor_id
group by a.actor_id
having count(fa.film_id) >= 30
order by full_name;