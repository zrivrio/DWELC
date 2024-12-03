let persona = [{name :"John" , age : 19},{name :"John" , age : 15},{name :"John" , age : 20},{name :"John" , age : 22}];



//const edadmayor = persona.filter((persona) =>persona.age >=18);
//edadmayor.forEach(p => console.log(p.name));

persona.filter((persona) =>persona.age >=18).forEach(p => console.log(p.name));

