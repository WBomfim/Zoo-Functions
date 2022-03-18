const data = require('../data/zoo_data');

const { species } = data;

const createObjectLocales = () => {
  const filterAnimal = {};

  species.forEach((animal) => {
    filterAnimal[animal.location] = [];
  });
  return filterAnimal;
};

const includeNamesFalse = (object) => {
  Object.keys(object).forEach((key) => species.forEach((animal) => {
    if (animal.location === key) {
      object[key].push(animal.name);
    }
  }));

  return object;
};

const includeNamesTrue = (object) => {
  Object.keys(object).forEach((key) => species.forEach((animal) => {
    const animalNames = {};
    if (animal.location === key) {
      animalNames[animal.name] = animal.residents.map((resident) => resident.name);
      object[key].push(animalNames);
    }
  }));

  return object;
};

const includeNamesTrueSorted = (object) => {
  Object.keys(object).forEach((key) => species.forEach((animal) => {
    const animalNames = {};
    if (animal.location === key) {
      animalNames[animal.name] = animal.residents.map((resident) => resident.name).sort();
      object[key].push(animalNames);
    }
  }));

  return object;
};

const includeNamesTrueSex = (object) => {
  Object.keys(object).forEach((key) => species.forEach((animal) => {
    const animalNames = {};
    if (animal.location === key) {
      animalNames[animal.name] = animal.residents.filter((resident) =>
        resident.sex === 'female').map((residentsCurr) => residentsCurr.name);
      object[key].push(animalNames);
    }
  }));

  return object;
};

const includeNamesTrueSortedSex = (object) => {
  Object.keys(object).forEach((key) => species.forEach((animal) => {
    const animalNames = {};
    if (animal.location === key) {
      animalNames[animal.name] = animal.residents.filter((resident) =>
        resident.sex === 'female').map((residentsCurr) => residentsCurr.name).sort();
      object[key].push(animalNames);
    }
  }));

  return object;
};

function getAnimalMap(options) {
  const filterAnimal = createObjectLocales();

  if (!options || options.includeNames === undefined) {
    includeNamesFalse(filterAnimal);
  }
  return filterAnimal;
}

module.exports = getAnimalMap;

console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
console.log(includeNamesTrue());
console.log(includeNamesTrueSorted());
console.log(includeNamesTrueSex());
console.log(includeNamesTrueSortedSex());
