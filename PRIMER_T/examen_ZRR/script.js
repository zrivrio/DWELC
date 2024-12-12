// Funcion para filtrar
function filtrarPeliculas() {
    const busquedaTexto = obtenerTextoBusqueda();
    const selectedCountry = obtenerPaisSeleccionado();
    const selectedYear1 = obtenerAnioInicio();
    const selectedYear2 = obtenerAnioFin();
    const selectedGeneros = obtenerGenerosSeleccionados();
    const searchFilters = obtenerFiltrosBusqueda();

    const peliculasFiltradas = pelis.filter(pelicula => {
        const matchesBusqueda = filtrarPorBusqueda(pelicula, busquedaTexto, searchFilters);
        const matchesCountry = filtrarPorPais(pelicula, selectedCountry);
        const matchesYear = filtrarPorAnio(pelicula, selectedYear1, selectedYear2);
        const matchesGeneros = filtrarPorGeneros(pelicula, selectedGeneros);

        return matchesBusqueda && matchesCountry && matchesYear && matchesGeneros;
    });

    mostrarResultados(peliculasFiltradas);
}

// Función para obtener el texto de búsqueda
function obtenerTextoBusqueda() {
    return document.querySelector("#Busqueda").value.toLowerCase();
}

// Función para obtener el país seleccionado
function obtenerPaisSeleccionado() {
    return document.querySelector("#CountySelect").value;
}

// Función para obtener los años de inicio y fin seleccionados
function obtenerAnioInicio() {
    return parseInt(document.querySelector("#yearSelect1").value);
}

function obtenerAnioFin() {
    return parseInt(document.querySelector("#yearSelect2").value);
}

// Función para obtener los géneros seleccionados
function obtenerGenerosSeleccionados() {
    const selectedGeneros = [];
    document.querySelectorAll(".ContainerGenders input[type='checkbox']").forEach((checkbox) => {
        if (checkbox.checked && checkbox.id !== "AllCheck") {
            selectedGeneros.push(checkbox.id.replace('Check', ''));
        }
    });
    return selectedGeneros;
}

// Función para obtener los filtros de búsqueda (título, director, actores)
function obtenerFiltrosBusqueda() {
    return {
        title: document.querySelector("#TitleCheck").checked,
        director: document.querySelector("#DirectorChek").checked,
        actors: document.querySelector("#ActorsCheck").checked,
    };
}

// Función para filtrar por texto de búsqueda
function filtrarPorBusqueda(pelicula, busquedaTexto, searchFilters) {
    const matchesText = 
        (searchFilters.title && pelicula.Title.toLowerCase().includes(busquedaTexto)) ||  
        (searchFilters.director && pelicula.Director.toLowerCase().includes(busquedaTexto)) ||  
        (searchFilters.actors && pelicula.Actors.toLowerCase().includes(busquedaTexto)) ||  
        (!searchFilters.title && !searchFilters.director && !searchFilters.actors && (
            pelicula.Title.toLowerCase().includes(busquedaTexto) ||  
            pelicula.Director.toLowerCase().includes(busquedaTexto) ||  
            pelicula.Actors.toLowerCase().includes(busquedaTexto)
        ));

    return busquedaTexto === "" || matchesText;
}

// Función para filtrar por país
function filtrarPorPais(pelicula, selectedCountry) {
    return selectedCountry === 'allCountry' || pelicula.Country === selectedCountry;
}

// Función para filtrar por años
function filtrarPorAnio(pelicula, selectedYear1, selectedYear2) {
    return (isNaN(selectedYear1) || pelicula.Year >= selectedYear1) &&
           (isNaN(selectedYear2) || pelicula.Year <= selectedYear2);
}

// Función para filtrar por géneros
function filtrarPorGeneros(pelicula, selectedGeneros) {
    return selectedGeneros.length === 0 || selectedGeneros.some(g => pelicula.Genre.split(",").map(g => g.trim()).includes(g));
}

//mostrar los resultados filtrados 

function mostrarResultados(peliculasFiltradas) {
    const ResultsDiv = document.querySelector(".results");
    ResultsDiv.innerHTML = ''; // Limpiar resultados previos

    const nResults = document.querySelector(".nResults");
    nResults.innerHTML = `${peliculasFiltradas.length} results`;

    peliculasFiltradas.forEach(pelicula => {
        const peliculaDiv = crearPeliculaDiv(pelicula);
        ResultsDiv.appendChild(peliculaDiv);
    });
}

function crearPeliculaDiv(pelicula) {
    const peliculaDiv = document.createElement("div");
    peliculaDiv.classList.add("container", "my-4");

    const generosContainer = document.createElement("div");
    generosContainer.classList.add("d-flex", "flex-wrap", "mb-3");

    const listaGeneros = pelicula.Genre.split(",");
    const generosHTML = listaGeneros
    .map(genero => `<span class="badge me-2 mb-2 p-2 text-white bg-info">${genero}</span>`)
    .join("");

peliculaDiv.innerHTML = `
    <div class="card border-dark shadow-sm">
        <div class="card-body">
            <h2 class="card-title">${pelicula.Title}</h2>
            <div class="row align-items-center">
                <div class="col-md-4">
                    <img src="${pelicula.Images[0]}" class="img-fluid rounded shadow-sm" alt="imagen de la pelicula">
                </div>
                <div class="col-md-8">
                    <div class="d-flex flex-wrap mb-3">${generosHTML}</div>
                    <button class="btn btn-primary mt-3 details">Details</button>
                </div>
            </div>
        </div>
    </div>
`;
    
    const col8 = peliculaDiv.querySelector(".col-md-8");
    col8.insertBefore(generosContainer, col8.querySelector(".details"));

    const preDiv = document.createElement("div");
    preDiv.classList.add("mt-3", "p-3", "border", "rounded");
    preDiv.innerHTML = `
        <div class="d-flex justify-content-between">
            <input type="submit" name="cerrar" class="cerrar btn btn-sm btn-danger" value="X">
        </div>
        <div class="mb-3">
            <label for="ranking" class="form-label">Update IMDb Rating</label>
            <input type="number" name="ranking" id="ranking" class="form-control mb-2" min="0" max="10" step="0.1" value="${pelicula.imdbRating}">
            <button name="cambio" id="cambio" class="btn btn-success">Change</button>
        </div>
        <pre class="p-3 rounded">${JSON.stringify(pelicula, null, 2)}</pre>
        <div id="update-history" class="text-muted mt-2"></div>
    `;

    const detailsButton = peliculaDiv.querySelector(".details");
    detailsButton.addEventListener("click", function () {
        peliculaDiv.querySelector(".card").classList.add("bg-success");
        if (!peliculaDiv.contains(preDiv)) {
            peliculaDiv.appendChild(preDiv);

            const cerrarButton = preDiv.querySelector(".cerrar");
            cerrarButton.addEventListener("click", function () {
                peliculaDiv.querySelector(".card").classList.remove("bg-success");
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

            pUpdate.textContent = `Update: ${fecha.toLocaleString()}`;
            updateHistory.appendChild(pUpdate);

            preDiv.querySelector("pre").textContent = JSON.stringify(pelicula, null, 2);
        }
    });

    return peliculaDiv;
}

// Función para marcar todos los géneros
function marcarCheck() {
    const allGenresCheckbox = document.querySelector("#AllCheck");
    const genreCheckboxes = [...document.querySelectorAll(".genre-checkbox")]; 

    allGenresCheckbox.addEventListener("change", () => {
        genreCheckboxes.forEach(checkbox => checkbox.checked = allGenresCheckbox.checked);
    });

    genreCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                if (genreCheckboxes.every(genrecheckbox => genrecheckbox.checked)) {
                    allGenresCheckbox.checked = true; 
                }
            } else {
                allGenresCheckbox.checked = false; 
            }
        });
    });
}

// Función para mostrar los países
function mostrarPaises() {
    const CountySelect = document.querySelector("#CountySelect");
    annadirOptions(CountySelect, countries);
}

// Función para mostrar los años
function mostrarAnno() {
    const yearSelect1 = document.querySelector("#yearSelect1");
    const yearSelect2 = document.querySelector("#yearSelect2");
    const yearList = generarAnno(2000, new Date().getFullYear());
    annadirOptions(yearSelect1, yearList);
    annadirOptions(yearSelect2, yearList);
}

function mostrarGeneros() {
    const ContainerGenders = document.querySelector(".ContainerGenders");
    genders.sort((a, b) => a.localeCompare(b));
    genders.forEach(gender => {
        const genderDiv = document.createElement("div");
        genderDiv.classList.add("form-check", "p-2");
        genderDiv.innerHTmL = `
            <input type="checkbox" class="form-check-input genre-checkbox" id="${gender}Check">
            <label class="form-check-label" for="${gender}Check">${gender}</label>
        `;
        ContainerGenders.appendChild(genderDiv);
    });
    marcarCheck();
}

// Función para añadir opciones a un select
function annadirOptions(selectElement, options) {
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.innerHTML = option;
        optionElement.value = option;
        selectElement.appendChild(optionElement);
    });
}

// Función para generar lista de años
function generarAnno(yearStart, yearEnd) {
    let yearList = [];
    for (let year = yearStart; year <= yearEnd; year++) {
        yearList.push(year);
    }
    return yearList;
}

// Configuración de eventos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#AllCheck").addEventListener("click", marcarCheck);
    document.querySelector("#find").addEventListener("click", filtrarPeliculas); 

    mostrarPaises();
    mostrarGeneros();
    mostrarAnno();
    mostrarResultados();
    mostrarPelicuas();
});

