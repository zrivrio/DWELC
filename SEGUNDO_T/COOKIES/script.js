// Funcion para crear la cookie
function setCookie(name, value, minutes){
    const date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000); // Convierte el tiempo especificado de minutos a milisegundos.
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`; // Crea la cookie.
}

// Funcion para obtener una cookie
function getCookie(name){
    const cookies = document.cookie.split("; "); // Obtiene toda la lista de las cookies
    for( let cookie of cookies){ // Recorre la lista de cookies
        const [key, value] = cookie.split("="); // Crea una variable donde vas a guardar la clave y el valor
        if(key == name){
            return value; // Comprueba si la clave es igual que el nombre y si lo es devuelve el valor de la cookie
        }
    }
    return null; // Mueve el return null fuera del bucle para que se ejecute solo si no se encuentra la cookie
}

// Funcion para eliminar una cookie
function deleteCookie(name){
    const date = new Date(0); // Crea una fecha en el pasado.
    document.cookie = `${name}=;expires=${date.toUTCString()};path=/`; // Modifica el tiempo de expiración de la cookie para que se elimine
}

// Funcion para manejar las Cookies
function CookieManager() {
    const Y = 5;  // Tiempo de inactividad en minutos
    const X = 10; // Tiempo de expiración de la cookie en minutos
    
    // Comprobar si el nombre del usuario se encuentra en una cookie
    const userName = getCookie('username');
    // Comprueba si es la primera vez en la página
    const firstVisit = !userName;

    if (!userName) {
        mostrarFormularioNombre(X);
    } else {
        mostrarPaginaUsuario(userName, firstVisit, X, Y);
    }
}

function mostrarFormularioNombre(X) {
    document.body.innerHTML = `
        <form id="nameForm">
            <label for="username">Ingresa tu nombre:</label>
            <input type="text" id="username" required />
            <button type="submit">Enviar</button>
        </form>
    `;

    document.getElementById('nameForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('username').value;
        setCookie('username', name, X);
        mostrarPaginaUsuario(name, true, X, 5);  // Se llama a mostrarPaginaUsuario directamente sin recargar
    });
}

function mostrarPaginaUsuario(userName, firstVisit, X, Y) {
    document.body.innerHTML = `
        <h1>¡Bienvenido ${firstVisit ? "al sitio!" : "de nuevo, " + userName}!</h1>
        <textarea id="commentBox" placeholder="Escribe tu comentario aquí..."></textarea>
    `;

    const comment = getCookie('userComment');
    if (comment) {
        document.getElementById('commentBox').value = comment;
    }

    document.getElementById('commentBox').addEventListener('input', (e) => {
        setCookie('userComment', e.target.value, X);
    });

    configurarConfirmacionUsuario(userName, X, Y);
}

let intervalId;

function configurarConfirmacionUsuario(userName, X, Y) {
    // Se establece el intervalo para preguntar al usuario si sigue allí
    intervalId = setInterval(() => {
        const continueSession = confirm('¿Sigues ahí?');
        if (continueSession) {
            // El usuario sigue activo, renovamos la cookie
            setCookie('username', userName, X);
        } else {
            // El usuario no responde, cerramos la sesión
            deleteCookie('username');
            deleteCookie('userComment');
            clearInterval(intervalId); // Detenemos el intervalo
            alert('Tu sesión ha terminado');
            location.reload(); // Recargamos la página después de cerrar la sesión
        }
    }, Y * 60 * 1000); // Intervalo en minutos (Y minutos * 60 segundos * 1000 milisegundos)
}

window.onload = ()=>{
    CookieManager();

    // Eliminar cookie al cerrar el navegador
    window.addEventListener('beforeunload', () => {
        deleteCookie('username');
        deleteCookie('userComment');
        clearInterval(intervalId); // Aseguramos que se limpie el intervalo al cerrar la página
    });
};
