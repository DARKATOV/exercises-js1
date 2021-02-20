//funcion del ejercicio 


function formulario(nombre, apellido, altura, peso) 
{
    var indice = (peso / (altura * altura));
    const resultado = "Hola un placer poder ayudarte " + nombre +" "+ apellido + ", tu indice de masa corporal segun tus datos es de " + indice;
    return resultado;
}
 
console.log(formulario("Antonio" , "Perez" , 1.70 , 90)); 

///////////////////////////////////////////

function calculator(a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o)
{
    var total = a+b+c+d+e+f+g+h+i+j+k+l+m+n+ñ+o;
    return total
}

console.log(calculator(1,2,4,5,6,7,8,9,30,10,25,32,52,63,8,4));  // con  los datos de parametros completos



function calculator2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o)
{
    var total = a+b+c+d+e+f+g+h+i+j+k+l+m+n+ñ+o;
    return total3
}

console.log(calculator(1,2,4,5,6,7,8,9,30,10,25,32,4));     // sin los datos de parametros completos resultado NaN



// otros ejercicios practica 


function saludonombre(name, saludo) {
const final = saludo + name;
return final;
}
console.log(saludonombre("Antonio", "Mi nombre es "));




function saludonombre1(name1, saludo1) {
    const final1 = saludo1 + name1;
    const final2 = saludo1 * name1;
    return final2;
    }
    console.log(saludonombre("Antonio", "Mi nombre es "));
    

function resta(a,b) {
    const final3 = a-b;
    let final4 = b*a;
    return final4;
    }
    console.log(saludonombre(20,10));




function saludar (nombre){
    return "HOla " + nombre;

}

console.log(saludar("Jose"));
console.log(saludar("Maria"));



function saludar1 (nombre1, saludo1){
    return saludo1 + nombre1;
}

console.log(saludar1("Jose" , "hola como estas "));
console.log(saludar1("Maria" , "que linda estas " ));
        
        