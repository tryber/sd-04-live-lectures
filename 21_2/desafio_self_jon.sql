-- Exiba o titulo e a duração de empréstimo dos filmes que possuem a mesma duração. 
-- Exiba apenas os filmes com a duração de empréstimo entre 2 a 4 dias.
select f1.title,
  group_concat(f1.length),
  group_concat(f2.title)
from sakila.film as f1,
  sakila.film as f2
where f1.length = f2.length
  and f1.title <> f2.title
  and f1.length between 60 and 120
group by f1.title
order by f1.title;