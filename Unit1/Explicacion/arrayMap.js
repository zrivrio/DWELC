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