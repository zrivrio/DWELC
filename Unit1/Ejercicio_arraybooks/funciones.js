//Funcion para mostrar los libros en la tabla
function mostrarlibros() {
    const tabla = document.getElementById("tabla-libros");
    tabla.innerHTML = '';  // Limpiamos la tabla antes de agregar filas nuevas.

    libros.forEach(l => {
        const fila = document.createElement('tr');  // Cada fila es un elemento 'tr'.

        fila.innerHTML = `
            <td>${l.title}</td>
            <td>${l.genre}</td>
            <td>${l.authors.join(', ')}</td>
            <td>${l.pages}</td>
            <td>${l.published}</td>
            <td>${l.read ? 'Sí' : 'No'}</td>
            <td>${l.website ? `<a href="${l.website}" target="_blank">Ver</a>` : 'N/A'}</td>
        `;

        tabla.appendChild(fila);  // Añadimos la fila a la tabla.
    });
}
document.addEventListener("DOMContentLoaded", mostrarlibros);

//Funcion para mostrar una lista de los genros
function mostrargeneros() {
    const generosSet = new Set();
    libros.forEach(l => generosSet.add(l.genre));

    const generos = [...generosSet];
    document.querySelector(".salida").innerHTML = `<strong>Géneros:</strong> ${generos.join(', ')}`
;

}
document.querySelector(".listar_generos").addEventListener("click", mostrargeneros);

//Funcion para mostrar los titulos de los libros que tengan mas de 300 pagina
function librosmas300pag() {
    const librosLargos = libros.filter(libro => libro.pages > 300);
    
    // Cambiar getElementById por querySelector usando la clase "salida"
    document.querySelector('.salida').innerHTML = librosLargos.length 
    ? `<strong>Libros con más de 300 páginas:</strong> ${librosLargos.map(libro => `<div>${libro.title}</div>`).join(" ")}`
    : "No se encontraron libros con más de 300 páginas.";
}

// Asegurarse de que los botones tengan la clase correcta y el listener esté activado
document.querySelector(".titulo_libro_300_pag").addEventListener("click", librosmas300pag);

function librosmas2anno() {
    const haceDosAnno = new Date();
    haceDosAnno.setFullYear(haceDosAnno.getFullYear() - 2);

    // Cambiar 'libros.published' a 'l.published'
    const librosAntiguos = libros.filter(l => new Date(l.published) < haceDosAnno);

    document.querySelector('.salida').innerHTML = librosAntiguos.length
        ? `<strong>Libros publicados hace más de 2 años:</strong> ${librosAntiguos.map(libro => `<div>${libro.title}</div>`).join(' ')}`
        : "No se encontraron libros publicados hace más de 2 años.";
}

document.querySelector(".titulo_libro_2_annos").addEventListener("click", librosmas2anno);

function autores_numerodelibros() {
    const contadorAutores = {}; // Definir el objeto contador

    libros.forEach(libro => {
        libro.authors.forEach(author => {
            if (contadorAutores[author]) {
                contadorAutores[author]++;
            } else {
                contadorAutores[author] = 1;
            }
        });
    });

    let output = '<strong>Autores y Número de Libros:</strong> ';
    
    for (const [autor, cantidad] of Object.entries(contadorAutores)) {
        output += `${autor} - ${cantidad}; <br> `;
    }

    // Cambiar 'output' a 'salida' según lo que tienes en tu HTML
    document.querySelector('.salida').innerHTML = output.trim(); // Cambia a .salida
}

document.querySelector(".autores_libros").addEventListener("click", autores_numerodelibros);

//Funcion para mostrar una lista de los genros
function librosleidos() {
    const librosLeidos = libros.filter(l => l.read).sort((a, b) => new Date(a.published) - new Date(b.published));
    
    document.querySelector('.salida').innerHTML = librosLeidos.length 
        ? `<strong>Libros Leídos Ordenados por Fecha de Publicación:</strong> ${librosLeidos.map(libro => `<p>${libro.title}</p>`).join('')}` // Cambiar 'titulo' por 'title'
        : "No hay libros leídos.";
}

document.querySelector(".libros_leidos").addEventListener("click", librosleidos);

