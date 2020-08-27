// Higher Order Functions = .map()

// Imagine que tenhamos um array com informações sobre pássaros e 
// queremos retornar apenas os nomes dos pássaros, porém somente em letras minúsculas.

const birds = [
    { ID: 'DV8', Name: 'Eurasian Collared-Dove', Type: 'Dove' },
    { ID: 'HK12', Name: 'Bald Eagle', Type: 'Hawk' },
    { ID: 'HK6', Name: 'Red-Tailed Hawk', Type: 'Hawk' },
    { ID: 'SP11', Name: 'Old World Sparrow', Type: 'Sparrow' },
    { ID: 'DV2', Name: 'Mourning Dove', Type: 'Dove' },
];

// Repetindo o map varias vezes
// const birdNames = birds.map(element => element.Name).map(element => element.toLowerCase());

// Maaaas cuidado para não utilizar mais HOFs que o necessário
const birdNames = birds.map(element => element.Name.toLowerCase());

// O array antigo não foi alterado e temos um novo array, birdNames:
console.log('antigo array:', birds);
console.log('novo array:', birdNames);

