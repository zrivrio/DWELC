function filtrarProductos() {
    const busquedaTexto = document.querySelector("#busquedaTexto").value.toLowerCase();
    const filtroCategoria = document.querySelector("#filtroCategoria").value;
    const rangoPrecio = document.querySelector("#rangoPrecio").value;
    const enOferta = document.querySelector("#enOferta").checked;

    return productos.filter(producto => {
        const matchesTexto = producto.nombre.toLowerCase().includes(busquedaTexto);
        const matchesCategoria = filtroCategoria === "all" || producto.categoria === filtroCategoria;
        const matchesPrecio = rangoPrecio === "all" ||
            (rangoPrecio === "low" && producto.precio < 100) ||
            (rangoPrecio === "medium" && producto.precio >= 100 && producto.precio <= 500) ||
            (rangoPrecio === "high" && producto.precio > 500);
        const matchesOferta = !enOferta || producto.enOferta;

        return matchesTexto && matchesCategoria && matchesPrecio && matchesOferta;
    });
}

function showProductos(productoFiltrado) {
    const divResultados = document.querySelector("#resultados");
    const resultCantidad = document.querySelector("#resultadosCantidad");

    divResultados.innerHTML = ""; // Limpia resultados anteriores
    resultCantidad.textContent = `${productoFiltrado.length} producto(s) encontrados`;

    if (productoFiltrado.length === 0) {
        divResultados.innerHTML = `<p>No se encontraron productos que coincidan con los criterios de búsqueda.</p>`;
        return;
    }

    productoFiltrado.forEach(producto => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "col";

        tarjeta.innerHTML = `
          <div class="card h-100">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">
                        Categoría: ${producto.categoria}<br>
                        Precio: ${producto.precio} €<br>
                        ${producto.enOferta ? "<strong>En oferta</strong>" : ""}
                    </p>
                    <button class="btn btn-secondary btn-ver-detalles">Ver Detalles</button>
                </div>
            </div>
        `;

        tarjeta.querySelector(".btn-ver-detalles").addEventListener("click", () => {
            alert(`
                Descripción: ${producto.descripcion}
                Precio: ${producto.precio} €
            `);
        });

        divResultados.appendChild(tarjeta);
    });
}

window.onload = () => {
    document.querySelector("#buscar").addEventListener("click", () => {
        const productosFiltrados = filtrarProductos();
        showProductos(productosFiltrados);
    });
};
