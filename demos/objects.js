"use strict";
//object
let person = {
  first: "Shawn",
  middle: "Corey",
  last: "Carter",
  age: 54,
  stageName: "Jay-Z",
  netWorthInBillions: 2.5,
};

console.log(person.middle); //dot notation

//pass an object as a function parameter
function printPerson(person) {
  console.log(person);
}

// printPerson(person);
//return an object from a function
function createWife(params) {
  let person = { first: "Beyonce", last: "Knowles" };
  return person;
}
//catch the return value in a variable  
// let spouse = createPerson();
console.log(spouse);