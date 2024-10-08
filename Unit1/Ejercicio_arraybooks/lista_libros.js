const libros = [
    {
      title: "Noche de Verbena",
      genre: "Comedia",
      authors: ["Raquel Arbeteta"],
      pages: 488,
      published: "2024-09-26",
      read: false,
      website: "https://tbreditorial.com/libro/noche-de-verbena/"
    },
    {
      title: "Un destino de ira y fuego",
      genre: "Fatasia",
      authors: ["K.A. Tucker"],
      pages: 640,
      published: "2023-05-18",
      read: true,
      website: "https://tbreditorial.com/libro/destino-de-ira-fuego/"
    },
    {
        title: "Una maldicion de sangre  y piedra",
        genre: "Fatasia",
        authors: ["K.A. Tucker"],
        pages: 576,
        published: "2023-10-26",
        read: true,
        website: "https://tbreditorial.com/libro/una-maldicion-de-sangre-y-piedra/"
    },{
        title: "Cien años de soledad",
        genre: "Realismo mágico",
        authors: ["Gabriel García Márquez"],
        pages: 471,
        published: "1967-05-30",
        read: true,
        website: "https://es.wikipedia.org/wiki/Cien_a%C3%B1os_de_soledad"
      },
      {
        title: "Don Quijote de la Mancha",
        genre: "Novela",
        authors: ["Miguel de Cervantes"],
        pages: 863,
        published: "1605-01-16",
        read: false,
        website: "https://es.wikipedia.org/wiki/Don_Quijote_de_la_Mancha"
      },
      {
        title: "La sombra del viento",
        genre: "Misterio, Novela histórica",
        authors: ["Carlos Ruiz Zafón"],
        pages: 565,
        published: "2001-04-01",
        read: true,
        website: ""
      },,
      {
        title: "Rayuela",
        genre: "Novela",
        authors: ["Julio Cortázar"],
        pages: 736,
        published: "1963-02-28",
        read: true,
        website: "https://es.wikipedia.org/wiki/Rayuela_(novela)"
      },
      {
        title: "El amor en los tiempos del cólera",
        genre: "Romance, Realismo mágico",
        authors: ["Gabriel García Márquez"],
        pages: 368,
        published: "1985-09-05",
        read: false,
        website: "https://es.wikipedia.org/wiki/El_amor_en_los_tiempos_del_c%C3%B3lera"
      },
      {
        title: "Pedro Páramo",
        genre: "Realismo mágico",
        authors: ["Juan Rulfo"],
        pages: 124,
        published: "1955-03-19",
        read: true,
        website: "https://es.wikipedia.org/wiki/Pedro_P%C3%A1ramo"
      },
      {
        title: "La casa de los espíritus",
        genre: "Realismo mágico, Drama",
        authors: ["Isabel Allende"],
        pages: 448,
        published: "1982-11-01",
        read: false,
        website: "https://es.wikipedia.org/wiki/La_casa_de_los_esp%C3%ADritus"
      },
      {
        title: "Los detectives salvajes",
        genre: "Novela",
        authors: ["Roberto Bolaño"],
        pages: 609,
        published: "1998-11-01",
        read: true,
        website: "https://es.wikipedia.org/wiki/Los_detectives_salvajes"
      }
  ];

//1. Usar forEach para imprimir el título de cada libro
libros.forEach(libro => {
   console.log(libro.title);
});

//2. Usar filter para obtener los libros leídos
const librosLeidos = libros.filter(libro => libro.read);
console.log(librosLeidos);

//3. Usar map para crear un array con los títulos de los libros
const titulos = libros.map(libro => libro.title);
console.log(titulos);

//4. Usar reduce para contar el total de páginas de todos los libros
const totalPaginas = libros.reduce((total, libro) => total + libro.pages, 0);
console.log(`Total de páginas: ${totalPaginas}`);

//5. Usar find para encontrar el primer libro que no haya sido leído
const libroNoLeido = libros.find(libro => !libro.read);
console.log(libroNoLeido);

//6. Usar some para verificar si hay al menos un libro que no ha sido leído
const hayLibrosNoLeidos = libros.some(libro => !libro.read);
console.log(hayLibrosNoLeidos);  // true o false
