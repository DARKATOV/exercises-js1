function secondMatchesAmy (result) {
  if ( names[1] === "Amy" ) {
    return "Second index matched!";
  }
  
  else {return "Second index not matched";
  }

  }

function secondMatchesAmy2 (result2) {
  if ( names2[1] === "Amy" ) {
    return "Second index matched!";
  }
  else {
  return "Second index not matched";
  }
}


let names = ["Alex", "Amara", "Carlos"];
let names2 = ["Ali", "Amy", "Naresh"];

const result = secondMatchesAmy(names);
const result2 = secondMatchesAmy2(names2);

console.log(result);
console.log(result2);