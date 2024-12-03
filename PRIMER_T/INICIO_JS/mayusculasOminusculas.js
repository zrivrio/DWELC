let str = 'js string exercises';

let capitalize_Words = (cadena) => {
    let nuevaCadena = '';
    let cadenaSeparada = cadena.split(' ');

    cadenaSeparada.forEach(element => {
        nuevaCadena += element.charAt(0).toUpperCase() + element.slice(1) + ' ';
    });

    console.log(nuevaCadena);
}; 

capitalize_Words(str);