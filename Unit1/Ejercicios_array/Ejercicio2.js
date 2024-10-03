function array_iguales(arra1, arra2) {
    if (arra1.length !== arra2.length ) {
        return false;
    }

    return arra1.every((e, i) => e === arra2[i]);
}

const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];
const array3 = [1, 2, 3, 5];

console.log(array_iguales(array1, array2)); 
console.log(array_iguales(array1, array3));