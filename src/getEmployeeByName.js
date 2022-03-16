const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (employeeName !== undefined) {
    return employees.find((employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName);
  }
  return {};
}

module.exports = getEmployeeByName;
