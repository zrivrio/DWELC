function addCategory() {
    const selectCategoria = document.querySelector("#filtroCategoria");

    category.forEach(categoria => {
        const option = document.createElement("option");
        option.value = categoria;
        option.innerText = categoria;
        selectCategoria.appendChild(option);
    });
}

function filtrarProductos() {
    const busquedaTexto = document.querySelector("#busquedaTexto").value.toLowerCase();
    const filtroCategoria = document.querySelector("#filtroCategoria").value;
    const rangoPrecio = document.querySelector("#rangoPrecio").value;
    const enStock = document.querySelector("#enStock").checked;

    return products.filter(producto => {
        const matchesTexto = producto.name.toLowerCase().includes(busquedaTexto);
        const matchesCategoria = filtroCategoria === "all" || producto.category === filtroCategoria;
        const matchesPrecio = rangoPrecio === "all" ||
            (rangoPrecio === "low" && producto.price < 100) ||
            (rangoPrecio === "medium" && producto.price >= 100 && producto.price <= 500) ||
            (rangoPrecio === "high" && producto.price > 500);
        const matchesOferta = !enStock || producto.available;

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
            <div class="card-body">
                <h5 class="card-title">${producto.name}</h5>
                <p class="card-text">
                    Categoría: ${producto.category}<br>
                </p>
                <p id="precio" class="card-text">
                    Precio: ${producto.price} €<br>
                </p>
                <p class="card-text">
                    ${producto.available ? "<strong>En stock</strong>" : ""}
                </p>
                <button class="btn btn-secondary btn-ver-detalles">Ver Detalles</button>
                <button class="btn btn-primary btn-carrito" data-precio="${producto.price}" data-nombre="${producto.name}">Añadir al carrito</button>
            </div>
        </div>
        `;

        if (!producto.available) {
            tarjeta.querySelector(".btn-carrito").disabled = true;
        } else {
            tarjeta.querySelector(".btn-carrito").addEventListener("click", (e) => {
                addCarrito(e.target.dataset.nombre, parseFloat(e.target.dataset.precio));
            });
        }

        tarjeta.querySelector(".btn-ver-detalles").addEventListener("click", () => {
            alert(`
                Descripción: ${producto.descripcion}
                Precio: ${producto.price} €
            `);
        });

        divResultados.appendChild(tarjeta);
    });
}

function addCarrito(nombre, precio, cantidad = 1) {
    const tbody = document.querySelector("tbody");

    // Buscar si el producto ya existe en el carrito
    let filaExistente = Array.from(tbody.querySelectorAll("tr")).find(
        fila => fila.dataset.nombre === nombre
    );

    if (filaExistente) {
        // Actualizar cantidad y subtotal
        actualizarCantidad(filaExistente, cantidad);
    } else {
        // Crear una nueva fila
        const tr = document.createElement("tr");
        tr.dataset.nombre = nombre; // Usar dataset para almacenar el nombre
        tr.dataset.precio = precio; // Guardar el precio base
        tr.dataset.cantidad = cantidad; // Guardar la cantidad inicial

        tr.innerHTML = `
            <td>${nombre}</td>
            <td class="cantidad">
                <button class="btnMenos">-</button>
                ${cantidad}
                <button class="btnMas">+</button>
            </td>
            <td>€ ${precio.toFixed(2)}</td>
            <td class="subtotal">€ ${(precio * cantidad).toFixed(2)}</td>
            <td><button class="btnEliminar">Eliminar</button></td>
        `;

        tbody.appendChild(tr);
    }

    actualizarTotal();
}

function actualizarCantidad(fila, incremento) {
    // Leer valores desde el dataset
    let cantidad = parseInt(fila.dataset.cantidad) + incremento;

    // Validar que la cantidad no sea menor que 1
    if (cantidad < 1) return;

    fila.dataset.cantidad = cantidad;

    const precio = parseFloat(fila.dataset.precio);
    const subtotal = precio * cantidad;

    // Actualizar visualmente
    fila.querySelector(".cantidad").innerHTML = `
        <button class="btnMenos">-</button>
        ${cantidad}
        <button class="btnMas">+</button>
    `;
    fila.querySelector(".subtotal").textContent = `€ ${(subtotal).toFixed(2)}`;

    actualizarTotal();
}

function actualizarTotal() {
    const tbody = document.querySelector("tbody");
    const total = Array.from(tbody.querySelectorAll("tr")).reduce((acc, fila) => {
        const subtotal = parseFloat(fila.querySelector(".subtotal").textContent.slice(1));
        return acc + subtotal;
    }, 0);

    document.querySelector("#total").textContent = `Total: € ${total.toFixed(2)}`;
}

function eliminarProducto(event) {
    if (event.target.classList.contains("btnEliminar")) {
        const fila = event.target.closest("tr");
        fila.remove();
        actualizarTotal();
    }
}

window.onload = () => {
    addCategory();
    document.querySelector("#buscar").addEventListener("click", () => {
        const productosFiltrados = filtrarProductos();
        showProductos(productosFiltrados);
    });

    document.querySelector("table").addEventListener("click", (e) => {
        if (e.target.classList.contains("btnMas")) {
            actualizarCantidad(e.target.closest("tr"), 1);
        } else if (e.target.classList.contains("btnMenos")) {
            actualizarCantidad(e.target.closest("tr"), -1);
        } else if (e.target.classList.contains("btnEliminar")) {
            eliminarProducto(e);
        }
    });
};
