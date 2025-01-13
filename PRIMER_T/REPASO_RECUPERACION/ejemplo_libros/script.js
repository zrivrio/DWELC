// MOSTRAR DINAMICAMENTE LOS FILTROS
function mostrarPais(){
    const selectPais = document.querySelector("#pais_publi");
    annadirOptions(filtros.countries, selectPais);
}

function mostrarAnno(){
    const selectY_I = document.querySelector("#fecha_i");
    const selectY_F = document.querySelector("#fecha_f");

    annadirOptions(filtros.years, selectY_I);
    annadirOptions(filtros.years, selectY_F);


}

function mostraGeneros(){
    const divCheckboxF = document.querySelector(".checkboxF");
    filtros.genres.sort();
    filtros.genres.forEach( genero => {
        const divContenedor = document.createElement("div");
        divContenedor.innerHTML = `
            <label for="${genero}">${genero}</label>
            <input type="checkbox" id="${genero}" name="${genero}">
        `;
        divCheckboxF.appendChild(divContenedor);
    })
}

function annadirOptions(tipo, select){
    //Para que funcione se debe crear el option en cada iteracion
    tipo.forEach(filtro => {
        const optionA = document.createElement("option");
        optionA.value = filtro;
        optionA.innerHTML = filtro;
        select.appendChild(optionA);
    })

}

// MOSTRAR NUEMRO DE LIBROS
function mostrarNumeroL(cantidad) {
    const pLibrosN = document.querySelector("#numLibros");
    pLibrosN.innerHTML = cantidad;
}

//MOSTRAR LOS LIBROS
function mostrarLibros(){
    //Se utiliza length para mostrar la longitud de una array
    mostrarNumeroL(lista_libros.length);

    const divContendor = document.querySelector("#librosMostrar");

    lista_libros.forEach(libro => {
        const divLibro = document.createElement("div");
        divLibro.innerHTML = `
        <p>${libro.title}</p>
        <p>${libro.author}</p>
        <p>${libro.year}</p>
        <p>${libro.country}</p>
        <p>${libro.genre}</p>
        <button id="verDetalle">Ver Detalles</button>`;

        divContendor.appendChild(divLibro);

        const preDiv = document.createElement("div");
        preDiv.innerHTML=`
        
        `;

    });

}


window.onload = () => {
    mostrarPais();
    mostrarAnno();
    mostraGeneros();
    mostrarLibros();
}