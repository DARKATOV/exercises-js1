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
