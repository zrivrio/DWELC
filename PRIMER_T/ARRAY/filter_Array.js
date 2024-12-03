// Función tradicional para filtrar números positivos
function arrayP_A(array) {
    let arrayPositivo = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            arrayPositivo.push(array[i]);
        }
    }
    return arrayPositivo;
}

// Función flecha utilizando el método filter
const arrayP_B = array => array.filter(num => num > 0);

let lista = [1, -2, 3, 4, -5];

// Invocar las funciones correctamente
let resultado_A = arrayP_A(lista); // Llamada a la función arrayP_A
let resultado_B = arrayP_B(lista); // Llamada a la función arrayP_B

console.log(resultado_A); 
console.log(resultado_B); 
