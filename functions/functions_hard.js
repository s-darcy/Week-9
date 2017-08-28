//Hard: Create the tests below for a function that will take in an object of N people. Each person will have a string age property and a string location property.  The function will return an entire original object with each person’s age + 5 years. Note that the properties should be returned as a string since they were passed in as a string.
//• Write a test that will verify that the function returns an object with a single person’s age modified correctly.
//• Write a test that will verify that the function returns an object with 5 people with their ages modified correctly.
//• Write a test that will verify that the function returns false if an invalid parameter is passed in.
//• Write a function that will make these tests succeed.

//
//var triangle = {a: 1, b: 2, c: 3};
//
//function ColoredTriangle() {
//  this.color = 'red';
//}
//
//ColoredTriangle.prototype = triangle;
//
//var obj = new ColoredTriangle();
//
//for (var prop in obj) {
//  if (obj.hasOwnProperty(prop)) {
//    console.log(`obj.${prop} = ${obj[prop]}`);
//  } 
//}

// Output:
// "obj.color = red"

for (var {name: n, characteristics : {Age : a, Location : l}} of people){
    return ('name: ' + n + { 'Age: ' + (a + 5) + 'Location: ' + l });
}



var person = {
    Age : 'string' + 5,
    Location: 'place'
};

module.exports.person = person;