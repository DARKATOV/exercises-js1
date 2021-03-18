/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here



let names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

let findLongNameThatStartsWithA = (names) => { 
  let result = names.find((name) => name.length > 7 && name[0] === 'A' );
  return result; 
}
console.log(findLongNameThatStartsWithA(names)); 

// function findLongNameThatStartsWithA(names) {
//  // iterar elementos, nombres que empiecen por A 
//  var longName = names.find(isLongName);
// }

//  return names.find(element.startWith('A') && element.length > 7);}
// console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
