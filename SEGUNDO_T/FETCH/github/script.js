document.querySelector("#buscar").addEventListener("click", async (event) => {
    event.preventDefault();

    const texto = document.querySelector("#nombre").value || "zrivrio";
    const result = document.querySelector("#result");

    const url = `https://api.github.com/users/${texto}`;

    await fetch(url)
        .then((response) => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message);
                });
            }
            return response.json();
        })
        .then(async (data) => {
            result.innerHTML = `
                <p>Fecha de Creación: ${new Date(data.created_at).toLocaleDateString()}</p>
                <p>Seguidores: ${data.followers}</p>
                <div id="listaSeguidores"></div>
                <p>-------------------------------------</p>
                <p>Seguidos: ${data.following}</p>
                <div id="listaSeguidos"></div>
            `;

            await fetchDatosUsuarios(`https://api.github.com/users/${texto}/followers`, "#listaSeguidores", "Seguidores");
            await fetchDatosUsuarios(`https://api.github.com/users/${texto}/following`, "#listaSeguidos", "Seguidos");
        })
        .catch((error) => {
            result.innerHTML = `<p>Error: ${error.message}</p>`;
        });
});

async function fetchDatosUsuarios(url, idDiv, tipo) {
    await fetch(url)
        .then((response) => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message);
                });
            }
            return response.json();
        })
        .then(async (data) => {
            const div = document.querySelector(idDiv);
            if (!data.length) {
                div.innerHTML = `<p>No se encontraron ${tipo.toLowerCase()}.</p>`;
                return;
            }

           const detallesPromises = await data.map(u =>
                fetch(u.url)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`Error al obtener detalles del usuario ${u.login}`);
                        }
                        return response.json();
                    })
            );

            Promise.all(detallesPromises)
                .then((usuarios) => {
                    const html = usuarios.map(usuario => `
                        <p>
                            Nombre: ${usuario.login}<br>
                            Fecha de Creación: ${new Date(usuario.created_at).toLocaleDateString()}
                        </p>
                    `).join("");

                    div.innerHTML = html;
                })
                .catch((error) => {
                    div.innerHTML = `<p>Error: ${error.message}</p>`;
                });
        })
        .catch((error) => {
            const div = document.querySelector(idDiv);
            div.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}