const { species, hours } = require('../data/zoo_data');

const dayData = (day) => species.reduce((objectDay, { name, availability }) => {
  const object = objectDay;
  if (availability.includes(day)) {
    object.officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    object.exhibition.push(name);
  }
  if (hours[day].open === 0 && hours[day].close === 0) {
    object.officeHour = 'CLOSED';
    object.exhibition = 'The zoo will be closed!';
  }
  return objectDay;
}, { officeHour: '', exhibition: [] });

function getSchedule(scheduleTarget) {
  if (species.some(({ name }) => name === scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  return Object.keys(hours).reduce((objectBase, day) => {
    const object = objectBase;
    if (!scheduleTarget || !Object.keys(hours).includes(scheduleTarget)) {
      object[day] = dayData(day);
      return object;
    }
    object[scheduleTarget] = dayData(scheduleTarget);
    return objectBase;
  }, {});
}

module.exports = getSchedule;
