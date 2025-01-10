
document.querySelector("#ciudadButton").addEventListener("click", async (event) => {
    event.preventDefault();
    const texto = document.querySelector("#ciudadTexto").value || "malaga"; //prueba para notener que ecribir siempre en ele input
    const result = document.querySelector("#result");
    const url = `http://api.weatherapi.com/v1/current.json?key=d926c7e0050d48faaec90813250801&q=${texto}&aqi=no`;
   await fetch(url)
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error('Error:' + err.error.message);
                })
            } 
                return response.json().catch((e)=>{
                    throw new Error("Error" + e.error.message )
                });
            
        })
        .then(async(data) => { //No poner nombres genericos
            result.innerHTML = `
            <p>${data.location.name} ${data.location.region} ${data.location.country} ${data.current.temp_c}ºC</p>
            <p>En el fetch</p>
            <img src="${data.current.condition.icon}" alt="Imagen Tiempo">
            <p>Con el objeto blob</p>`;
            //Explicacion para coger una imagen desde una base de datos
            return fetch(data.current.condition.icon)
        })
        .then((icono)=>{
            return icono.blob();
        })
        .then((imagenblob)=>{
            const img = document.createElement("img");
            img.src = URL.createObjectURL(imagenblob);
            img.alt = "imagen tiempo";
            result.insertAdjacentElement("afterend", img)
        })
        .catch((error) => {
            result.innerHTML = `
            <p>${error.message}</p>
            `;
        })

})