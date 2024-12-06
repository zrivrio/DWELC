//Mostrar los paises

function MostrarPaises() {
    const CountySelect = document.querySelector("#CountySelect");

    annadirOptions(CountySelect, countries);

}

// Función para mostrar los años
function MostrarAnno() {
    const yearSelect1 = document.querySelector("#yearSelect1");
    const yearSelect2 = document.querySelector("#yearSelect2");

    const yearList = generarAnno(2000, new Date().getFullYear());  

    annadirOptions(yearSelect1, yearList);  
    annadirOptions(yearSelect2, yearList); 
}


// Función para agregar opciones a un select
function annadirOptions(selectElement, options) {
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.innerHTML = option;
        optionElement.value = option;
        selectElement.appendChild(optionElement);
    });
}

// Función para generar los años entre dos fechas
function generarAnno(yearStart, yearEnd) {
    let yearList = [];
    for (let year = yearStart; year <= yearEnd; year++) {
        yearList.push(year);
    }
    return yearList;
}

//Mostrar los generos
function MostrarGeneros() {
    const ContainerGenders = document.querySelector(".ContainerGenders");

    genders.sort((a, b) => a.localeCompare(b));

    genders.forEach(gender => {
        const genderDiv = document.createElement("div");
        genderDiv.classList.add("p-2");
        genderDiv.innerHTML = `
            <input type="checkbox" name="${gender}Check" id="${gender}Check">
            <label for="${gender}Check">${gender}</label>
        `;
        ContainerGenders.appendChild(genderDiv);
    });

}



function MostrarResults() {
    const nResults = document.querySelector(".nResults");

    nResults.innerHTML = `
    ${pelis.length} results
    `;
}

function MostrarPelicuas() {
    const ResultsDiv = document.querySelector(".results");
    const StyleDiv = ["border", "border-1", "border-dark"];

    pelis.forEach(pelicula => {
        const peliculaDiv = document.createElement("div");
        peliculaDiv.classList.add(...StyleDiv);

        const generosContainer = document.createElement("div");
        generosContainer.classList.add("d-flex");

        const listaGeneros = pelicula.Genre.split(",");
        listaGeneros.forEach(genero => {
            const generoP = document.createElement("p");
            generoP.classList.add("p-2", "mr-3", "border", "rounded-pill", "bg-primary");
            generoP.textContent = genero.trim();
            generosContainer.appendChild(generoP);
        });

        peliculaDiv.innerHTML = `
            <h2>${pelicula.Title}</h2>
            <div class="card">
                <img src="${pelicula.Images[0]}" class="img-thumbnail w-2" alt="imagen de la pelicula">
                <button class="details border border-1 border-dark">Details</button>
            </div>
        `;

        const preDiv = document.createElement("div");
        preDiv.innerHTML = `
            <input type="submit" name="cerrar" class="cerrar" value="X">
            <div>
                <input type="text" name="ranking" id="ranking">
                <input type="submit" name="cambio" id="cambio" value="Change">
            </div>
            <pre> ${JSON.stringify(pelicula, null, 2)}</pre>
            <div id="update-history"></div>
        `;

        const detailsButton = peliculaDiv.querySelector(".details");
        detailsButton.addEventListener("click", function () {
            peliculaDiv.classList.add("bg-secondary")
            if (!peliculaDiv.contains(preDiv)) {
                peliculaDiv.appendChild(preDiv);

                const cerrarButtom = preDiv.querySelector(".cerrar");
                cerrarButtom.addEventListener("click", function () {
                peliculaDiv.classList.remove("bg-secondary")
                    peliculaDiv.removeChild(preDiv);
                });
            }
        });

        const rankingInput = preDiv.querySelector("#ranking");
        const cambioButton = preDiv.querySelector("#cambio");
        const updateHistory = preDiv.querySelector("#update-history");

        cambioButton.addEventListener("click", function () {
            const updateRanking = parseFloat(rankingInput.value);

            if (!isNaN(updateRanking) && updateRanking >= 0 && updateRanking <= 10) {
                pelicula.imdbRating = updateRanking.toString();  
                const fecha = new Date();
                const pUpdate = document.createElement("p");

                pUpdate.innerHTML = `"update": "${fecha.toLocaleString()}"`
                updateHistory.appendChild(pUpdate);

                preDiv.querySelector("pre").textContent = JSON.stringify(pelicula, null, 2);
            }
        });

        peliculaDiv.appendChild(generosContainer);
        ResultsDiv.appendChild(peliculaDiv);
    });
}






//Funciones botones
function MarcarCheck() {
    const AllCheck = document.querySelector("#AllCheck");
    genders.forEach(gender => {
        const checkbox = document.querySelector(`#${gender}Check`);
        if (checkbox) {
            checkbox.checked = AllCheck.checked;
        }
    });
    genders.forEach(gender => {
        const checkbox = document.querySelector(`#${gender}Check`);
        if (checkbox.checked) {
            checkbox.unchecked = AllCheck.unchecked;
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#AllCheck").addEventListener("click", MarcarCheck);
});

function filterMovies() {
    const busqueda = document.querySelector("#Busqueda").value.trim().toLowerCase();
    pelis.filter(pelicula => {
        let match = "";
        if (titleCheck.checked && pelicula.Title.toLowerCase().includes(busqueda)) {
            match = Title;
        }
        if (directorCheck.checked && pelicula.Director.toLowerCase().includes(busqueda)) {
            match = Director;
        }
        if (actorsCheck.checked && pelicula.Actors.some(actor => actor.toLowerCase().includes(busqueda))) {
            match = Actors;
        }
        if (!titleCheck.checked && !directorCheck.checked && !actorsCheck.checked) {
            match = "";
        }

        return match;
    });
}


function OnloadPage() {
    MostrarPaises();
    MostrarGeneros();
    MostrarAnno();
   MostrarResults();
   MostrarPelicuas();
}

window.onload = OnloadPage;


