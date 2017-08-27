//Medium: Create the tests below for a function that will take in a single object parameter with two properties, a string and a single character. 
//• Write a test that will verify that the function returns the first indice where that character is found in the string.
//• Write a test that will verify that the function returns false if the character is not found in the string.
//• Write a test that will verify that the function returns false if the parameter passed into the function is invalid.
//• Write a function that will make these tests succeed.


var expect = require('chai').expect;

describe('object parameter with two properties', function(){ 
    var thing = require('../functions/functions_medium.js');
    
    var newObject = Object.create(thing);
    newObject.str = 'green';
    newObject.singleCharacter = 'n';
    newObject.str.indexOf("n");
    
    it('returns first instance where this character is found in the string', function(){
        expect(newObject.str).to.include(newObject.singleCharacter);
        expect(newObject.str).to.not.include('y');
        expect(newObject.str.indexOf('n')).to.equal(4);
        expect(newObject.str.indexOf('n')).to.not.equal(5);
    });
});