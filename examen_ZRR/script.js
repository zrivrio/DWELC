//Mostrar los paises

function MostrarPaises() {
    const CountySelect = document.querySelector("#CountySelect");

    countries.forEach(country => {
        const CountyOption = document.createElement("option");
        CountyOption.innerHTML = country;
        CountyOption.value = country;
        CountySelect.appendChild(CountyOption);
    });

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

//Mostrar los años
function MostrarAnno() {
    const yearSelect1 = document.querySelector("#yearSelect1");
    const yearSelect2 = document.querySelector("#yearSelect2");

    let year2020 = new Date();
    year2020.setFullYear(2020);

    let yearNow = new Date();

    let ListaAnno = [];

    for (let fecha = new Date(year2020); fecha.getFullYear() <= yearNow.getFullYear(); fecha.setFullYear(fecha.getFullYear() + 1)) {
        ListaAnno.push(new Date(fecha));
    }

    ListaAnno.forEach(anno => {
        const annoOption1 = document.createElement("option");
        annoOption1.innerHTML = anno.getFullYear();
        annoOption1.value = anno.getFullYear();
        const annoOption2 = document.createElement("option");
        annoOption2.innerHTML = anno.getFullYear();
        annoOption2.value = anno.getFullYear();

        yearSelect1.appendChild(annoOption1);
        yearSelect2.appendChild(annoOption2);
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
            generoP.classList.add("p-2");
            generoP.textContent = genero.trim();
            generosContainer.appendChild(generoP);
        });

        peliculaDiv.innerHTML = `
            <h2>${pelicula.Title}</h2>
            <div class="d-flex">
                <img src="${pelicula.Images[0]}" class="img-thumbnail w-2" alt="imagen de la pelicula">
                <button class="details border border-1 border-dark">Details</button>
            </div>
        `;

        const preDiv = document.createElement("div");
        preDiv.innerHTML = `
        <input type="text" name="ranking" id="ranking">
        <input type="submit" name="cambio" id="cambio">
        <pre> ${JSON.stringify(pelicula, null, 2)}</pre>`;

        const detailsButton = peliculaDiv.querySelector(".details");
        detailsButton.addEventListener("click", function () {
            peliculaDiv.appendChild(preDiv);
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
            match = Title;
        }
        if (actorsCheck.checked && pelicula.Actors.some(actor => actor.toLowerCase().includes(busqueda))) {
            match = Director;
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


