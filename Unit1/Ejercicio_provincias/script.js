// Function to order Provinces
function ordenarProvincias(provincias, criterio, orden) {
    return provincias.sort((a, b) => {
        let valorA, valorB;
        // Depending on the sorting criteria
        if (criterio === "alfabeticamente") {
            valorA = a.label;
            valorB = b.label;
        } else if (criterio === "nCiudades") {
            valorA = a.towns.length; // Corrected typo: 'lenght' -> 'length'
            valorB = b.towns.length; // Corrected typo: 'lenght' -> 'length'
        }

        // Depending on the sorting order
        if (orden === "asc") {
            return valorA > valorB ? 1 : (valorA < valorB ? -1 : 0);
        } else if (orden === "desc") {
            return valorA < valorB ? 1 : (valorA > valorB ? -1 : 0);
        }
    });
}

// Function to display the accordion
function mostrarAcordeon() {
    const ordenarModo = document.querySelector("#ordenarModo").value;
    const ordenarOrden = document.querySelector("#ordenarOrden").value;

    const acordeonContainer = document.querySelector("#accordion");
    acordeonContainer.innerHTML = ""; // Clear previous content

    comunidades.forEach(comunidad => {
        const ordenProvincias = ordenarProvincias(comunidad.provinces, ordenarModo, ordenarOrden);

        const comunidadItem = document.createElement("div");
        comunidadItem.classList.add("accordion-item");

        comunidadItem.innerHTML = `
        <h2 class="accordion-header" id="comunidad-${comunidad.code}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${comunidad.code}" aria-expanded="true" aria-controls="collapse-${comunidad.code}">
                ${comunidad.label} (${comunidad.provinces.length} Provincias)
            </button>
        </h2>
        <div id="collapse-${comunidad.code}" class="accordion-collapse collapse" aria-labelledby="comunidad-${comunidad.code}" data-bs-parent="#accordion">
            <div class="accordion-body">
                <ul class="list-group">
                    ${ordenProvincias.map(provincia => `
                        <li class="list-group-item">
                            <button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#provincia-${provincia.code}">
                            ${provincia.label} (${provincia.towns.length} Ciudades)
                            </button> 
                            <div id="provincia-${provincia.code}" class="collapse">
                                <ul class="list-group">
                                    ${provincia.towns.map(ciudad => `<li class="list-group-item">${ciudad.label}</li>`).join('')}
                                </ul>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
        `;
        acordeonContainer.appendChild(comunidadItem);
    });
}

// Function to update the accordion when values change
function actualizarAcordeon() {
    mostrarAcordeon();
}

// Add event listeners correctly to update the accordion on blur
document.querySelector("#ordenarModo").addEventListener("blur", actualizarAcordeon);
document.querySelector("#ordenarOrden").addEventListener("blur", actualizarAcordeon);
