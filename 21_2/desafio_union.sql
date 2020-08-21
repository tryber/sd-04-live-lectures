(
  SELECT concat(first_name, " ", last_name) as full_name1
  FROM actor
  order by actor_id desc
  limit 5
)
UNION
(
  SELECT concat(first_name, " ", last_name) as full_name1
  FROM staff
  order by staff_id
  limit 1
)
UNION
(
  SELECT concat(first_name, " ", last_name) as full_name1
  FROM customer
  order by customer_id
  limit 5 offset 15
);