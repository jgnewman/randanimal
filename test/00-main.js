import assert from 'assert';
import adjectives from '../bin/adjectives';
import animals from '../bin/animals';
import { randanimal, randanimalSync } from '../bin/index';

describe('Basic Functionality', function () {

  it('should generate a random name synchronously', function () {
    let name = randanimalSync(1);
    name = name.split(' ');

    assert.equal(name.length, 2);
    assert.ok(adjectives.indexOf(name[0]) > -1);
    assert.ok(animals.indexOf(name[1]) > -1);
  });

  it('should generate a random name asynchronously', function (done) {
    randanimal(1)
    .then(name => {

      name = name.split(' ');

      assert.equal(name.length, 2);
      assert.ok(adjectives.indexOf(name[0]) > -1);
      assert.ok(animals.indexOf(name[1]) > -1);

      done();
    })
  });

  it('should generate a random name of chosen length', function () {
    let name = randanimalSync(3);
    name = name.split(' ');

    assert.equal(name.length, 4);
  });

  it('should implicitly generate a random name with 1 adjective', function () {
    let name = randanimalSync();
    name = name.split(' ');

    assert.equal(name.length, 2);
  });

})
