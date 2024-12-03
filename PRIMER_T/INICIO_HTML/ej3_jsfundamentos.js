let a = parseInt(prompt("Primera Nota:")); 
let b = parseInt(prompt("Segunda Nota:"));
let c = parseInt(prompt("Tercera Nota:")); 
let d = parseInt(prompt("Cuarta Nota:"));

let media = (a + b + c + d) / 4;

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
