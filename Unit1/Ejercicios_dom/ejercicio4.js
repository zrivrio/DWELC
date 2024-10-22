const btnE = document.getElementById('btnE');
const inputE = document.getElementById('inputE');
const listaE = document.getElementById('listaE');

btnE.addEventListener('click', annadir);

function annadir() {
    const itemText = inputE.value.trim();
    
    if (itemText === '') {
        alert('Por favor, añade un elemento!');
        return;
    }
    
    const listaItem = document.createElement('li');
    listaItem.textContent = itemText;
  
    listaE.insertBefore(listaItem, listaE.firstChild);

    inputE.value = '';
}
