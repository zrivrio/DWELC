const array1 = [1, 2, 3, 4];

const initialValue = 0;
// Reduce el array sumando sus elementos
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Salida esperada: 10
