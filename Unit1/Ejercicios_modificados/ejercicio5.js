let meses = [{nombre : "Enero" , dias : 31}, {nombre : "Febrero" , dias : 28}, {nombre : "Marzo" , dias : 31}, {nombre : "Abril" , dias : 30}, 
    {nombre : "Mayo" , dias : 31}, {nombre : "Junio" , dias : 30},{nombre : "Julio" , dias : 31},{nombre : "Agosto" , dias : 31},
    {nombre : "Septiembre" , dias : 30},{nombre : "Octubre" , dias : 31},{nombre : "Noviembre" , dias : 30},{nombre : "Diciembre" , dias : 31}];

meses.filter( (meses) => meses.dias == 30).forEach(m => console.log(m.nombre));


for (let i = 0; i < meses.length; i++) {
   if (i % 2 == 0){
    console.log(meses[i].nombre);
   }
    
}
const ndias = meses.reduce((acc , meses) => acc + meses.dias,0);
console.log(ndias);