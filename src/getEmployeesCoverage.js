const { employees, species } = require('../data/zoo_data');

const getAnimal = (employeeId) =>
  employees.find(({ id }) => id === employeeId).responsibleFor
    .map((specieId) => species.find(({ id }) => id === specieId).name);

const getLocationOfAnimales = (speciesNames) =>
  speciesNames.map((specieName) => species.find(({ name }) => name === specieName).location);

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

const checkIdentification = (employeeIdentification) =>
  employees.some((employee) => Object.values(employee).includes(employeeIdentification));

function getEmployeesCoverage(employeeIdentification) {
  if (!employeeIdentification) {
    return employees.reduce((employeesData, { id }) => {
      employeesData.push(employeeDataGenerator(id));
      return employeesData;
    }, []);
  }
  const identification = Object.values(employeeIdentification)[0];
  if (checkIdentification(identification)) return employeeDataGenerator(identification);
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
