const lista = [1, 2, -3, (e => e > 2), 5];

//const listaDouble = lista.map(e=>e*2);
//const listaDouble = lista.map(e=>e);
//const listaDouble = lista.map(e=>e);
const listaDouble = lista.map(e => {
    let numero = e * 2;
    numero += 8;
    return numero
});

console.log(lista);
console.log(listaDouble);

//const listaResult = lista.filter(e=>e>3)

const listaResultPar = lista.filter(e => !(e % 2));
const listaResultImp = lista.filter(e => e % 2);

/* const listaResult = lista.filter(e=>{
    if(!(e%2)){
        console.log("en then...",e);
        return true;
    } else {
        return false;
    }
}); */

console.log(listaResultPar);
console.log(listaResultImp);
console.log(typeof listaResultImp);

/* let encontrado = lista.find(e => e>2); 
console.log(encontrado);
console.log(typeof encontrado); */


// lista = [1, 2, -3, 4, 5];
let encontrado = lista.findIndex(e => e > 2);
console.log('encontrado', encontrado);
console.log(typeof encontrado);

let encontrado2 = lista.indexOf((e => e > 2));
console.log('encontrado2', encontrado2);
console.log(typeof encontrado2);



const array1 = [1, 2, 3, 4];
const initialValue = 5;
const sumWithInitial = array1.reduce(
    (accumulator, current) => accumulator + current);
// 0 + 1 + 2 + 3 + 4
console.log(sumWithInitial); // Expected output: 10

//const sumWithInitial = array1.reduce((ac, e) => ac + e,10);