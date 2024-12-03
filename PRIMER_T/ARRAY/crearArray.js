//Parte 1

const array_uni = [1, 2, 3, 4];

const clon1_array_uni = [...array_uni];
const clon2_array_uni = array_uni.slice();
const clon3_array_uni = Array.from(array_uni)

console.log("Original:", array_uni);
console.log("Clonado con tres puntos:", clon1_array_uni); 
console.log("Clonado con slice:", clon2_array_uni);
console.log("Clonado con new array:", clon3_array_uni);

//Parte 2

const array_di = [[1,2,3,4],[1,2,3,4],[1,2,3,4]];

const clon1_array_di = array_di.map(i => [...i]);
const clon2_array_di = array_di.map(i => Array.from(i));
const clon3_array_di = array_di.map(i => array_di.slice());

console.log("Original:", array_di);
console.log("Clonado con tres puntos:", clon1_array_di); 
console.log("Clonado con slice:", clon2_array_di);
console.log("Clonado con new array:", clon3_array_di);
