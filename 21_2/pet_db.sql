CREATE DATABASE IF NOT EXISTS pet_db;
USE pet_db;
CREATE TABLE friends (friend_id INT, friend_name VARCHAR(100));
CREATE TABLE pets (
  pet_id INT,
  owner_id INT,
  pet_type VARCHAR(100),
  pet_name VARCHAR(100)
);
INSERT INTO friends
values(1, 'John');
INSERT INTO friends
values(2, 'Sarah');
INSERT INTO friends
values(3, 'Rachel');
INSERT INTO friends
values(4, 'Sam');
INSERT INTO pets
values(1, 1, 'goldfish', 'Fishy');
INSERT INTO pets
values(2, 1, 'goldfish', 'Nemo');
INSERT INTO pets
values(3, 1, 'dog', 'Fido');
INSERT INTO pets
values(4, 2, 'cat', 'Kitty');
INSERT INTO pets
values(5, 2, 'bird', 'Feathers');
INSERT INTO pets
values(6, 3, 'chinchilla', 'Fuzzy');
INSERT INTO pets
values(7, NULL, 'iguana', 'Scales');