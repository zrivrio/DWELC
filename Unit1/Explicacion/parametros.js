function demoParams(){
     console.log("in");
     console.log(arguments[0]);
}

function  createPerson(nombre, apellido, ...cities) {
     const persona = {};
     persona.nombre = a;
     persona.apellido = b;
     persona.location = cities;

}
createPerson("nick", "anderson", "malaga")
demoParams(1,2,3,4,6);