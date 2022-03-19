const data = require('../data/zoo_data');

const { species, hours } = data;

const dayData = (day) => species.reduce((objectDay, specie) => {
  const object = objectDay;
  if (specie.availability.includes(day)) {
    object.officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    object.exhibition.push(specie.name);
  } else if (hours[day].open === 0 && hours[day].close === 0) {
    object.officeHour = 'CLOSED';
    object.exhibition = 'The zoo will be closed!';
  }
  return objectDay;
}, { officeHour: '', exhibition: [] });

function getSchedule(scheduleTarget) {
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  return Object.keys(hours).reduce((object, day) => {
    const objectBase = object;
    if (!scheduleTarget || !Object.keys(hours).includes(scheduleTarget)) {
      objectBase[day] = dayData(day);
      return object;
    }
    objectBase[scheduleTarget] = dayData(scheduleTarget);
    return object;
  }, {});
}

module.exports = getSchedule;
