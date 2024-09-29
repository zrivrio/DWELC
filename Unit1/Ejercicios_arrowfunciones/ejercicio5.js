const obtenerMayorNumero = arr => arr.reduce((max, num) => num > max ? num : max, arr[0]);

// Ejemplo de uso
let numeros = [10, 20, 30, 40, 50];
let mayorNumero = obtenerMayorNumero(numeros);
console.log(mayorNumero);
