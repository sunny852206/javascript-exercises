const findTheOldest = function (arr) {
  let old = arr.reduce((oldestPerson, currentPerson) => {
    let oldest = getBirth(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
    let current = getBirth(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );

    return oldest > current ? oldestPerson : currentPerson;
  });

  return old;
};

const getBirth = function (birthYear, deathYear) {
  if (!deathYear) {
    deathYear = new Date().getFullYear();
  }

  return deathYear - birthYear;
};

// Do not edit below this line
module.exports = findTheOldest;
