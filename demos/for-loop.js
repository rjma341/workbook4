"use strict";

//1. code that executes before the loop begins *7
//2. a condition that must be true for the loop to keep executing *9
//3. code that runs at the bottom of each iteration *11 

let count = 1;

while (count <= 100) {
  console.log("hi" + count);
  count = count + 1;
}

//
for (let count = 0; count <=100; count+1){
    console.log("hi" + count);
}