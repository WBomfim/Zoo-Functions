const data = require('../data/zoo_data');

const { species } = data;

const includeNamesFalse = () => {
  const filterAnimal = {};

  species.forEach((animal) => {
    filterAnimal[animal.location] = [];
  });

  Object.keys(filterAnimal).forEach((key) => species.forEach((animal) => {
    if (animal.location === key) {
      filterAnimal[key].push(animal.name);
    }
  }));

  return filterAnimal;
};

const includeNamesTrue = () => {
  const filterAnimal = {};

  species.forEach((animal) => {
    filterAnimal[animal.location] = [];
  });

  Object.keys(filterAnimal).forEach((key) => species.forEach((animal) => {
    const animalNames = {};
    if (animal.location === key) {
      animalNames[animal.name] = animal.residents.map((resident) => resident.name);
      filterAnimal[key].push(animalNames);
    }
  }));

  return filterAnimal;
};

const includeNamesTrueSorted = () => {
  const filterAnimal = {};

  species.forEach((animal) => {
    filterAnimal[animal.location] = [];
  });

  Object.keys(filterAnimal).forEach((key) => species.forEach((animal) => {
    const animalNames = {};
    if (animal.location === key) {
      animalNames[animal.name] = animal.residents.map((resident) => resident.name).sort();
      filterAnimal[key].push(animalNames);
    }
  }));

  return filterAnimal;
};

const includeNamesTrueSex = () => {
  const filterAnimal = {};

  species.forEach((animal) => {
    filterAnimal[animal.location] = [];
  });

  Object.keys(filterAnimal).forEach((key) => species.forEach((animal) => {
    const animalNames = {};
    if (animal.location === key) {
      animalNames[animal.name] = animal.residents.filter((resident) =>
        resident.sex === 'female').map((residentsCurr) => residentsCurr.name);
      filterAnimal[key].push(animalNames);
    }
    console.log(animalNames);
  }));

  return filterAnimal;
};

const includeNamesTrueSortedSex = () => {
  const filterAnimal = {};

  species.forEach((animal) => {
    filterAnimal[animal.location] = [];
  });

  Object.keys(filterAnimal).forEach((key) => species.forEach((animal) => {
    const animalNames = {};
    if (animal.location === key) {
      animalNames[animal.name] = animal.residents.filter((resident) =>
        resident.sex === 'female').map((residentsCurr) => residentsCurr.name).sort();
      filterAnimal[key].push(animalNames);
    }
    console.log(animalNames);
  }));

  return filterAnimal;
};

function getAnimalMap(options) {
  
}

module.exports = getAnimalMap;
