const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(employeeId) {
  return Object.values(species.find((specie) =>
    specie.id === employees.find(({ id }) => id === employeeId).responsibleFor[0]).residents
    .reduce((acc, curr) => (acc.age < curr.age ? curr : acc)));
}

module.exports = getOldestFromFirstSpecies;
