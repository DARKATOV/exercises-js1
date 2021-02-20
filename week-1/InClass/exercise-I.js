function año(edad)
{
    return (2021-edad);
}

function datos(nombre,edad) {
    let añonacimiento = año(edad)
    return "Hola "+nombre+" es un placer ayudarte. El año de nacimiento de la edad introducida es "+añonacimiento;
}

console.log(datos("Antonio",26));
console.log(datos("Juan",28));


//un truco

//console.log(`tu año de nacimiento es: ${añonacimiento(28)}`); 

//directo es lo ma sutilizado hoy en dia 