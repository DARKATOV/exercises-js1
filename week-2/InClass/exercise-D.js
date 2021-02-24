function sense(feelings) {
    if (feelings === "happy") {
    return `Good job, you're doing great!`;
    }
    
    else if (feelings === "sad") {
        return `Every cloud has a silver lining`;
    }
    
    else if (typeof feelings === "number") {
        return `Beep beep boop`;
    }

    else if (typeof feelings === "string") {
        return `I'm sorry, I'm still learning about feelings!`;
    }

    }
  
    console.log(sense("#"));


//Tener un parámetro de entrada
//● Retornar "Good job, you're doing great!" si el parámetro es igual a "happy"
//● Retornar "Every cloud has a silver lining" si el parámetro es igual a "sad"
//● Retornar "Beep beep boop" si el parámetro es un número
//● Retornar "I'm sorry, I'm still learning about feelings!" si el parámetro es cualquier
//otra cosa
