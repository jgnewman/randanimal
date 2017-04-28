'use strict';

var _adjectives = require('./adjectives');

var _adjectives2 = _interopRequireDefault(_adjectives);

var _animals = require('./animals');

var _animals2 = _interopRequireDefault(_animals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function anyAreEqual(arr) {
  if (!arr.length) {
    return false;
  } else {
    var toCompare = arr[0];
    var compareWith = arr.slice(1);
    var equal = false;
    compareWith.some(function (item) {
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
  var an = randomItem(_animals2.default);
  var ads = [];

  if (!arguments.length) {
    num = 1;
  }

  for (var i = 0; i < num; i += 1) {
    ads.push(randomItem(_adjectives2.default));
  }

  if (!anyAreEqual(ads)) {
    var joined = ads.length > 1 ? ads.join(' ') : ads[0];
    return joined + ' ' + an;
  } else {
    return randomName(num);
  }
}

// Num represents how many adjectives to use
module.exports = exports = {
  randanimal: function randanimal() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve) {
      return resolve(randomName.apply(undefined, args));
    });
  },
  randanimalSync: function randanimalSync() {
    return randomName.apply(undefined, arguments);
  }
};