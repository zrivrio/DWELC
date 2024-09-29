// Función tradicional
function cuadrado_A(array) {
    let arrayC = [];
    for (let i = 0; i < array.length; i++) {
        arrayC.push(array[i] * array[i]);
    }
    return arrayC; 
}

// Refactorizando con una función flecha y el método map
const cuadrado_B = array => array.map(num => num * num);

let lista = [1, 2, 3, 4, 5];

// Invocar las funciones correctamente
let resultado_A = cuadrado_A(lista); // Llamada a la función cuadrado_A
let resultado_B = cuadrado_B(lista); // Llamada a la función cuadrado_B

console.log(resultado_A); 
console.log(resultado_B); 
