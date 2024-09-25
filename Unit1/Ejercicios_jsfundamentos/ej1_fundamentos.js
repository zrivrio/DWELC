let a = prompt("Introduce el primer numero:")
let b = prompt("Introduce el segundo numero:")

let sum = (a,b) =>{
    return Number(a) + Number(b);
}
console.log(sum(a,b));
alert(sum(a,b));
document.body.innerHTML="<h1> El resultado de la suma es " +sum(a,b) + "</h1> </br>";

document.getElementById("c").innerHTML =`Primer nuemro: ${a}</br>
Segundo numero: ${b}</br>
Resultado: ${sum(a,b)}`;