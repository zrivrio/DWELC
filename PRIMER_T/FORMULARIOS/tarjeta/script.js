
//PONER EL NOMBRE EN MAYUSCULAS
document.querySelector("#name").addEventListener("blur", function(){
    let nombre = document.querySelector("#name");
   nombre.value = nombre.value.toUpperCase();
    mayor7();
    nombreyapellido();
})

function mayor7() {
    let nombre = document.querySelector("#name");
    let nombrevalor = nombre.value
    if(nombrevalor.length < 7){
        alert('Debe de haber 7 caracteres')
    }
}
function nombreyapellido() {
    let nombre = document.querySelector("#name");
    let nombrevalor = nombre.value
    let contador = 0;
    for (let i = 0; i < nombrevalor.length; i++) {
        if (nombrevalor.charAt(i) === ' ') {
         contador++;
     }
    }
    if (contador === 0) {
     alert('debes de poner tu nombre y tu apellido')
    }
    
}

//AÑADIR ESPACIOS A LA TARJETA DE CREDITO
const contador = 4;
document.querySelector("#number").addEventListener("keyup", function () {
    
    let numertarjeta = document.querySelector("#number");
    let stringtarjeta = numertarjeta.value.replace(/\s/g, '');
    let tarjetaespacios = "";
    
    for (let i = 0; i < stringtarjeta.length; i++) {
        tarjetaespacios += stringtarjeta.charAt(i);
        if (i === 3 || i === 7 || i === 11) {
            tarjetaespacios += " ";
        }
    }
    numertarjeta.value = tarjetaespacios;
})

//PONER EL FONDO DE OTRO COLOR CUANDO ESTE EN EL FOCO
const cajas = document.querySelectorAll(".caja"); 

cajas.forEach(element => {
    element.addEventListener("focus", function() {
        element.style.backgroundColor = "Gainsboro";
    });
    element.addEventListener("blur", function() {
        element.style.backgroundColor = "white";
    });
});

//REMPLAZAR ',' POR '.' Y AÑADIR '.00'
document.querySelector("#cantidad").addEventListener("blur", function() {
    let valorcantidad =  document.querySelector("#cantidad");
    let valor = valorcantidad.value
    let nuemroValor = '';
    nuemroValor = valor.replace(/,/g, '.'); 
    let numeros = nuemroValor.substring(nuemroValor.length-2);
    if (!valor.includes('.')) {
        if(numeros != ".00"){
            console.log('s');
            nuemroValor = valor;
            nuemroValor += ".00";
        }
    }
    valorcantidad.value = nuemroValor;
});


document.querySelector("#date").addEventListener("blur", function () {
    const fechaactual = Date.now();
    const fechaintroducida = new Date(document.querySelector("#date").value);
    if (fechaintroducida<fechaactual) {
        alert("La tarjeta esta caducada")
    }
})

// const amount = document.querySelector("#amount");
// const card = document.querySelector("#card");
// const nombre = document.querySelector("#name");
// const expiration = document.querySelector("#expiration");
// const csv = document.querySelector("#csv");

// //VALIDAR CON BOOTSTRAP
// function validar(valido){
//     if (!field.checkValidity()) {
//         field.classList.add("is-invalid");
//         return false;
//     } else {
//         field.classList.remove("is-invalid");
//         field.classList.add("is-valid");
//         return true;
//     }
// }

// document.querySelector("#btn").addEventListener("click", function(event){
//     event.preventDefault();

//     let formatoValido = true;

//     formatoValido &= validar(amount);
//     formatoValido &= validar(card);  
//     formatoValido &= validar(nombre); 
//     formatoValido &= validar(expiration);  
//     formatoValido &= validar(csv);
  
// });