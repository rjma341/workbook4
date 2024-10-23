"use strict";

let family = ["Spongebob", "Patrick", "Sandy", "Plankton"];

for (let i = 0; i < family.length; i++) {
  console.log(family[i]);
}

// average of an array to then be printed into two
//separate messages
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  //return is like console.log/gives the answer
  return sum / scores.length;
}
let myAverage = getAverage(myScores);

let yourAverage = getAverage(yourScores);

console.log("My average score was " + myAverage.toFixed(2))
console.log("Your average score was " + yourAverage.toFixed(2))