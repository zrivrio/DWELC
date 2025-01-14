
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
let lista = [];  
let contador = 1;  

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
    if (nombre.trim() !== "" && PApellido.trim() !== "" && SApellido.trim() !== "" &&
        Tdocumentacion.trim() !== "" && Ndocumentacion.trim() !== "" && telefono.trim() !== "") {
        
        if (contador < 5) { 
            const persona = {
                nombre,
                PApellido,
                SApellido,
                Tdocumentacion,
                Ndocumentacion,
                telefono
            };
            lista.push(persona); 
            contador++;  
            mostrarPersonas();  

        } else {
            alert("Solo se pueden agregar 5 personas.");
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

function mostrarPersonas() {
    const personaAutorizadaDiv = document.querySelector(".listapersonas");
    personaAutorizadaDiv.innerHTML = "";  

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

// ELIMINAR PERSONAS

document.querySelector("#quitar").addEventListener("click", function() {
    const Ndocumentacion = document.querySelector("#Ndocumentacion").value.trim(); 
    
    if (Ndocumentacion === "") {
        alert("Por favor, ingresa el NIF/NIE/Pasaporte de la persona a eliminar.");
        return;
    }
    
    const index = lista.findIndex(persona => persona.Ndocumentacion === Ndocumentacion);
    
    if (index !== -1) {  
        lista.splice(index, 1);
        contador--;  
        const personaAutorizadaDiv = document.querySelector("#personaAutorizada"); 
        const personaCount = `${contador}º Persona autorizada`; 
        personaAutorizadaDiv.innerHTML = personaCount;  
        mostrarPersonas();

        alert("Persona eliminada correctamente.");
    } else {
        alert("No se encontró una persona con ese NIF/NIE/Pasaporte.");
    }
});

document.querySelector("#agregar").addEventListener("click", agregarPersonas);
document.querySelector("DOM")
// PROVINCIAS
function addComunidad() {
    const select = document.querySelector("#comunidad");
    comunidades.forEach(comunidad => {
        const option = document.createElement("option");
        option.innerHTML = comunidad.label
        select.appendChild(option);
    });

}
window.onload = addComunidad;

let provincias = [];
function addProvincias() {
    const selectcomunidades = document.querySelector("#comunidad");
    const select = document.querySelector("#provincias");

    comunidades.forEach(comunidad => {
        if(selectcomunidades.value === comunidad.label){
            provincias = comunidad.provinces;
        }
    })
    select.innerHTML = "";
    provincias.forEach(provincia => {
        const option = document.createElement("option");
        option.innerHTML = provincia.label
        select.appendChild(option);
        
    })
    
}
document.querySelector("#comunidad").addEventListener("blur",addProvincias);

function addMunicipio() {
    let municipios = [];
    const selectprovincias = document.querySelector("#provincias");
    const select = document.querySelector("#municipios");

    provincias.forEach(provincia => {
        if(selectprovincias.value === provincia.label){
            municipios = provincia.towns;
        }
    })
    select.innerHTML = "";
    municipios.forEach(municipio => {
        const option = document.createElement("option");
        option.innerHTML = municipio.label
        select.appendChild(option);
    })
}
document.querySelector("#provincias").addEventListener("blur",addMunicipio);
