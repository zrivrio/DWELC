const colores = ["rgb(0,0,255)","rgb(0,255,0)","rgb(255,0,255)","rgb(255,0,0)"];

function coloresTabla(colores) {
    let celda = document.querySelectorAll("td");
    let contador = 0;

    for(const ele of celda){
        if (contador == colores.length ) {
            contador = 0;
        } 
        ele.style.backgroundColor = colores[contador];
        contador++;
    }
}
coloresTabla(colores);