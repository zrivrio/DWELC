let a = parseInt(prompt("Introduce el primer numero:")); 
let b = parseInt(prompt("Introduce el segundo numero"));
let c = prompt("Introduce la operacion(+ , - , x, /):")

let ope = (a,b,c) => a + c + b;
let operacion = 0;
switch(c){
    case '+':
        operacion = a + b;
    break;
    case '-':
        operacion = a - b;
    break;
    case 'x':
        operacion = a * b;
    break;
    case '/':
        operacion = a / b;
    break;
}

alert(ope(a,b,c) + "=" + operacion);
let mayor = false;
if (operacion > 0){
    mayor=true;
}
if (mayor){
    alert("El resultado es mayor que 0")
}else{
    alert("El resultado es menor que 0")
}
