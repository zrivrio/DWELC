function listarAlbumes() {
  const container = document.querySelector('.albumes-container');

  albumes.forEach(musico => {
    const contenedormusico = document.createElement('div');
    contenedormusico.className = 'musico-card mb-5';

    const musicoCard = document.createElement('div');
    musicoCard.className = 'd-flex flex-wrap justify-content-evenly';

    const nombreMusico = document.createElement('h3');
    nombreMusico.textContent = musico.nombre;
    contenedormusico.appendChild(nombreMusico);

    musico.albumes.forEach(album => {
      const albumCard = document.createElement('div');
      albumCard.className = 'album-card mb-4 col-12 col-md-5';

      albumCard.innerHTML = `
        <h5>${album.titulo}</h5>
        <p><strong>Año de Lanzamiento:</strong> ${album.anio_lanzamiento}</p>
        <p><strong>Canciones:</strong> ${album.canciones}</p>
        <p><strong>Duración Total:</strong> ${album.duracion_total}</p>
        <p><strong>Género:</strong> ${album.genero}</p>
        <img src="${album.imagen_url}" alt="${album.titulo}" class="img-fluid mt-2">
      `;

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

function musicoSelcet() {
  const musicoSelect = document.querySelector('#musico_id');
  musicos.forEach(musico => {
    const option = document.createElement('option');
    option.value = musico.id;
    option.textContent = musico.nombre;
    musicoSelect.appendChild(option);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  listarAlbumes();
});
window.onload = musicoSelcet();  