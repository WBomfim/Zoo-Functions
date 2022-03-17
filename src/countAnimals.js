const data = require('../data/zoo_data');

const { species } = data;

const countAnimalsAll = () => {
  const totalAnimals = {};
  species.forEach((animal) => {
    totalAnimals[animal.name] = animal.residents.length;
  });
  return totalAnimals;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return countAnimalsAll();
  }

  const specieAnimals = species.find((specie) => specie.name === animal.specie).residents;

  if (animal.sex !== undefined) {
    return specieAnimals.filter((specieAnimal) => specieAnimal.sex === animal.sex).length;
  }
  return specieAnimals.length;
}

module.exports = countAnimals;
