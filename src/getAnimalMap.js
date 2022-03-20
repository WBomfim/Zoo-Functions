const { species } = require('../data/zoo_data');

const createObjectBase = () => species.reduce((objectLocale, { location }) => {
  const object = objectLocale;
  object[location] = [];
  return objectLocale;
}, {});

const notIncludeNames = () => species.reduce((objectBase, { location, name }) => {
  if (Object.keys(createObjectBase()).includes(location)) {
    objectBase[location].push(name);
  }
  return objectBase;
}, createObjectBase());

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

const includeNames = (options) => species.reduce((objectBase, specie) => {
  const animalNames = {};
  if (Object.keys(createObjectBase()).includes(specie.location)) {
    animalNames[specie.name] = changedata(specie, options);
    objectBase[specie.location].push(animalNames);
  }
  return objectBase;
}, createObjectBase());

function getAnimalMap(options) {
  if (!options || !options.includeNames) return notIncludeNames();
  return includeNames(options);
}

module.exports = getAnimalMap;
