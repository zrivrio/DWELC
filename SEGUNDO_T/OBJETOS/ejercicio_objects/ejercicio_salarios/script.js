const salaries ={
    "John":100,
    "Pete":300,
    "Mary":250,
};

function ordenarKey(){
    const keys = Object.keys(salaries);
    keys.sort();
    keys.forEach(element => {
        console.log(element);
    });
 
    const valores = Object.values(salaries);
    const suma = 0;
    for (const element of valores) {
        suma =+ element;
    }
    console.log()
}

ordenarKey();

