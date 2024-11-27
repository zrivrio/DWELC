window.onload = function () {
    const container = document.querySelector('.albumes-container');
    
    albumes.forEach(musico => {
      // Crear el contenedor para cada músico
      const musicoCard = document.createElement('div');
      musicoCard.className = 'musico-card mb-4';

      // Insertar el nombre del músico
      musicoCard.innerHTML = `
        <h3>${musico.nombre}</h3>
        <div class="albumes">
      `;

      // Crear las tarjetas de los álbumes
      musico.albumes.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.className = 'album-card mb-3';
        
        albumCard.innerHTML = `
          <h5>${album.titulo}</h5>
          <p><strong>Año de Lanzamiento:</strong> ${album.anio_lanzamiento}</p>
          <p><strong>Canciones:</strong> ${album.canciones}</p>
          <p><strong>Duración Total:</strong> ${album.duracion_total}</p>
          <p><strong>Género:</strong> ${album.genero}</p>
          <img src="${album.imagen_url}" alt="${album.titulo}" class="img-fluid mt-2">
          `;
        
        musicoCard.appendChild(albumCard);
      });

      musicoCard.innerHTML += '</div>';

      // Agregar la tarjeta del músico al contenedor
      container.appendChild(musicoCard);
    });
  };