const data = require('../data/zoo_data');

const { species } = data;

const createObjectLocales = () => {
  const filterAnimal = {};
  species.forEach((animal) => {
    filterAnimal[animal.location] = [];
  });
  return filterAnimal;
};

const notIncludeNames = (object) => {
  Object.keys(object).forEach((key) => species.forEach((animal) => {
    if (animal.location === key) {
      object[key].push(animal.name);
    }
  }));
  return object;
};

const sortedData = (animal, options) => {
  if (options.sex === undefined && options.sorted === true) {
    return animal.residents.map((resident) => resident.name).sort();
  }
  return animal.residents.filter((resident) =>
    resident.sex === options.sex).map((residentsCurr) => residentsCurr.name).sort();
};

const changedata = (animal, options) => {
  if (options.sex === undefined && options.sorted === undefined) {
    return animal.residents.map((resident) => resident.name);
  }

  if (options.sex !== undefined && options.sorted === undefined) {
    return animal.residents.filter((resident) =>
      resident.sex === options.sex).map((residentsCurr) => residentsCurr.name);
  }
  return sortedData(animal, options);
};

const includeNames = (object, options) => {
  Object.keys(object).forEach((key) => species.forEach((animal) => {
    const animalNames = {};
    if (animal.location === key) {
      animalNames[animal.name] = changedata(animal, options);
      object[key].push(animalNames);
    }
  }));
  return object;
};

function getAnimalMap(options) {
  const filterAnimal = createObjectLocales();
  if (!options || options.includeNames === undefined) {
    notIncludeNames(filterAnimal);
  } else {
    includeNames(filterAnimal, options);
  }
  return filterAnimal;
}

module.exports = getAnimalMap;
