select 
  concat(first_name, " ", last_name), 
  CASE store_id 
  WHEN 1 THEN 'loja 1'
  WHEN 2 THEN 'loja 2'
  END as loja
from sakila.customer;