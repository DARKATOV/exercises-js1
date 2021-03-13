// La edad mínima de manejo en el Reino Unido es de 17 años.
// ● Escribe otra función que reciba el año de nacimiento birthYear y retorne el string Los
// nacidos en el año {birthYear} pueden manejar o Los nacidos en el año {birthYear} pueden manejar en {x}
// años
// ● Usa el arreglo de los años de nacimiento, [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ], para
// obtener un arreglo de strings que indiquen si estas personas pueden manejar
// ● Imprime el arreglo resultante

let birthyear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function ageCheck(birthyear) {
    return 2021 - birthyear; 
}

let yes = []; 
let no = []; 

birthyear.forEach( birthyear => {
    let age = ageCheck(birthyear);
    if ( age > 17) {
        yes.push(age);
    }
    else {
        no.push(age);
    }
});

console.log(no);

console.log( "Las edades que pueden conducir " + yes );
console.log( "Las edades que no pueden conducir " + no);

function falta(no){
    rest = 17 - no;
}



no.forEach( no =>{



});

console.log(falta(no));