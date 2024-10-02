function sendEmail (nombre, edad, mensaje, email){
    if (!nombre||!edad||!mensaje||!email) {
        return null;
    }

    const status = parseInt(edad) >= 18
        ? `${nombre} is a valid user (${email})`
        : `${nombre} is not a valid user (${email})`;
    return status;

    return `A user has posted a comment from the website: `
        + `name: ${nombre}, `
        + `age: ${edad}, `
        + `comments: ${mensaje}`;
}

console.log(sendEmail("andre", 16, "tu madre", "zahira@rivasrios.com"));


