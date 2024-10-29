function infochild2() {
    const seleccion = document.querySelector("#child2");
    const padre = seleccion.parentElement;
    const hermanos = padre.children;
    const abuelo = padre.parentElement;
    const tios = abuelo.children;
    const abuelo_padre = abuelo.parentElement
    const abuelo_hermano = abuelo_padre.children;
    const hijos = seleccion.children;
    console.log("Padre --> Etiqueta:", padre.tagName ,"ID:" 
        , padre.id);
    console.log("Hermanos -->");
   for (const hermano of hermanos) {
        console.log("Etiqueta:", hermano.tagName ,"ID:" 
        , hermano.id );
    }
    if(seleccion.previousElementSibling != null){
        console.log("Hermano anterior --> Etiqueta:", seleccion.previousElementSibling.tagName ,"ID:" 
            , seleccion.previousElementSibling.id );
    }
    if (seleccion.nextElementSibling) {
        console.log("Hermano anterior --> Etiqueta:", seleccion.nextElementSibling.tagName ,"ID:" 
        , seleccion.nextElementSibling.id ); 
    } else{
        console.log("No tiene un hermano posterior")
    }
    console.log("Abuelo --> Etiqueta:", abuelo.tagName ,"ID:" 
        , abuelo.id );
    console.log("Tios abuelos -->");    
    for (const tio_a of abuelo_hermano) {
        if(tio_a != abuelo){
            console.log("Etiqueta:", tio_a.tagName ,"ID:" 
            , tio_a.id );
        }
    }
    console.log("Tios -->");    
    for (const tio of tios) {
        if(tio != padre){
            console.log("Etiqueta:", tio.tagName ,"ID:" 
            , tio.id );
        }
    }
    console.log("Primos -->"); 
    for (const tio of tios) {
       let primos = tio.children;
       for( const primo of primos){
        console.log("Etiqueta:", primo.tagName ,"ID:" 
            , primo.id ); 
       }
    }
    console.log("Hijos -->");    
    for (const hijo of hijos) {
            console.log("Etiqueta:", hijo.tagName ,"ID:" 
            , hijo.id );
    }
    console.log("Nietos -->"); 
    for (const hijo of hijos) {
       let nietos = hijo.children;
       for( const nieto of nietos){
        console.log("Etiqueta:", nieto.tagName ,"ID:" 
            , nieto.id); 
       }
    }
}
document.querySelector("#child2").addEventListener("click", infochild2);

//document.querySelector("#grandchild1").addEventListener("click", infograndchild1);
//document.querySelector("#grandchild2").addEventListener("click", infograndchild);

//document.querySelector("#child3").addEventListener("click", infohijo2);
//document.querySelector("#person1").addEventListener("click", info);