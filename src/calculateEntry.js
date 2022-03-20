const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((objectEntrants, { age }) => {
    const object = objectEntrants;
    if (age >= 18 && age < 50) object.adult += 1;
    if (age < 18) object.child += 1;
    if (age >= 50) object.senior += 1;
    return objectEntrants;
  }, { adult: 0, child: 0, senior: 0 });
}

function calculateEntry(entrants) {
  let totalCharget = 0;
  if (!Array.isArray(entrants)) return 0;
  const visitorsAgeGroup = countEntrants(entrants);
  Object.keys(prices).forEach((ageGroup) => {
    if (Object.keys(visitorsAgeGroup).includes(ageGroup)) {
      totalCharget += prices[ageGroup] * visitorsAgeGroup[ageGroup];
    }
  });
  return totalCharget;
}

module.exports = { calculateEntry, countEntrants };
