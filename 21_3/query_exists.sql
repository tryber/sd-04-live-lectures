-- considerando o banco sakila recém-importado
-- retorna a quantidade de atores que fizeram algum filme (200)
select count(*) from actor a where not exists (
    select actor_id from film_actor fa
    where a.actor_id = fa.actor_id
  );

INSERT INTO actor (first_name, last_name)
VALUES ('Nicolas', 'Cage'),
       ('Gal', 'Gadot'),
       ('Robert', 'Downey Jr'),
       ('Scarlett', 'Johansson');

-- retorna a quantidade de atores que não fizeram nenhum filme (200)
select count(*) from actor a where not exists (
    select actor_id
    from film_actor fa
    where a.actor_id = fa.actor_id
);