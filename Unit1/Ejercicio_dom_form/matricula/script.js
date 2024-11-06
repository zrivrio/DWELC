
//VALIDAR DNI

function validarDNI() {
    const dni = document.querySelector("#Ndocumentacion").value;
    const expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni)) {
        let numeros = dni.substring(0, dni.length - 1);
        let letra = dni.substring(dni.length - 1, dni.length).toUpperCase();
        let letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
        
        let letraCorrecta = letras.charAt(parseInt(numeros) % 23);
        
        if (letra !== letraCorrecta) {
            document.querySelector("#Ndocumentacion").classList.add('borde', 'border-danger');
        } else {
            document.querySelector("#Ndocumentacion").classList.remove('borde', 'border-danger');
        }
    } else {

        document.querySelector("#Ndocumentacion").classList.add('borde', 'border-danger');
    }
}
document.querySelector("#agregar").addEventListener("click", validarDNI);

// VALIDAR NOMBRE Y PRIMER APELLIDO

document.querySelector("#agregar").addEventListener("click", function() {
    const nombre = document.querySelector("#nombre");
    const PApellido = document.querySelector("#PApellido");

    if (nombre.value.trim() === "" || PApellido.value.trim() === "") {
        nombre.classList.add('borde', 'border-danger');
        PApellido.classList.add('borde', 'border-danger');
    } else {
        nombre.classList.remove('borde', 'border-danger');
        PApellido.classList.remove('borde', 'border-danger');
    }
});

//AGREGAR 5 PERSONAS
let lista = [];  // Lista de personas
let contador = 1;  // Contador de personas agregadas

// Función para agregar una persona a la lista
function agregarPersonas() {

    const personaAutorizadaDiv = document.querySelector("#personaAutorizada"); 
    const personaCount = `${contador}º Persona autorizada`; 
    personaAutorizadaDiv.innerHTML = personaCount; 

    const nombre = document.querySelector("#nombre").value;
    const PApellido = document.querySelector("#PApellido").value;
    const SApellido = document.querySelector("#SApellido").value;
    const Tdocumentacion = document.querySelector("#Tdocumentacion").value;
    const Ndocumentacion = document.querySelector("#Ndocumentacion").value;
    const telefono = document.querySelector("#telefono").value;

    // Verifica si todos los campos están completos
    if (nombre.trim() !== "" && PApellido.trim() !== "" && SApellido.trim() !== "" &&
        Tdocumentacion.trim() !== "" && Ndocumentacion.trim() !== "" && telefono.trim() !== "") {
        
        if (contador < 5) { // Solo se pueden agregar hasta 5 personas
            const persona = {
                nombre,
                PApellido,
                SApellido,
                Tdocumentacion,
                Ndocumentacion,
                telefono
            };
            lista.push(persona);  // Agregar la persona a la lista
            contador++;  // Incrementar el contador de personas
            mostrarPersonas();  // Mostrar las personas en el DOM

            // Actualizar el texto de la persona autorizada
        } else {
            alert("Solo se pueden agregar 5 personas.");
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

// Función para mostrar las personas en el DOM
function mostrarPersonas() {
    const personaAutorizadaDiv = document.querySelector(".listapersonas");
    personaAutorizadaDiv.innerHTML = "";  // Limpiar el contenedor de personas

    // Crear el nuevo contenedor para los detalles de las personas
    lista.forEach((persona, index) => {
        const personaDiv = document.createElement("div");
        personaDiv.classList.add("persona");
        personaDiv.innerHTML = `
            <p><strong>Persona ${index + 1}:</strong></p>
            <p><strong>Nombre:</strong> ${persona.nombre}</p>
            <p><strong>Primer Apellido:</strong> ${persona.PApellido}</p>
            <p><strong>Segundo Apellido:</strong> ${persona.SApellido}</p>
            <p><strong>Tipo de Documentación:</strong> ${persona.Tdocumentacion}</p>
            <p><strong>NIF/NIE/Pasaporte:</strong> ${persona.Ndocumentacion}</p>
            <p><strong>Teléfono:</strong> ${persona.telefono}</p>
            <hr>
        `;
        personaAutorizadaDiv.appendChild(personaDiv);
    });
}

// Función para eliminar una persona
document.querySelector("#quitar").addEventListener("click", function() {
    const Ndocumentacion = document.querySelector("#Ndocumentacion").value.trim();  // Obtenemos el valor de Ndocumentacion
    
    if (Ndocumentacion === "") {
        alert("Por favor, ingresa el NIF/NIE/Pasaporte de la persona a eliminar.");
        return;
    }
    
    // Buscar el índice de la persona por Ndocumentacion
    const index = lista.findIndex(persona => persona.Ndocumentacion === Ndocumentacion);
    
    if (index !== -1) {  // Si la persona existe en la lista
        // Eliminar la persona de la lista
        lista.splice(index, 1);
        contador--;  // Decrementar el contador
        const personaAutorizadaDiv = document.querySelector("#personaAutorizada"); 
        const personaCount = `${contador}º Persona autorizada`; 
        personaAutorizadaDiv.innerHTML = personaCount;   // Volver a mostrar las personas actualizadas
        mostrarPersonas();

        alert("Persona eliminada correctamente.");
    } else {
        alert("No se encontró una persona con ese NIF/NIE/Pasaporte.");
    }
});

// Asignar la función de agregar persona al evento de clic del botón
document.querySelector("#agregar").addEventListener("click", agregarPersonas);

