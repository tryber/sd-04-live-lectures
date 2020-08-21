select first_name from customer;

select first_name from staff;

select first_name from customer
UNION ALL
select first_name from staff
order by first_name;