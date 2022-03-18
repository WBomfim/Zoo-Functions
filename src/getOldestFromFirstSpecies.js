const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { employees, species } = data;
  return Object.values(species.find((animal) => animal.id === employees.find((employee) =>
    employee.id === id).responsibleFor[0]).residents.reduce((acc, curr) =>
    (acc.age < curr.age ? curr : acc)));
}

module.exports = getOldestFromFirstSpecies;
