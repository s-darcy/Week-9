//Hard: Create the tests below for a function that will take in an object of N people. Each person will have a string age property and a string location property.  The function will return an entire original object with each person’s age + 5 years. Note that the properties should be returned as a string since they were passed in as a string.
//• Write a test that will verify that the function returns an object with a single person’s age modified correctly.
//• Write a test that will verify that the function returns an object with 5 people with their ages modified correctly.
//• Write a test that will verify that the function returns false if an invalid parameter is passed in.
//• Write a function that will make these tests succeed.

var newAge;

var addFive = function (people) {
    if (!typeof people[key] == 'string'){
        return false;
    } else {
        for (var key in people) {
            newAge = ((parseFloat(people[key].Age) + 5).toString());
            people[key].Age = newAge;
            console.log("Person " + key + " is now " + newAge +"."); 
        }
        return people;
    }
};

module.exports.addFive = addFive;



