const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(specieName, age) {
  return species.find((specie) => specie.name === specieName).residents
    .every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
