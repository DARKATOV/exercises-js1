
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

console.log( "Las edades que pueden conducir " + yes );
console.log( "Las edades que no pueden conducir " + no);
