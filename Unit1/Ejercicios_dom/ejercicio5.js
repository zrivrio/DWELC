const colores = ["rgb(255,255,255)","rgb(0,255,0)","rgb(255,0,255)","rgb(255,0,0)"];

function coloresTabla(colores) {
    let celda = document.querySelectorAll("td");
    let contador = 0;

    for(const ele of celda){
        if (contador < colores.length) {
            ele.style.backgroundColor = colores[contador];
            contador++;
        }
    }

}

coloresTabla(colores);