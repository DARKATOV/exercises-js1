
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