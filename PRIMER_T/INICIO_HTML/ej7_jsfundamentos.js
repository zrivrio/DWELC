// Definimos un arreglo de frutas
const frutas = ["manzana", "banana", "cereza", "mango"];

// Definimos la fruta a buscar
const frutaBuscada = "banana";

// Verificamos si la fruta está en el arreglo
const posicion = frutas.indexOf(frutaBuscada);

if (posicion !== -1) {
    // Si la fruta se encuentra, mostramos su posición
    console.log(`${frutaBuscada} está en la posición ${posicion}.`);
} else {
    // Si la fruta no se encuentra, mostramos un mensaje apropiado
    console.log(`${frutaBuscada} no está en la lista.`);
}
