const {assert } = require('chai');
const  factorialize = require('../app');

const {describe,it} = require('mocha');

describe('first module', ()=>{
    it('first test',()=>{
        assert.equal(factorialize(3),6);

    });
});

