//Funcion Ordear Provincias
function ordenarProvinias(provincias, criterio, orden){
    //Devuelve las provincias ordenadas
    return provincias.sort((a,b) => {
        let valorA, valorB;
        //Segun el criterio
        if(criterio === "alfabeticamente"){
            valorA = a.label;
            valorB = b.label;
        } else if (criterio === "nCiudades") {
            valorA = a.towns.lenght;
            valorB = b.towns.lenght;
        }

        //Segun su orden
        if(orden === "asc"){
            //Cuando valorA es mayor que valorB devulve 1 pero cuando valorA es menor que valorB devulve -1 en caso de que no sea ninguna devulve 0
            return valorA > valorB ? 1 : (valorA < valorB ? -1 : 0);
        }else if (orden === "desc"){
            //Cuando valorA es menor que valorB devulve 1 pero cuando valorA es mayor que valorB devulve -1 en caso de que no sea ninguna devulve 0
            return valorA < valorB ? 1 : (valorA > valorB ? -1 : 0);
        }
    });
}

//Funcion para mostrar el acordeon 

function mostrarAcordeon(){
    const ordenarModo = document.querySelector("#ordenarModo").value;
    const ordenarOrden = document.querySelector("#ordenarOrden").value;

    const acordeonContainer = document.querySelector("#accordion");
    acordeonContainer.innerHTML = "";

    comunidades.forEach(comunidad => {
        const ordenProvincias = ordenarProvinias(comunidad.provinces, ordenarModo, ordenarOrden)
    
        const comunidadItem = document.createElement("div");
        comunidadItem.classList.add("accordion-item");

        comunidadItem.innerHTML = `
        <h2 class="accordion-header" id="comunidad-${comunidad.code}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collape-${comunidad.code}" aria-expanded="true" aria-controls="collapse-${comunidad.code}">
            </button>
        </h2>
        <div id="collapse-${comunidad.code}" class="arccordion-collapse collapse" aria-labelledby="comunidad-${comunidad.code}" data-bs-parent="#accordion">
            <div class="accordion-body">
                <ul class="list-group">
                    ${ordenProvincias.map(provincia => `
                        <li class="list-group-item">
                            <button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#provincia-${provincia.code}">
                            ${provincia.label}(${provincia.towns.lenght} Ciudades)
                            </button>
                        </li>
                        `)}
                </ul>
            </div>
        </div>
        `;
    
    });


}