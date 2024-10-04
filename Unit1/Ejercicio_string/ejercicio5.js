function abreviacion(nombreApellido) {
    let nombre = '';
    let apellido = '';
    let partes = nombreApellido.split(" ");
   
    nombre= partes[0];

        for (let index = 0; index < partes.length; index++) {
            apellido = partes[1].charAt(0).toUpperCase() + ". ";
        }
        partes.array.forEach(i => {
        });



    console.log(nombre + ' ' + apellido + '.');
}

abreviacion("Zahira Rivas");