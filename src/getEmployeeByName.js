const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employee) => Object.values(employee).includes(employeeName));
}

module.exports = getEmployeeByName;
