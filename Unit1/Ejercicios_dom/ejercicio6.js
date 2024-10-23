function createtabla(filas, columnas, ancho, alto) {
const tabla = document.querySelector("table");
   for (let i = 0; i < filas; i++) {
    const f = document.createElement("tr");
    tabla.appendChild(f)
    for (let j = 0; j < columnas; j++) {
        const c = document.createElement("td");
        c.style.width = ancho;
        c.style.height = alto;
        f.appendChild(c);
    }
   }
   return tabla;
}

createtabla(5,3,"800px","100px");