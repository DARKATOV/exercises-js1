/*
  Array properites
  ----------------
  Complete the function to test if an array is empty (has no values in it)

*/

function isEmpty(a) {
  a=a.length
  if (a>0){
    return false;
  }
  return true; 
  ; // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = [];

console.log(isEmpty(numbers));
console.log(isEmpty(names));

/* 
  EXPECTED RESULT
  ---------------
  false
  true
*/
