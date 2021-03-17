/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  arr=arr[0];
  return arr; // complete this statement
}

function last(rarr){
  var varr = rarr[0]; 
  type= typeof varr;

  if (type = String) {
  var f = rarr[2];
  return f; // complete this statement
}
  return rarr[2]; // complete this statement
}

// function first(arr) {
//   varr = arr[1]
//   if ( typeof varr= Number ) {
//     return arr[2]; // complete this statement
//   }
//   return arr[3]; // complete this statement


// }





/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/



