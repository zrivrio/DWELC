let mes = parseInt(prompt("Introduce el número del mes:"));

switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("Este mes tiene 31 días");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("Este mes tiene 30 días");
        break;
    case 2:
        alert("Este mes tiene 28 días o 29 dependiendo del año");
        break;
    default:
        alert("Número de mes no válido");
}


const meses = [31,28,31,30,31,30,31,31,30,31,30,31]

for (let i = 0; i < meses.length; i++) {
   if (mes == i){
    switch(meses[i]){
        case 30:
            alert("Este mes tiene 30 días");
        break;
        case 31:
        alert("Este mes tiene 31 días");
        break;
        case 28:
            alert("Este mes tiene 28 días");
        break;
    }

   }
    
}
