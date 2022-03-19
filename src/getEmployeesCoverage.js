const data = require('../data/zoo_data');

const { employees, species } = data;

const getAnimal = (employeeId) =>
  employees.find((employee) => employee.id === employeeId).responsibleFor
    .map((specieId) => species.find((specie) => specie.id === specieId).name);

const getLocationOfAnimales = (speciesNames) =>
  speciesNames.map((specieName) => species
    .find((specie) => specie.name === specieName).location);

const employeeDataGenerator = (employeeIdentification) =>
  employees.reduce((objectData, employee) => {
    const object = objectData;
    if (Object.values(employee).includes(employeeIdentification)) {
      object.id = employee.id;
      object.fullName = `${employee.firstName} ${employee.lastName}`;
      object.species = getAnimal(employee.id);
      object.locations = getLocationOfAnimales(getAnimal(employee.id));
    }
    return objectData;
  }, {});

const checkIdentification = (employeeIdentification) => {
  const identifocation = Object.values(employeeIdentification)[0];
  return employees.some((employee) => Object.values(employee).includes(identifocation));
};

function getEmployeesCoverage(employeeIdentification) {
  if (!employeeIdentification) {
    return employees.reduce((employeesData, employee) => {
      employeesData.push(employeeDataGenerator(employee.id));
      return employeesData;
    }, []);
  }
  if (checkIdentification(employeeIdentification)) {
    const identifocation = Object.values(employeeIdentification)[0];
    return employeeDataGenerator(identifocation);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
