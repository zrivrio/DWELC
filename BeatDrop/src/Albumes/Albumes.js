// Función para listar los álbumes de los músicos
function listarAlbumes() {
  const container = document.querySelector('.albumes-container');

  // Recorre cada músico en la lista de álbumes
  albumes.forEach(musico => {
    const contenedormusico = document.createElement('div');
    contenedormusico.className = 'musico-card mb-5';

    const musicoCard = document.createElement('div');
    musicoCard.className = 'd-flex flex-wrap justify-content-evenly';

    const nombreMusico = document.createElement('h3');
    nombreMusico.textContent = musico.nombre;
    contenedormusico.appendChild(nombreMusico);

    // Recorre cada álbum del músico
    musico.albumes.forEach(album => {
      const albumCard = document.createElement('div');
      albumCard.className = 'album-card mb-4 col-12 col-md-5';

      // Agrega la información del álbum dentro de la tarjeta
      albumCard.innerHTML = `
        <h5>${album.titulo}</h5>
        <p><strong>Año de Lanzamiento:</strong> ${album.anio_lanzamiento}</p>
        <p><strong>Canciones:</strong> ${album.canciones}</p>
        <p><strong>Duración Total:</strong> ${album.duracion_total}</p>
        <p><strong>Género:</strong> ${album.genero}</p>
        <img src="${album.imagen_url}" alt="${album.titulo}" class="img-fluid mt-2">
      `;

      // Crea un párrafo con un botón para editar el álbum
      const editarP = document.createElement('p');
      const editarButton = document.createElement('a');
      editarButton.className = 'btn btn-customA mt-4';
      editarButton.href = `./../Albumes/editarAlbumes.html?id=${album.id}`;
      editarButton.textContent = 'Editar';
      editarP.appendChild(editarButton);

      albumCard.appendChild(editarP);
      musicoCard.appendChild(albumCard);
    });
    
    contenedormusico.appendChild(musicoCard);
    container.appendChild(contenedormusico);
  });
}

// Función para llenar el select con los músicos
function musicoSelcet() {

  const musicoSelect = document.querySelector('#musico_id');

  // Recorre la lista de músicos y agrega cada uno como opción en el select
  musicos.forEach(musico => {
    const option = document.createElement('option');
    option.value = musico.id;
    option.textContent = musico.nombre;
    musicoSelect.appendChild(option);
  });
}

// Ejecuta la función listarAlbumes cuando el contenido se ha cargado completamente
document.addEventListener('DOMContentLoaded', () => {
  listarAlbumes();
});

// Llama a la función musicoSelcet al cargar la ventana
window.onload = musicoSelcet();
