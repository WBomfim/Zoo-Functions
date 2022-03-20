const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(specieName, ageMin) {
  return species.find(({ name }) => name === specieName).residents
    .every(({ age }) => age >= ageMin);
}

module.exports = getAnimalsOlderThan;
