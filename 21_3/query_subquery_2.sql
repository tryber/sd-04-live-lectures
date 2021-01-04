-- SUBQUERY NO SELECT
SELECT customer_id,
  first_name,
  (
    SELECT address
    FROM sakila.address AS a
    WHERE a.address_id = ct.address_id
  ) AS 'Endereço'
FROM sakila.customer ct;