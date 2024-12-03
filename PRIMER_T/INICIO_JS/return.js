function sendEmail (nombre, edad, mensaje, email){
    if (!nombre||!edad||!mensaje||!email) {
        return null;
    }

    //if simplificad -- se utiliza el dolar llave para simplificar el if la primera parte es concatenacion la seguanda parte es la parte del resultado del if
    let status = `${nombre} ${ parseInt(edad) >= 18 ? "es valido" : "no es valido" }`; 

     // las comillas invertidas se utilizan en el caso literal
    return `A user has posted a comment from the website: 
                name: ${nombre}
                age: ${edad}
                comments: ${mensaje}`;
}

console.log(sendEmail("zahira", 16, "hola", "zahira@rivasrios.com"));


