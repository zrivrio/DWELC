console.log(document.querySelectorAll("a").length);

let enlaces = document.querySelectorAll("a");
let penultimo = enlaces[enlaces.length - 2];
console.log(penultimo.getAttribute("href"));

let enlacesInstituto = Array.from(enlaces).filter(enlace => enlace.getAttribute("href") === "https://iesbelen.org");
console.log(enlacesInstituto.length);


let tercerParrafo = document.querySelectorAll("p")[2]; 
let enlacesTercerParrafo = tercerParrafo.querySelectorAll("a");
console.log(enlacesTercerParrafo.length);


