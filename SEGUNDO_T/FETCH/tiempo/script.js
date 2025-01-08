
document.querySelector("#ciudadButton").addEventListener("click", (event) => {
    event.preventDefault();
    const texto = document.querySelector("#ciudadTexto");
    const result = document.querySelector("#result");
    const url = `http://api.weatherapi.com/v1/current.json?key=d926c7e0050d48faaec90813250801&q=${texto.value}&aqi=no`;
    fetch(url)
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error('Error:' + err.error.message);
                })
            } else {
                return response.json();
            }
        })
        .then((data) => {
            result.innerHTML = `
            <p>${data.location.name} ${data.location.region} ${data.location.country} ${data.current.temp_c}ºC</p>
            <img src="${data.current.condition.icon}" alt="Imagen Tiempo">`;
        })
        .catch((error) => {
            result.innerHTML = `
            <p>${error.message}</p>
            `;
        })

})