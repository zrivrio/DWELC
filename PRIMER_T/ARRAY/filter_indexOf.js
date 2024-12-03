function eliminarDuplicados(lista) {
    return lista.filter((e, i) => lista.indexOf(e) === i);
}

const arreglo = [1, 2, 3, 4, 3, 2, 5, 6, 7, 6];
const array_sinduplicados = eliminarDuplicados(arreglo);

console.log(array_sinduplicados);