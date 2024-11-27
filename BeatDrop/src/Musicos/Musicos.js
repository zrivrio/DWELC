window.onload = function () {
    const container = document.querySelector('.musicos-container');
  
    // Crear tarjetas para cada músico
    musicos.forEach(musico => {
      const card = document.createElement('div');
      card.className = 'musico-card col-lg-3 col-md-4 col-sm-6'; // Responsivo: 4 columnas en pantallas grandes, 3 en medianas, 2 en pequeñas
  
      card.innerHTML = `
        <div class="musicos-card h-100">
          <img src="${musico.imagen_url}" alt="${musico.nombre}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${musico.nombre}</h5>
            <p><strong>Género:</strong> ${musico.genero}</p>
            <p><strong>Nacionalidad:</strong> ${musico.nacionalidad}</p>
            <p><strong>Año de Debut:</strong> ${musico.anio_debut}</p>
            <p><strong>Instrumentos:</strong> ${musico.instrumentos.join(', ')}</p>
            <p><strong>Premios:</strong> ${musico.premios.join(', ') || 'Ninguno'}</p>
            <p><strong>Ubicación:</strong> ${musico.ubicacion.ciudad}, ${musico.ubicacion.pais}</p>
            <p><strong>Coordenadas:</strong> ${musico.ubicacion.coordenadas.latitud}, ${musico.ubicacion.coordenadas.longitud}</p>
          </div>
        </div>
      `;
  
      container.appendChild(card);
    });
  };
  