function HoraActual() {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const ahora = new Date();

    const diaSemana = diasSemana[ahora.getDay()];
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    const formatoAMPM = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12 || 12;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    return `${diaSemana}. Hora: ${horas}${formatoAMPM} ${minutos}:${segundos}`;
}

console.log(HoraActual());
