function mostrarProductos() {
    const container = document.querySelector(".container");

    products.forEach(product => {
        const divProducto = document.createElement("div");
        const imgProducto = document.createElement("img");
        const pProducto = document.createElement("p");
        const pPrecio = document.createElement("p");
        const pStock = document.createElement("p");
        const inputStock = document.createElement("input");
        const btnComprar = document.createElement("button");
        
        imgProducto.src = product.imagen;
        pProducto.innerHTML = product.nombre;
        pPrecio.innerHTML = `€ ${product.precio}`;
        pPrecio.id = "pPrecio";
        inputStock.type = "number";
        inputStock.value = 1;
        inputStock.min = 1;
        if( product.stock == 0){
            inputStock.max = 0
            pStock.innerHTML = `Sin stock`;
            btnComprar.disabled;
        } else if ( pStock <= 4){
            pStock.innerHTML = `Stock: ${product.stock}`;
        }
        btnComprar.innerHTML = "Comprar";
        btnComprar.className = "btnComprar";


        divProducto.appendChild(imgProducto);
        divProducto.appendChild(pProducto);
        divProducto.appendChild(pPrecio);
        divProducto.appendChild(pStock);
        divProducto.appendChild(inputStock);
        divProducto.appendChild(btnComprar);

        container.appendChild(divProducto);
    });
}

function crearTabla(event) {
    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    const tdProducto = document.createElement("td");
    const tdCantidad = document.createElement("td");
    const tdPrecio = document.createElement("td");
    const tdTotal = document.createElement("td");
    const tdAccion = document.createElement("td");
    const productoDiv = event.target.parentElement;
    const nombreProducto = productoDiv.querySelector("p").innerText;
    const precioProducto = productoDiv.querySelector("#pPrecio").innerText;
    const btnMas = document.createElement("button");
    const btnMenos = document.createElement("button");
    const cantidad = productoDiv.querySelector("input").value;

    tdPrecio.className = "tdPrecio";
    tdCantidad.id = "tdCantidad";

    btnMas.value = "+";
    btnMenos.value = "-";

    tdCantidad.appendChild(btnMas)
    tdCantidad.appendChild(btnMenos)

    tdProducto.innerText = nombreProducto;
    tdCantidad.innerHTML = ` <button id="menos"> - </button> ${cantidad} <button id="mas"> + </button>`;
    tdPrecio.innerText = precioProducto;
    tdTotal.innerText =+ parseFloat(precioProducto.slice(1,precioProducto.length));
    if(cantidad != 0){
        tdAccion.innerHTML = `<button id="eliminar"> Eliminar </button>`
    }

    tr.appendChild(tdCantidad);
    tr.appendChild(tdProducto);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdTotal);
    tr.appendChild(tdAccion);

    tbody.appendChild(tr);
}

function valorTotal(){
    const tdPrecio = document.querySelectorAll("#tdPrecio");
    const pTotal = document.createElement("p");
    let total = 0;
    tdPrecio.forEach(precio => {
        total =+ parseFloat(precio.slice(1, precio.length));

    })
    if(total != 0){
        pTotal.innerText = total;
        document.querySelector("total").appendChild(pTotal);
    }
}

function annadirCantidad(event){
    const productoDiv = event.target.parentElement;
    const tdCantidad = document.querySelector("#tdCantidad");
    let cantidad = productoDiv.querySelector("input").value;
        cantidad = cantidad++;
        tdCantidad.innerHTML = ` <button id="menos"> - </button> ${cantidad} <button id="mas"> + </button>`;
}
function eliminarCantidad(event){
    const productoDiv = event.target.parentElement;
    const tdCantidad = document.querySelector("#tdCantidad");
    let cantidad = productoDiv.querySelector("input").value;
        cantidad = cantidad--;
        tdCantidad.innerHTML = ` <button id="menos"> - </button> ${cantidad} <button id="mas"> + </button>`;



}
window.onload = () => {
    mostrarProductos();
    document.querySelector(".container").addEventListener("click", (event) => {
        if (event.target.classList.contains("btnComprar")) {
            crearTabla(event);
            document.querySelector("#mas").addEventListener("click", annadirCantidad(event));
            document.querySelector("#menos").addEventListener("click", eliminarCantidad(event));
        }
    });
    valorTotal();
    
};



