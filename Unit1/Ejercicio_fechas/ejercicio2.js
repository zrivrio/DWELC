function FechaCompleta(fecha) {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const dia = diasSemana[fecha.getDay()];
    const mes = meses[fecha.getMonth()];
    const anio = fecha.getFullYear();

    return dia + ", " + mes + " " + anio;
}

console.log(FechaCompleta(new Date()));
