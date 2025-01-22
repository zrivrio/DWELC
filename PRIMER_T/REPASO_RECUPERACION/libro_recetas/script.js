function filtrarRecetas() {
    const busquedaTexto = document.querySelector("#busquedaTexto").value.toLowerCase();
    if (busquedaTexto == ""){
        return recetas;
    }else {

        const filtroNombre = document.querySelector("#filtroNombre").checked;
        const filtroIngredientes = document.querySelector("#filtroIngredientes").checked;
        const filtroCategoria = document.querySelector("#filtroCategoria").checked;
    
        const tiempoPreparacio = document.querySelector("#tiempoPreparacion").value;
        const vegetariano = document.querySelector("#vegetariano").checked;
    
        return recetas.filter((receta) => {
            const matchesTexto = (filtroNombre && receta.nombre.toLowerCase().includes(busquedaTexto)) ||
            (filtroIngredientes && receta.ingredientes.some((ingrediente) => ingrediente.toLowerCase().includes(busquedaTexto))) ||
            (filtroCategoria && receta.categorias.some((categoria) => categoria.toLowerCase().toLowerCase().includes(busquedaTexto)));
       
            const matchesTiempo = tiempoPreparacio === "all" ||
           ( tiempoPreparacio === "short" && receta.tiempo < 30) ||
           (tiempoPreparacio === "medium" && receta.tiempo >=30 && receta.tiempo <= 60) ||
           (tiempoPreparacio === "long" && receta.tiempo > 60);
    
           const matchesCategoria = !vegetariano || receta.categorias.includes("Vegetariano");
    
            return matchesCategoria && matchesTiempo && matchesTexto;
       
        });
    }


}

function renderizarRecetas(recetasFiltradas) {
    const divResultados = document.querySelector("#resultados");
    const resultCantidad = document.querySelector("#resultadosCantidad");

    divResultados.innerHTML="";
    resultCantidad.textContent = `${recetasFiltradas.length} receta(s) encontradas`;

    recetasFiltradas.forEach(receta => {
        const tarjeta = document.createElement("div");

        tarjeta.className= "col";

        tarjeta.innerHTML = ` <div class="card h-100">
               <!-- <img src="${receta.imagen}" class="card-img-top" alt="${receta.nombre}"> -->
                <div class="card-body">
                    <h5 class="card-title">${receta.nombre}</h5>
                    <p class="card-text">
                        Tiempo de preparación: ${receta.tiempo} min<br>
                        Categorías: ${receta.categorias.join(", ") || "Ninguna"}
                    </p>
                    <button class="btn btn-secondary btn-ver-detalles">Ver Detalles</button>
                </div>
            </div>`;

            tarjeta.querySelector(".btn-ver-detalles").addEventListener("click", () => {
                alert(`
                    Ingredientes: ${receta.ingredientes.join(", ")}
                    Instrucciones: ${receta.instrucciones}
                `);
            });

            divResultados.appendChild(tarjeta);

    });

}   

document.querySelector("#buscar").addEventListener("click", () => {
    const recetasFiltradas = filtrarRecetas();
    renderizarRecetas(recetasFiltradas);
})
