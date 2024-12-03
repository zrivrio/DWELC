let nombre = "";
 let saludo = "Mi nombre es " + nombre ?? "Paqui";
 let saludo2 = "Mi nombre es " + nombre || "Paqui";

 console.log(saludo);
 console.log(saludo2);
 

 let altura = 0;
 let edificio = "El edificio mide "+ altura ?? 200 + "m";
 let edificio2 = "El edificio mide "+ altura || 200 + "m";

 console.log(edificio);
 console.log(edificio2);
 
 function falsyvalues(valor) {
    return valor;
}
console.log(falsyvalues(false)); 
console.log(falsyvalues(0));
console.log(falsyvalues("")); 
console.log(falsyvalues(null));
console.log(falsyvalues(undefined)); 
console.log(falsyvalues(NaN)); 
console.log(falsyvalues("Hola")); 
console.log(falsyvalues(123)); 

const objeto1 = [ 1, 2 ];
const objeto2 = [3, 4 ];
const objetoCombinado = [...objeto1, ...objeto2 ];
console.log(objetoCombinado); 