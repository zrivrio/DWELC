
let suma = 0;
let contador =0;
let verdadero = true;

while(verdadero){
    let a = parseInt(prompt("Introduce la nota:")); 

    if(!Number.isNaN(a)){
        suma = a + suma;
        contador++;
    }else{
        verdadero = false;
    }

}

let media = suma / contador;

let categoria;
if (media < 5) {
    categoria = "insuficiente";
} else if (media >= 5 && media < 7) {
    categoria = "suficiente";
} else if (media >= 7 && media < 9) {
    categoria = "notable";
} else if (media >= 9 && media <= 10) {
    categoria = "sobresaliente";
}

alert("Tu nota es " + media + ". Lo que equivale a un " + categoria);
