import adjectives from './adjectives';
import animals from './animals';

function randomItem(arr) {
  return arr[ Math.floor(Math.random() * arr.length) ]
}

function anyAreEqual(arr) {
  if (!arr.length) {
    return false;
  } else {
    const toCompare = arr[0];
    const compareWith = arr.slice(1);
    let   equal = false;
    compareWith.some(item => {
      if (item === toCompare) {
        equal = true;
        return true;
      }
    });
    if (equal) {
      return true;
    } else {
      return anyAreEqual(compareWith);
    }
  }
}

function randomName(num) {
  const an = randomItem(animals);
  const ads = [];

  if (!arguments.length) {
    num = 1;
  }

  for (let i = 0; i < num; i += 1) {
    ads.push(randomItem(adjectives))
  }

  if (!anyAreEqual(ads)) {
    const joined = ads.length > 1 ? ads.join(' ') : ads[0];
    return joined + ' ' + an;
  } else {
    return randomName(num);
  }
}

// Num represents how many adjectives to use
module.exports = exports = {
  randanimal: (...args) => new Promise(resolve => resolve(randomName(...args))),
  randanimalSync: (...args) => randomName(...args)
};
