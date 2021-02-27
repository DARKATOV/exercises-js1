
  function exponential(number) {
    return number * number;
  }

  function isEven(number) {
    return number % 2 === 0;
  }

  for (let number = 5; number <= 20; number += 1) {

    if (isEven(number) === 0) {
      console.log( `The exponencial of ${number} is ${exponential(number)}`);
    }
  }




//el operador porcentaje es el operador de modulo 


for (let i=0; i<100; i++) {
  console.log(i)
}

// contador hasta el 100 

const daysOfWeek = [ "Monday","tuesday","Wednesday","thursday", "friday" , "saturday", "sunday"];

for ( let i=0; i < daysOfWeek.length; i++) { 
  
  console.log(daysOfWeek[i])
  console.log(" el index es", i)

}

