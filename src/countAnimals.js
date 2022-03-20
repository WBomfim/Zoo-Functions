const { species } = require('../data/zoo_data');

const countAnimalsAll = () => species.reduce((objectAnimals, { name, residents }) => {
  const object = objectAnimals;
  object[name] = residents.length;
  return objectAnimals;
}, {});

function countAnimals(animal) {
  if (!animal) return countAnimalsAll();
  const animalsResident = species.find(({ name }) => name === animal.specie).residents;
  if (!animal.sex) return animalsResident.length;
  return animalsResident.filter(({ sex }) => sex === animal.sex).length;
}

module.exports = countAnimals;
