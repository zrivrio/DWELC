// Añadir opciones dinámicas a selectores
function annadirOptions(data, select) {
    select.innerHTML = "<option value=''>Todos</option>";
    data.forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
    });
}

// Mostrar géneros con checkboxes
function mostraGeneros() {
    const divCheckboxF = document.querySelector(".checkboxF");
    divCheckboxF.innerHTML = `
        <button id="toggleGeneros">Seleccionar Todos los Géneros</button>
    `;
    filtros.genres.sort().forEach(genre => {
        const div = document.createElement("div");
        div.innerHTML = `
            <label><input type="checkbox" value="${genre}"> ${genre}</label>
        `;
        divCheckboxF.appendChild(div);
    });
}

// Función para aplicar filtros
function aplicarFiltros() {
    const texto = document.querySelector("#busqueda").value.toLowerCase();
    const pais = document.querySelector("#pais_publi").value;
    const annoInicio = document.querySelector("#fecha_i").value;
    const annoFin = document.querySelector("#fecha_f").value;
    const generosSeleccionados = Array.from(document.querySelectorAll(".checkboxF input:checked")).map(input => input.value);

    let filtrados = libros.filter(libro => {
        const cumpleTexto = texto === "" || [libro.title, libro.author, libro.genre].some(field => field.toLowerCase().includes(texto));
        const cumplePais = pais === "" || libro.country === pais;
        const cumpleAnno = (!annoInicio || libro.year >= annoInicio) && (!annoFin || libro.year <= annoFin);
        const cumpleGenero = generosSeleccionados.length === 0 || generosSeleccionados.includes(libro.genre);
        return cumpleTexto && cumplePais && cumpleAnno && cumpleGenero;
    });

    mostrarResultados(filtrados);
}

// Mostrar número de resultados y libros
function mostrarResultados(librosFiltrados) {
    mostrarNumeroL(librosFiltrados.length);
    mostrarLibros(librosFiltrados);
}

function mostrarNumeroL(cantidad) {
    document.querySelector("#numLibros").textContent = `Número de resultados: ${cantidad}`;
}

function mostrarLibros(libros) {
    const divContenedor = document.querySelector("#librosMostrar");
    divContenedor.innerHTML = ""; // Limpiar contenedor antes de agregar nuevos libros

    libros.forEach(libro => {
        const divLibro = document.createElement("div");
        divLibro.classList.add("listo");
        divLibro.innerHTML = `
            <p><strong>Título:</strong> ${libro.title}</p>
            <p><strong>Autor:</strong> ${libro.author}</p>
            <p><strong>Año:</strong> ${libro.year}</p>
            <p><strong>País:</strong> ${libro.country}</p>
            <p><strong>Género:</strong> ${libro.genre}</p>
            <button class="verDetalle">Ver Detalles</button>
        `;

        const preDiv = document.createElement("div");
        preDiv.classList.add("detalles");
        preDiv.innerHTML = `
            <input type="submit" name="cerrar" class="cerrar" value="x">
            <div>
                <label>Cambiar puntuación:</label>
                <input type="number" name="ranking" id="ranking" min="0" max="10" step="0.1" value="${libro.rating}">
                <button name="cambio" id="cambio">Change</button>
            </div>
            <pre class="p-3 rounded">${JSON.stringify(libro, null, 2)}</pre>
            <div id="update-history" class="text-muted mt-2"></div>
        `;
        preDiv.style.display = "none";

        // Lógica de actualización de puntuación
        const rankingInput = preDiv.querySelector("#ranking");
        const cambioButton = preDiv.querySelector("#cambio");
        const updateHistory = preDiv.querySelector("#update-history");

        cambioButton.addEventListener("click", function () {
            const updateRanking = parseFloat(rankingInput.value);

            if (!isNaN(updateRanking) && updateRanking >= 0 && updateRanking <= 10) {
                libro.rating = updateRanking.toString();
                const fecha = new Date();
                const pUpdate = document.createElement("p");

                pUpdate.textContent = `Update: ${fecha.toLocaleString()}`;
                updateHistory.appendChild(pUpdate);

                preDiv.querySelector("pre").textContent = JSON.stringify(libro, null, 2);
            } else {
                alert("La puntuación debe estar entre 0 y 10.");
            }
        });

        divLibro.querySelector(".verDetalle").addEventListener("click", () => {
            preDiv.style.display = preDiv.style.display === "none" ? "block" : "none";
        });

        const cerrarButton = preDiv.querySelector(".cerrar");
        cerrarButton.addEventListener("click", function () {
            preDiv.style.display = "none";
        });

        divLibro.appendChild(preDiv);
        divContenedor.appendChild(divLibro);
    });
}


// Seleccionar todos los géneros
function toggleGeneros() {
    const checkboxes = document.querySelectorAll(".checkboxF input[type='checkbox']");
    const todosSeleccionados = Array.from(checkboxes).every(checkbox => checkbox.checked);
    checkboxes.forEach(checkbox => checkbox.checked = !todosSeleccionados);
}

// Inicializar filtros y resultados
window.onload = () => {
    annadirOptions(filtros.countries, document.querySelector("#pais_publi"));
    annadirOptions(filtros.years, document.querySelector("#fecha_i"));
    annadirOptions(filtros.years, document.querySelector("#fecha_f"));
    mostraGeneros();
    mostrarResultados(libros);

    document.querySelector("#filtrar").addEventListener("click", aplicarFiltros);
    document.querySelector("#toggleGeneros").addEventListener("click", toggleGeneros);
};
