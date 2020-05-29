// ES6 - Features -> Destructuring (Object / Array e Default)

// --------------------- Problema --------------------------- // 
// Crie uma funcao que receba um objeto representando um animal e retorne sua massa
const assert = require('assert');

const lion = {
    name: 'Panthera leo',
    commonName: 'Lion',
    weightRange: {
        min: 186.55,
        max: 225,
        measurementUnit: 'kg'
    }
};

const blueWhale = {
    name: 'Balaenoptera musculus',
    commonName: 'Blue whale',
    weightRange: {
        min: 45,
        max: 173,
        measurementUnit: 't'
    }
};

const polarBear = {
    name: 'Ursus maritimus',
    commonName: 'Polar Bear',
    weightRange: {
        min: 350,
        max: 700
    }
};

assert.strictEqual(
    animalDescription(lion),
    'Lion (Panthera leo) weighs around 186.55-225 kg'
);
assert.strictEqual(
    animalDescription(blueWhale),
    'Blue whale (Balaenoptera musculus) weighs around 45-173'
);
assert.strictEqual(
    animalDescription(polarBear),
    'Polar Bear (Ursus maritimus) weighs around 350-700 kg'
);

// Sem default destructuring

const animalDescription = ({ name, commonName, weightRange }) => {
    const measurementUnit = weightRange.measurementUnit || 'kg';
    const { min, max } = weightRange
    return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`;
};

// Com default destructuring

const animalDescription = ({ name, commonName, weightRange }) => {
    const { min, max, measurementUnit = 'kg' } = weightRange;
    return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`
};

// Retrorando com object destruturing ainda

const animalDescription = ({ name, commonName, weightRange: { min, max, measurementUnit = 'kg' } }) =>
  `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`;