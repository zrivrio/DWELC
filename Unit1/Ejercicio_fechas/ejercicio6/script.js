const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
        let festivos = [
            new Date("2024-11-01"),
            new Date("2024-12-06"),
            new Date("2024-12-09"),
            new Date("2024-12-23"),
            new Date("2024-12-24"),
            new Date("2024-12-25"),
            new Date("2024-12-26"),
            new Date("2024-12-27"),
            new Date("2024-12-30"),
            new Date("2024-12-31"),
            new Date("2025-01-01"),
            new Date("2025-01-02"),
            new Date("2025-01-03"),
            new Date("2025-01-06"),
            new Date("2025-01-07"),
            new Date("2025-02-24"),
            new Date("2025-02-25"),
            new Date("2025-02-26"),
            new Date("2025-02-27"),
            new Date("2025-02-28")
        ];

        const festivosCadena = festivos.map(f => f.toDateString());
        console.log(festivosCadena); // Imprimir las fechas festivas como cadenas

        let diaSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
        let hoy = new Date();
        let fin = new Date("2025-04-11");
        let cont = 0; // Contador de días lectivos
        let contaCelda = 0; // Contador de celdas en la tabla

        function tablaLectivos() {
            let calendario = document.querySelector(".calendario");
            let test = new Date(hoy.getFullYear(), hoy.getMonth(), 1); // Para empezar cada mes en día 1

            while (test <= fin) {
                // Crear cabecera del mes
                let cabeceraMes = document.createElement('h2');
                cabeceraMes.textContent = meses[test.getMonth()] + " " + test.getFullYear();
                calendario.appendChild(cabeceraMes);

                // Crear tabla para el mes
                let tabla = document.createElement('table');
                let cabeza = document.createElement('thead');
                let trCabeza = document.createElement('tr');

                // Cabecera de días de la semana
                for (let i = 0; i < 7; i++) {
                    let th = document.createElement('th');
                    th.textContent = diaSemana[i];
                    trCabeza.appendChild(th);
                }
                cabeza.appendChild(trCabeza);
                tabla.appendChild(cabeza);

                let cuerpo = document.createElement('tbody');
                let tr = document.createElement('tr');
                contaCelda = 0; // Reiniciar contador de celdas al iniciar una nueva semana

                // Calcular huecos al principio del mes
                let diaSem1 = test.getDay(); // Día de la semana del primer día del mes

                // Calcular huecos vacíos al inicio del mes
                for (let i = 0; i < diaSem1; i++) {
                    let td = document.createElement('td');
                    tr.appendChild(td);
                    contaCelda++;
                }

                // Número de días en el mes
                let numDiasMes = new Date(test.getFullYear(), test.getMonth() + 1, 0).getDate();

                for (let dia = 1; dia <= numDiasMes; dia++) {
                    let fechaDia = new Date(test.getFullYear(), test.getMonth(), dia);

                    // Contar celdas y crear nueva fila si se llega a 7
                    if (contaCelda == 7) {
                        cuerpo.appendChild(tr);
                        tr = document.createElement('tr');
                        contaCelda = 0; // Reiniciar contador al iniciar una nueva fila
                    }

                    let td = document.createElement('td');
                    td.textContent = dia + '\n' + diaSemana[fechaDia.getDay()];

                    // Comprobar si el día es festivo, de fin de semana o lectivo
                    if (fechaDia >= hoy && fechaDia <= fin) {
                        let diaCadena = fechaDia.toDateString();
                        let esfestivo = festivosCadena.includes(diaCadena);

                        if (esfestivo) {
                            td.classList.add('festivo');
                        } else if (fechaDia.getDay() === 0 || fechaDia.getDay() === 6) {
                            td.classList.add('finde');
                        } else {
                            td.classList.add('lectivo');
                            cont++;
                        }
                    } else {
                        td.classList.add('out');
                    }
                    tr.appendChild(td);
                    contaCelda++;
                }

                // Rellenar huecos vacíos al final del mes
                while (contaCelda < 7 && contaCelda > 0) {
                    let td = document.createElement('td');
                    tr.appendChild(td);
                    contaCelda++;
                }

                cuerpo.appendChild(tr);
                tabla.appendChild(cuerpo);
                calendario.appendChild(tabla);

                test.setMonth(test.getMonth() + 1); // Avanzar al siguiente mes
            }
            document.querySelector('.dias').textContent = cont; // Mostrar el total de días lectivos
        }
        tablaLectivos(); // Llamar a la función para generar el calendario