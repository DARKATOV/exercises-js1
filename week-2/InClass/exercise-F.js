
const typeofuser = [ "admin", "editor", "writer", "client", "manager"]
const names = [ "Antonio", "pepepepepepepepepe", "Ricardo", "452365"]
for ( let i=0; i < typeofuser.length; i++) 
{ 
    let type= typeofuser[i];
    if (type= "admin" || "manager") {
        for ( let x=0; x < names.length; x++) { 
        let vocal = names[x];
        if (vocal[0] != ( "a" || "e" || "i" || "o" || "u" ))
        {
        console.log("Valid");
        }
    }
}
    else {console.log("Invalid");} 
}
