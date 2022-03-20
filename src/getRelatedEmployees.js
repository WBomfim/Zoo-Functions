const { employees } = require('../data/zoo_data');

function isManager(employeeId) {
  return employees.some(({ managers }) => managers.includes(employeeId));
}

function getRelatedEmployees(employeeId) {
  if (isManager(employeeId)) {
    return employees.filter(({ managers }) => managers.includes(employeeId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
