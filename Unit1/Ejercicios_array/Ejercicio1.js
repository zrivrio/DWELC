let array_estudiantes = ["John Doe",
    "Jane Smith",
    "Alice Johnson Martinez",
    "Bob Williams",
    "Charlie Brown",
    "Diana Lopez Sanchez",
    "Eve Martinez"];


    function ordenar_por_apellido(lista_alumnos) {
        return lista_alumnos.sort((a,b) =>{
            const nombre_a = a.split(" ");
            const nombre_b = b.split(" ");

            const apelliod_a = nombre_a[1];
            const apelliod_b = nombre_b[1];

            return apelliod_a.localeCompare(apelliod_b);

        })
    }

    let lista_alumnos_ordenada = ordenar_por_apellido(array_estudiantes);

    console.log(lista_alumnos_ordenada);
