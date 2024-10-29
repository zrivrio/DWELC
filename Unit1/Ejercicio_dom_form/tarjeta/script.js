document.querySelector("#name").addEventListener("blur", function(){
    let nombre = document.querySelector("#name");
   nombre.value = nombre.value.toUpperCase()
})
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
document.querySelector("#name").addEventListener("blur", function(){
    document.querySelector("#name").style.backgroundColor= "blue"
})

document.querySelector("#cantidad").addEventListener("keyup", function() {
    this.value = this.value.replace(/,/g, '.'); 
});