const form = document.getElementById('registrationForm');
const outputDiv = document.getElementById('output');
const infoList = document.getElementById('infoList');

document.getElementById('submitButton').addEventListener('click', (event) => {
    event.preventDefault();
    infoList.innerHTML = '';
    outputDiv.style.display = 'none';

    let valid = true;
    const inputs = form.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        // Resetear la clase is-invalid
        input.classList.remove('is-invalid');

        if (!input.value && (input.type !== 'checkbox' || !input.checked)) {
            input.classList.add('is-invalid');
            valid = false;
        } else {
            if (input.type !== 'checkbox' || input.checked) {
                const listItem = document.createElement('li');
                listItem.textContent = `${input.type === 'radio' ? input.name : input.id}: ${input.value}`;
                infoList.appendChild(listItem);
            }
        }
    });

    if (valid) {
        outputDiv.style.display = 'block';
    } else {
        alert('Por favor, complete todos los campos obligatorios.');
    }
});
