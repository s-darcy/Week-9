//Hard: Create the tests below for a function that will take in an object of N people. Each person will have a string age property and a string location property.  The function will return an entire original object with each person’s age + 5 years. Note that the properties should be returned as a string since they were passed in as a string.
//• Write a test that will verify that the function returns an object with a single person’s age modified correctly.
//• Write a test that will verify that the function returns an object with 5 people with their ages modified correctly.
//• Write a test that will verify that the function returns false if an invalid parameter is passed in.
//• Write a function that will make these tests succeed.

var expect = require('chai').expect;

describe("person with age property and location property", function(){ 
    var addFive = require('../functions/functions_hard.js').addFive;
    
    var before = {
        Chris : {
            Age: '26',
            Location: 'Charlotte'
        },
        Jonathan : {
            Age: '32',
            Location: 'Atlanta'
        },
        Bill : {
            Age: '65', 
            Location : 'New York'
        },
        Ron : {
            Age: '54', 
            Location : 'Boston'
        },
        Sarah : {
            Age: '5', 
            Location : 'Baltimore'
        }
    };
    
    var expected = {
        Chris : {
            Age: '31',
            Location: 'Charlotte'
        },
        Jonathan : {
            Age: '37',
            Location: 'Atlanta'
        },
        Bill : {
            Age: '70', 
            Location : 'New York'
        },
        Ron : {
            Age: '59', 
            Location : 'Boston'
        },
        Sarah : {
            Age: '10', 
            Location : 'Baltimore'
        }
    };
    
    var invalidParameter = {
        Oops : {
            Age : '',
            Location: 'San Francisco'
        }
    };
    
    it("returns 5 people's age modified correctly", function(){
        expect(addFive(before)).to.deep.equal(expected);
    });
    it("returns false due to invalid parameter", function(){
        expect(addFive(invalidParameter)).to.be.false;
    });
});
