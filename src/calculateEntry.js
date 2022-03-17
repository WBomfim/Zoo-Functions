const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    adult: entrants.filter((people) => people.age >= 18 && people.age < 50).length,
    child: entrants.filter((people) => people.age < 18).length,
    senior: entrants.filter((people) => people.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (Array.isArray(entrants) === false) {
    return 0;
  }

  const visits = countEntrants(entrants);
  const { prices } = data;
  const adultValue = prices.adult * visits.adult;
  const childValue = prices.child * visits.child;
  const seniorValue = prices.senior * visits.senior;

  return adultValue + childValue + seniorValue;
}

module.exports = { calculateEntry, countEntrants };
