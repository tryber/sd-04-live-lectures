select 
  concat(first_name, " ", last_name), 
  if(active, "Ativo", "Não ativo") 
from customer;