const lista = [1,2,3,4,5];

const listaDouble = lista.map(e => e*2); //Se utiliza para funciones sencillas
console.log(lista);
console.log(listaDouble);

const lista2 = lista.map(e => { //Se utiliza para cuando se quiere hacer una funcion de mayor cantidad
    let number = e * 2
    number +=8
    return number;
});
console.log(lista2);

//Explicacion 

const array1 = [1, 4, 9, 16];

// Aplica una función a cada elemento del array
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Salida esperada: [2, 8, 18, 32]
