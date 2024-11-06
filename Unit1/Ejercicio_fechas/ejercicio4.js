const fechaInicio = new Date(new Date().getFullYear(), 8, 15);
const fechaActual = new Date();

function calcularDias(fechaInicio, fechaActual) {
    const milisegundosDia = 1000 * 60 * 60 * 24;
    const diferencia = fechaInicio - fechaActual;

    return diferencia / milisegundosDia;
}

const diasPasados = calcularDias(fechaInicio, fechaActual);

let contLunes = 0;
let listaLunes = [];

for(let fecha = new Date(fechaInicio); fecha <= fechaActual; fecha.setDate(fecha.getDate() + 1)){
    if (fecha.getDay() === 1) {
        contLunes++;
        listaLunes.push(new Date(fecha));
    }
}

console.log(`Han pasado ${diasPasados} desde el 15 de septiembre`);
console.log(`Que son ${contLunes} lunes`);
console.log('Lista de los lunes:', listaLunes);

