const { assert } = require('chai');
const factorialize = require('../app');

const { describe, it } = require('mocha');

describe('first module', () => {
    it('first test', () => {
        let result = factorialize(1);
        assert.equal(result, 1);
    });
    it('second test', () => {
        let result = factorialize(1);
        assert.equal(result, 1);
    });
    it('thirdtest', () => {
        let result = factorialize(2);
        assert.equal(result, 2);
    });
    it('thirdtest', () => {
        let result = factorialize(0);
        assert.equal(result, 1);
    });
});


