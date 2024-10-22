function encabezados() {
    for (let i = 1; i <= 6; i++) {  
        const encabezado = document.createElement(`h${i}`);  
        encabezado.textContent = `Encabezado ${i}`;  
        document.body.appendChild(encabezado);  
    }
}
encabezados();  
