const tabla = document.querySelector("table");

document.querySelector(".addfirst").addEventListener("click", function() {
    const filas = tabla.querySelectorAll("tr");
    filas.forEach(function(fila) {
        const nuevoTd = document.createElement("td");
        nuevoTd.style.backgroundColor = "black";
        fila.insertAdjacentElement("afterbegin", nuevoTd);
    });
});

document.querySelector(".addfin").addEventListener("click", function() {
    const filas = tabla.querySelectorAll("tr");
    filas.forEach(function(fila) {
        const nuevoTd = document.createElement("td");
        nuevoTd.style.backgroundColor = "red";
        fila.insertAdjacentElement("beforeend", nuevoTd); 
    });
});