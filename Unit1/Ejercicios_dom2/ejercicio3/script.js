const palabrasTabu = ["sexo", "violencia", "drogas", "alcohol"];

function buscarTabu(nodo) {
    if (nodo.nodeType === Node.TEXT_NODE) {
        const texto = nodo.textContent.toLowerCase();
        palabrasTabu.forEach(palabra => {
            if (texto.includes(palabra)) {
                console.log(`Se encontró la palabra tabú "${palabra}" en el texto:`, nodo.data);
            }
        });
    } else {
        nodo.childNodes.forEach(hijo => buscarPalabrasTabu(hijo));
    }
}

function tabuNegrita(nodo) {
    if (nodo.nodeType === Node.TEXT_NODE) {
        const texto = nodo.textContent.toLowerCase();
        if (palabrasTabu.some(palabra => texto.includes(palabra))) {
            const span = document.createElement("span");
            span.innerHTML = "<strong>Contenido bloqueado</strong>";
            nodo.parentNode.replaceChild(span, nodo);
        }
    } else {
        nodo.childNodes.forEach(hijo => buscarTabu(hijo));
    }
}


buscarTabu(document.querySelector("body"));
tabuNegrita(document.querySelector("body"));
