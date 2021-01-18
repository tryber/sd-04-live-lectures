animals = [
  {
    'name': 'Felix',
    'age': 1,
    'type': 'dog',
  },
  {
    'name': 'Bruce',
    'age': 5,
    'type': 'horse'
  },
  {
    'name': 'Felix',
    'age': 4,
    'type': 'horse'
  },
  {
    'name': 'Meowth',
    'age': 6,
    'type': 'dog'
  },
]

# map
# map(lambda animal: len(animal["nome"]), animals)
# um fato curioso sobre o map é que ele é preguiço
# retorna um elemento a cada vez
[len(animal["name"]) for animal in animals]

# filter
# filter(lambda animal: animal["type"] == "horse", animals)
[animal for animal in animals if animal["type"] == "horse"]

# map and filter
[animal["age"] * 7
 for animal in animals
 if animal["type"] == "dog"]


print([animal for animal in animals if animal["type"] == "horse"])
