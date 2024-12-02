// Función que se ejecuta cuando la ventana se ha cargado completamente
window.onload = function () {
    const container = document.querySelector('.musicos-container');
  
    // Recorre el array 'musicos' para generar una tarjeta por cada músico
    musicos.forEach(musico => {
      const card = document.createElement('div');
      card.className = 'musico-card col-lg-3 col-md-4 col-sm-6'; 
  
      card.innerHTML = `
        <div class="musicos-card h-100">
          <!-- Imagen del músico -->
          <img src="${musico.imagen_url}" alt="${musico.nombre}" class="card-img-top">
          <div class="card-body">
            <!-- Nombre del músico -->
            <h5 class="card-title">${musico.nombre}</h5>
            <!-- Información adicional sobre el músico -->
            <p><strong>Género:</strong> ${musico.genero}</p>
            <p><strong>Nacionalidad:</strong> ${musico.nacionalidad}</p>
            <p><strong>Año de Debut:</strong> ${musico.anio_debut}</p>
            <p><strong>Retirado:</strong> ${musico.retirado ? 'Sí' : 'No'}</p>
            <p><strong>Instrumentos:</strong> ${musico.instrumentos.join(', ')}</p>
            <p><strong>Premios:</strong> ${musico.premios.join(', ') || 'Ninguno'}</p>
            <p><strong>Ubicación:</strong> ${musico.ubicacion.ciudad}, ${musico.ubicacion.pais}</p>
            <p><strong>Coordenadas:</strong> ${musico.ubicacion.coordenadas.latitud}, ${musico.ubicacion.coordenadas.longitud}</p>
            <!-- Botón de Editar que redirige a la página de edición del músico -->
            <a href="./../Musicos/editarMusicos.html?id=${musico.id}" class="btn btn-customM mt-4">
              Editar
            </a>
          </div>
        </div>
      `;
  
      // Añade la tarjeta del músico al contenedor principal
      container.appendChild(card);
    });
  };
  