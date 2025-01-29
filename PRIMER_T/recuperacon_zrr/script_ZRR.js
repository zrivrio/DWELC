const tasks = [
    { titulo: "1A", date: "30-01-2025", prioridad: "a", completada: false, fechaCreacion: "29/01/2025" },
    { titulo: "2B", date: "30-01-2025", prioridad: "b", completada: false, fechaCreacion: "29/01/2025" },
    { titulo: "3C", date: "30-01-2025", prioridad: "c", completada: false, fechaCreacion: "29/01/2025" }
];

function renderTable() {

    const table = document.querySelector("tbody");
    table.innerHTML = ''; // Clear the table contents

    tasks.sort((a, b) => a.prioridad.localeCompare(b.prioridad));
    tasks.forEach((task, index) => {
        const row = table.insertRow();
        row.dataset.index = index;
        row.id = index;

        if (!task.completada) {
            row.insertCell().textContent = task.titulo;
            row.insertCell().textContent = task.date;
            if (task.prioridad === "a") {
                row.insertCell().textContent = "Alta";
                row.className = "rojo";
            } else if (task.prioridad === "b") {
                row.insertCell().textContent = "Media";
                row.className = "amarillo";
            }
            else if (task.prioridad === "c") {
                row.insertCell().textContent = "Baja";
                row.className = "verde";
            }

            if (!task.completada) {
                row.insertCell().textContent = task.completada;
            }
            row.insertCell().textContent = task.fechaCreacion;

            row.insertCell().className = "buttons"
        }
    });
}

function showConsola() {

    let contador = 0;

    tasks.forEach((task) => {

        contador++;
        console.log("-----")

        console.log(contador, "TAREA")

        console.log("Titulo", task.titulo);
        console.log("Fecha", task.date);
        if (task.prioridad === "a") {
            console.log("Prioridad", "Alta");
        } else if (task.prioridad === "b") {
            console.log("Prioridad", "Media");
        }
        else if (task.prioridad === "c") {
            console.log("Prioridad", "Baja");
        }
        console.log("Completada", task.completada);
        console.log("-----")

    });
}


function recorreForm() {
    const fields = ["titulo", "date", "prioridad"];
    fields.forEach(field => {
        const input = document.querySelector(`#${field}`);
        input.addEventListener('blur', () => validateField(field));
    });
}
function validateField(field) {
    const input = document.querySelector(`#${field}`);
    const value = input.value;
    const errorSpan = document.querySelector(`#${field}Error`);
    errorSpan.textContent = '';

    switch (field) {
        case "titulo":
            if (value.length < 10 || value.length > 50) {
                errorSpan.textContent = 'El titulo solo pude tener entre 10 y 50 caracteres';
                return false;
            } else if (value.trim() === " ") {
                errorSpan.textContent = 'El nombre es obligatorio.';
                return false;
            }
            break;
        case "date":
            const fechaActual = new Date();
            const fechaForm = new Date(value);
            if (fechaForm < fechaActual) {
                errorSpan.textContent = 'La fecha no puede ser anterior al dia actual';
                return false;
            }
            break;
        case "prioridad":
            if (value === '') {
                errorSpan.textContent = 'Seleccione una prioridad.';
                return false;
            }
            break;
    }
    return true;
}

function addTarea() {

    const form = document.querySelector("#completeForm");
    const titulo = document.querySelector("#titulo").value;
    const dateValue = document.querySelector("#date").value;
    const date = new Date(dateValue)
    date = date.getDate();
    const prioridad = document.querySelector("#prioridad").value;
    const completa = "false";
    const fechaCreacion = new Date();



    const newTask = { titulo, date, prioridad, completa, fechaCreacion };
    tasks.push(newTask);
    renderTable();
    form.reset();

}


window.onload = () => {

    renderTable();
    recorreForm();

    document.querySelector("#consola").addEventListener("click", showConsola);
    document.querySelector("#crear").addEventListener("click", addTarea);

    document.querySelector("table").addEventListener("click", function (event) {
        const target = event.target;
        const row = target.closest('tr');
        let selectedRowIndex = row.dataset.index;
        const trActions = row.querySelector(".buttons");
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETE';
        deleteButton.classList.add('delete-btn');
        const editButton = document.createElement('button');
        editButton.textContent = 'EDIT';
        editButton.classList.add('edit-btn');
        const completeButton = document.createElement('button');
        completeButton.textContent = 'COMPLETE';
        completeButton.classList.add('complete-btn');
        trActions.appendChild(deleteButton);
        trActions.appendChild(editButton);
        trActions.appendChild(completeButton);

    });
    document.querySelector("table").addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains('delete-btn')) {
            const row = target.closest('tr');
            const index = row.dataset.index;
            const valor = confirm("Deseas eliminarlo?")
            if (valor) {

                tasks.splice(index, 1);
            }
            renderTable();
            return;
        }
        else if(target.classList.contains('edit-btn')){
            const form = document.querySelector("form");
            const titulo = document.querySelector("#titulo");
            const date = document.querySelector("#date");
            const prioridad = document.querySelector("#prioridad");
            const row = target.closest('tr');
            selectedRowIndex = row.dataset.index;


            const task = tasks[selectedRowIndex];

            titulo.value = task.titulo;
            date.value = new Date(task.date);
            prioridad.value = task.prioridad;

            const actualizar = document.createElement("button");
            actualizar.className = "actualizar";
            actualizar.textContent = "Actualizar Task";

            form.appendChild(actualizar);
            const resetear = document.createElement("button");
            resetear.className = "resetear";
            resetear.textContent = "Reseterar Task";

            form.appendChild(resetear);

            document.querySelector(".actualizar").addEventListener("click", function () {
                const duplicate = tasks.some((comprobar, index) => {
                    return index != selectedRowIndex &&
                           comprobar.titulo === titulo.value
                });

                
                if (duplicate) {
                 alert("Ya hay una tarea con este nombre");
                    return;
                }

                titulo.value = task.titulo;
                date.value = new Date(task.date);
                prioridad.value = task.prioridad;
            
                if (selectedRowIndex !== null) {
                    const task = tasks[selectedRowIndex];
                    task.titulo = titulo.value;
                    task.date = date.value;
                    task.prioridad = prioridad.value;
                    selectedRowIndex = null;
                } else {
                    tasks.push({
                        titulo: titulo.value,
                        date: date.value,
                        prioridad: prioridad.value,
                        completada: false,
                        fechaCreacion: new Date()
                    });
                }
                renderTable();
              

                
            })
            document.querySelector(".resetear").addEventListener("click", function () {
                form.reset();
            });
        } else if (target.classList.contains('complete-btn')){
            const row = target.closest('tr');
            selectedRowIndex = row.dataset.index;
            const task = tasks[selectedRowIndex];
            task.completada = true;
            renderTable();
        }
    })
};