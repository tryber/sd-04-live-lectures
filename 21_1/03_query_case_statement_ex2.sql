SELECT 
CASE
  when length <= 30 THEN 'Até Meia-Hora'
  when length > 30 and length <= 60 THEN 'De 30 minutos a 1 hora'
  when length > 60 and length <= 90 THEN 'De 1 hora a 1 hora e meia'
  when length > 90 and length <= 120 THEN 'De 1 hora e meia até duas horas'
  when length > 120 THEN 'Mais de duas horas'
END as Duracão_do_filme
FROM sakila.film;