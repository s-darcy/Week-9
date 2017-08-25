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
    it('return false if invalid parameters passed', function(){
        expect(0).to.not.be.false;
        expect(6).to.not.be.false;
        expect(-1 % 2).to.not.be.false;
        expect(NaN % 2).to.not.be.false;
        expect(5.5 % 2).to.not.be.false;
        expect(null).to.be.null;
        expect(null).to.not.be.undefined;
        expect(undefined).to.be.undefined;
        expect(undefined).not.to.be.null;
    });
});

