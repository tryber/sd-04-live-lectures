SELECT concat(C1.first_name, " ", C1.last_name) as customer1,
  concat(C2.first_name, " ", C2.last_name) as customer2
FROM sakila.customer C1,
  sakila.customer C2
WHERE C1.first_name = C2.first_name
  and C1.last_name <> C2.last_name;