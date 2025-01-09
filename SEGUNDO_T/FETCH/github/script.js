
document.querySelector("#buscar").addEventListener("click", (event) => {
    event.preventDefault();
    const texto = document.querySelector("#nombre");
    const result = document.querySelector("#result");
    const url = `https://api.github.com/users/${texto.value}`;
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
            console.log(data);
            result.innerHTML = `
            <p>Fecha de Creacion: ${data.created_at} </p>
            <p>Seguidores: ${data.followers} </p>
            <p id="listaSeguidores"></p>
             <p>Seguidos: ${data.following} </p>
            <p id="listaSeguidos"></p>
            `;
            const followersList =  `https://api.github.com/users/${texto.value}/followers`
           const followingList =  `https://api.github.com/users/${texto.value}/following`
            fetch(followersList)
           .then((responseFollower) => {
            console.log(responseFollower);
            if (!responseFollower.ok) {
                return responseFollower.json().then(err => {
                    throw new Error('Error:' + err.error.message);
                })
            } else {
                return responseFollower.json();
            }
            })
            .then ((dataFollower) =>{
            console.log(dataFollower)
             const listaSeguidores = document.querySelector("#listaSeguidores");
             dataFollower.forEach(f => {
                listaSeguidores.innerHTML = `
                <p>Nombre:${f.login} Fecha de creacion: ${f.created_at} </p>
                `;
                });
            })
            .catch((error) => {
                result.innerHTML = `
                <p>${error.message}</p>
                `;
            })
            fetch(followingList)
            .then((responseFollowing) => {
             console.log(responseFollowing);
             if (!responseFollowing.ok) {
                 return responseFollowing.json().then(err => {
                     throw new Error('Error:' + err.error.message);
                 })
             } else {
                 return responseFollowing.json();
             }
             })
             .then ((dataFollowing) =>{
             console.log(dataFollowing)
              const listaSeguidos = document.querySelector("#listaSeguidos");
              dataFollowing.forEach(f => {
                 listaSeguidos.innerHTML = `
                 <p>Nombre:${f.login} Fecha de creacion: ${f.created_at} </p>
                 `;
                 });
             })
             .catch((error) => {
                 result.innerHTML = `
                 <p>${error.message}</p>
                 `;
             })
        })
        .catch((error) => {
            result.innerHTML = `
            <p>${error.message}</p>
            `;
        })

})