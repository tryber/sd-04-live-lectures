-- Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. 
-- Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT concat(s.first_name, " ", s.last_name) as full_name,
  avg(p.amount)
from staff as s
  INNER JOIN payment as p ON s.staff_id = p.staff_id
where year(p.payment_date) = '2006'
group by full_name;