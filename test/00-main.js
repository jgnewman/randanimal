import assert from 'assert';
import foo from '../bin/index';

describe('Basic Functionality', function () {

  it('should work', function () {
    assert.equal(foo, 'foo');
  })

})
