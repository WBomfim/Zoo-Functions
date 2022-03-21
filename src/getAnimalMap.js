const { species } = require('../data/zoo_data');

const createObjectBase = () => species.reduce((objectLocale, { location }) => {
  const object = objectLocale;
  object[location] = [];
  return objectLocale;
}, {});

const createData = ({ residents }, options) => {
  if (!options.sex) {
    return residents.map(({ name }) => name);
  }
  return residents.filter(({ sex }) => sex === options.sex)
    .map(({ name }) => name);
};

const includeNames = (options) => species.reduce((objectBase, specie) => {
  const animalNames = {};
  if (!options.sorted) {
    animalNames[specie.name] = createData(specie, options);
  } else {
    animalNames[specie.name] = createData(specie, options).sort();
  }
  objectBase[specie.location].push(animalNames);
  return objectBase;
}, createObjectBase());

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return species.reduce((objectBase, { location, name }) => {
      objectBase[location].push(name);
      return objectBase;
    }, createObjectBase());
  }
  return includeNames(options);
}

module.exports = getAnimalMap;
