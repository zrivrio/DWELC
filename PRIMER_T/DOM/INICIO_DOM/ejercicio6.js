function createtabla(filas, columnas, ancho, alto) {
const tabla = document.querySelector("table");
   for (let i = 0; i < filas; i++) {
    const f = document.createElement("tr");
        tabla.appendChild(f)
    for (let j = 0; j < columnas; j++) {
        const c = document.createElement("td");
        c.style.width = ancho;
        c.style.height = alto;
        if (j%2 === 0) { //CAMBIA LAS PARES PERO SON LAS IMPARES PARA EL OJO HUMANO 
            c.style.background ="blue" ;
        }
        f.appendChild(c);
    }
   }
   return tabla;
}

createtabla(3,5,"100px","100px");