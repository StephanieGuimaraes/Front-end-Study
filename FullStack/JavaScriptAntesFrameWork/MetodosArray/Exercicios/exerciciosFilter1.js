/* You are given an array of students with their names and scores in a test. 
Write a function that uses the filter() method to return only the students who scored 60 
or higher (passing score). */

const students = [
    { name: "Alice", score: 58 },
    { name: "Bob", score: 76 },
    { name: "Charlie", score: 45 },
    { name: "Diana", score: 90 },
    { name: "Edward", score: 61 },
  ];

const MMStudents = students.filter((student)=>student.score >= 60)
console.log(MMStudents)