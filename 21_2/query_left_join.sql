SELECT F.friend_name, P.pet_id, P.owner_id, P.pet_name
FROM friends AS F
LEFT JOIN pets AS P 
ON F.friend_id = P.owner_id;