function filtrarProductos() {
    const busquedaTexto = document.querySelector("#busquedaTexto").value.toLowerCase();
    const filtroCategoria = document.querySelector("#filtroCategoria").value;
    const rangoPrecio = document.querySelector("#rangoPrecio").value;
    const enOferta = document.querySelector("#enOferta").checked;

    if(!busquedaTexto || !filtroCategoria || !rangoPrecio || !enOferta){
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
    } else{
        return productos;
    }


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
            </p>
            <p id="precio" class="card-text">
                Precio: ${producto.precio} €<br>
            </p>
            <p class="card-text">
                ${producto.enOferta ? "<strong>En oferta</strong>" : ""}
            </p>
            <button class="btn btn-secondary btn-ver-detalles">Ver Detalles</button>
            <button class="btn btn-primary btn-carrito" data-precio="${producto.precio}">Añadir al carrito</button>
        </div>
    </div>
`;

        // Aquí agregas el evento a cada botón de añadir al carrito
        tarjeta.querySelector(".btn-carrito").addEventListener("click", (e) => {
            addCarrito(e);
        });

        tarjeta.querySelector(".btn-ver-detalles").addEventListener("click", () => {
            alert(`
                Descripción: ${producto.descripcion}
                Precio: ${producto.precio} €
            `);
        });

        divResultados.appendChild(tarjeta);
    });
}


function addCarrito(event){
    const tbody = document.querySelector("tbody");
    const productoDiv = event.target.parentElement;
    const nombreProducto = productoDiv.querySelector("h5").innerHTML;
    
    const precioProducto = parseFloat(event.target.getAttribute("data-precio"));

    if(isNaN(precioProducto)) {
        console.error("El precio no es válido");
        return;
    }

    const tr = document.createElement("tr");
    const tdNombre = document.createElement("td");
    const tdPrecio = document.createElement("td");
    const tdAccion = document.createElement("td");

    tdNombre.innerText = nombreProducto;
    tdPrecio.innerText = `${precioProducto} €`;
    tdPrecio.className = "precio";

    tdAccion.innerHTML = `<button class="btnEliminar">Eliminar</button>`;
    
    tr.appendChild(tdNombre);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdAccion);

    tbody.appendChild(tr);

    actualizarTotal();
}


function actualizarTotal(){
    const filas = document.querySelectorAll("tbody tr");
    const totalSpan = document.querySelector("#total");
    let total = 0;

    filas.forEach(fila =>{
        const precioTexto = fila.querySelector(".precio").innerText;
        const precioValue = parseFloat(precioTexto.replace("€",""));
        if(!isNaN(precioValue)){
            total += precioValue;
        } 
    });
    totalSpan.innerText = `${total.toFixed(2)} €`;
}

function eliminarProducto(event){
    if (event.target.classList.contains("btnEliminar")){
        const fila = event.target.closest("tr");
        fila.remove();
        actualizarTotal();
    }
}

window.onload = () => {


    document.querySelector("#buscar").addEventListener("click", () => {
        const productosFiltrados = filtrarProductos();
        showProductos(productosFiltrados);
    });

    document.querySelector("table").addEventListener("click", (e) =>{
        eliminarProducto(e);
    })


};
