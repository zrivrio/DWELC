import { crearEmpresa, obtenerEmpresas, eliminarEmpresa } from './empresaController.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-alta-empresa');
    const tablaEmpresas = document.getElementById('tabla-empresas').querySelector('tbody');

    // Función para renderizar la tabla
    const renderTablaEmpresas = () => {
        const empresas = obtenerEmpresas();
        console.log(empresas);

        tablaEmpresas.innerHTML = '';
        empresas.forEach(empresa => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${empresa.id}</td>
                <td>${empresa.nombre}</td>
                <td>${empresa.direccion}</td>
                 <td>
                    <button class="editar" data-id="${empresa.id}">Editar</button>
                    <button class="eliminar" data-id="${empresa.id}">Eliminar</button>
                </td>
            `;
            tablaEmpresas.appendChild(fila);
        });
    };

    // Asignar eventos a los botones de editar y eliminar
    document.getElementById('tabla-empresas').addEventListener('click', (e) => {
        if (e.target.classList.contains('editar')) {
            const empresaId = e.target.dataset.id;
            console.log(`Editar empresa con ID: ${empresaId}`);
            alert(`Editar empresa con ID: ${empresaId}`);

            // Aquí puedes implementar la lógica de edición
            const empresas = obtenerEmpresas();
            empresas.forEach(empresa => {
                if (empresa.id == empresaId) {
                    document.querySelector("#nombre").value = empresa.nombre;
                    document.querySelector("#direccion").value = empresa.direccion;

                    document.querySelectorAll("button").forEach(btn => {
                        if (btn.type === "submit") {
                            btn.value = "Guardar Cambios";
                            btn.addEventListener("click", function () {
                                empresa.nombre = document.querySelector("#nombre").value;
                                empresa.direccion = document.querySelector("#direccion").value;
                            });
                        }
                    });

                }
            })
        }

        if (e.target.classList.contains('eliminar')) {
            const empresaId = e.target.dataset.id;
            console.log(`Eliminar empresa con ID: ${empresaId}`);
            if (confirm(`¿Estás seguro de eliminar la empresa con ID: ${empresaId}?`)) {
                eliminarEmpresa(empresaId);
                renderTablaEmpresas(); // Recargar la tabla después de eliminar
            }
        }
    });

    // Manejo del formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = form.nombre.value;
        const direccion = form.direccion.value;

        crearEmpresa(nombre, direccion);
        renderTablaEmpresas();

        // Limpiar el formulario
        form.reset();
    });

    // Cargar la tabla inicialmente
    renderTablaEmpresas();
});
