SELECT F.friend_id, F.friend_name, P.pet_id, P.owner_id, P.pet_name
FROM friends AS F
RIGHT JOIN pets AS P ON F.friend_id = P.owner_id;