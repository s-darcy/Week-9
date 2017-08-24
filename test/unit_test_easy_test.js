//Easy: Create the tests below for a function that will take in two integer parameters.
//• Write a test that will verify that the function returns the two integers multiplied together.
//• Write a test that will verify that the function returns false if invalid parameters are passed in.
//• Write a function that will make these tests succeed.

var expect = require('chai').expect;

describe('multipliedIntegers', function(){
    var integers = require('../functions/functions.js').integers;
    
    it('returns the two integers multiplied together', function(){
        expect(integers(2,3)).to.be.equal(6);   
   });
    it('', function(){
        expect(integers % 1).to.be.equal(0);
    });
});

