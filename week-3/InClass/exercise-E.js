// Ejercicio E (10 minutos)
// ● Crear una función que tome como parámetro un año de nacimiento birthYear, y retorne la
// edad en años
// ● Dado un arreglo con los años de nacimiento de 7 personas [1964, 2008, 1999, 2005, 1978,
// 1985, 1919], crea otro arreglo que contenga las edades de esas personas.
// ● Imprimir el arreglo resultando



// let years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

// function birthYear(years) {
//     newyear = years-2021;
//     return console.log (newyears);
// }


///////////////////////


// let years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
// for (let i= 0; i < years.length; i++) {
//     year= 2021 - years[i];
//     years[i]=year;
// }
// console.log(years)

/////////////           con map 

// let birthyears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

// function ageCheck (birthyears) {
//     return 2021 - birthyears
// }

// let ages = (birthyears.map(ageCheck));

// console.log(ages);


/////////////


let birthyear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function ageCheck(birthyear) {
    return 2021 - birthyear; 
}

birthyear.forEach(birthyear => {
    let age = ageCheck(birthyear);
    ages = age.push(age);
});

console.log(ages);





