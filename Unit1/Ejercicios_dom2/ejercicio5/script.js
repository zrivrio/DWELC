const imagenes = [
    "https://i.pinimg.com/564x/3d/06/d4/3d06d417561e1376bcd024ba98150880.jpg",
    "https://i.pinimg.com/564x/e2/50/a3/e250a304226cb4c06cbfd841c15e1a1c.jpg",
    "https://i.pinimg.com/564x/77/0f/8b/770f8b8327eb03d133c69e4870406fdc.jpg",
    "https://i.pinimg.com/564x/aa/49/c2/aa49c2508212249c3ea70efd4ea24154.jpg",
    "https://i.pinimg.com/564x/ad/23/46/ad23468a29fb1bb8533ac74ff06f24ad.jpg",
];

let Nimagen = 0;

const vista = document.querySelector("#vista");
const antbtn = document.querySelector("#ant-btn");
const posbtn = document.querySelector("#pos-btn");

function actualizar() {
    vista.src = imagenes[Nimagen];
    antbtn.disabled = Nimagen === 0;
    posbtn.disabled = Nimagen === imagenes.length - 1;
}

function antImg() {
    if (Nimagen > 0) {
        Nimagen--;
        actualizar();
    }
}

function posImg() {
    if (Nimagen < imagenes.length - 1) {
        Nimagen++;
        actualizar();
    }
}

actualizar();

antbtn.addEventListener("click", antImg);
posbtn.addEventListener("click", posImg);