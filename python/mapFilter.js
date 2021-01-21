animals = [
  {
    name: 'Felix',
    age: 1,
    type: 'dog'
  },
  {
    name: 'Bruce',
    age: 5,
    type: 'horse'
  },
  {
    name: 'Felix',
    age: 4,
    type: 'horse'
  },
  {
    name: 'Meowth',
    age: 6,
    type: 'dog'
  },
];

// map
animals.map((animal) => animal.name.length);

// filter
animals.filter((animal) => animal.type == "horse");

// map and filter
animals.filter((animal) => animal.type == "dog").map((animal) => animal.age * 7);
