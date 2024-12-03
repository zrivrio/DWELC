const calcularPromedio = arr => arr.reduce((sum, num) => sum + num, 0) / arr.length;

// Ejemplo de uso
let numeros = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(numeros);
console.log(promedio); 
