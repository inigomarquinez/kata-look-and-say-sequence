const assert = require('assert');

const generateSequence = require('../generateSequence');

  describe('#indexOf()', () => {
    it('should return 1321123113 when number is 123 with lenght of 10', ()  => {
      assert.equal(generateSequence('123', 10), 1321123113)
    });

    it('should fail', ()  => {
      assert.notEqual(generateSequence('123', 10), 1)
    });
});