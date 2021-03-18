/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];
let groupIsOnlyStudents = group.every(studentsOnly);// complete this statement

function studentsOnly(people){

  return students.indexOf(people) !== -1 ; //  -1 por la propiedad de la funcion indexOf
}

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
