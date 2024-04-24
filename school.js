let school = require('./object');

// Problem 10 - countCalculation //
function countCalculation(school) {
  let {
    departments: {
      math: { teachers: mathTeachersCount, students: mathStudentsCount },
      history: { teachers: historyTeachersCount, students: historyStudentsCount },
    },
  } = school;
  return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
}
console.log(countCalculation(school));

// Problem 11 - findTopStudent //
function findTopStudent(school, courseName) {
  let { students } = school;
  let topStudent = students[0];
  students.forEach((student) => {
    if (student.scores[courseName] > topStudent.scores[courseName]) {
      topStudent = student;
    }
  });
  return topStudent;
}
console.log(findTopStudent(school, 'math'));

// Problem 12 - addNewDept
function addNewDept(school, newDeparts) {
  let  updatedDeparts = { ...school.departs, ...newDeparts };
  return { ...school, departments: updatedDeparts };
}
const newDeparts = { art: { teachers: 2, students: 50 } };
console.log(addNewDept(school, newDeparts));


// Problem 14 -Greeting Message //
function generateGreeting(name = "", language = "English") {
  const greetings = {
    English: "Hello",
    Spanish: "¡Hola",
    French: "Bonjour",
  };
  
  const greeting = greetings[language] || greetings.English;
  return `${greeting}, ${name}!`;
}
console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"
console.log(generateGreeting("David")); // Output: "Hello, David!" (Default language used)

// // Problem 13 - highestStudentCountDepartment //
// const departmentWithHighestCount = highestStudentCountDepartment(school);
// const result =documents.getElementById('result');
// result.textContent = `The department with the highest student count is: ${departmentWithHighestCount}`;

// function highestStudentCountDepartment(school) {
//   let highestCountDepartment = null;
//   let highestStudentCount = 0;

//   for (const departmentName in school) {
//     const studentCount = school[departmentName].length;

//     if (studentCount > highestStudentCount) {
//       highestStudentCount = studentCount;
//       highestCountDepartment = departmentName;
//     }
//   }
//   return highestCountDepartment;
// }
// console.log(highestStudentCountDepartment(school));//math





