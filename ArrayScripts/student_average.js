"use strict";

let students = [
  { name: "Tim", scores: [100, 96, 99, 22] },
  { name: "Yuri", scores: [99, 99, 100, 98] },
  { name: "Rick", scores: [100, 100, 100, 100] },
];

for (let i = 0; i < students.length; i++) {
  let student = students[i];
  let scores = student.scores;
  let totalScores = 0;

  for (let i = 0; i < scores.length; i++) {
    totalScores += scores[i];
  }

  let average = totalScores / scores.length;
  console.log(average);
}
