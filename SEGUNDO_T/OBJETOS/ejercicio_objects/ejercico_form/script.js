const person = {
    "nombre": "Noon",
    "edad": 6,
    "aficiones": ["Deporte", "Lectura", "Viajar"],
    "emancipado": true
};

function crearForm() {
    const keys = Object.keys(person); 
    const values = Object.values(person); 

    keys.forEach((key, index) => {
        const value = values[index]; 
        const label = document.createElement("label");
        label.innerHTML = key;
        document.querySelector(".form_container").appendChild(label);

        switch (typeof value) {
            case "string":
                const input = document.createElement("input");
                input.type = "text";
                input.value = value;
                document.querySelector(".form_container").appendChild(input);
                break;
            case "number":
                const input1 = document.createElement("input");
                input1.type = "number";
                input1.value = value;
                document.querySelector(".form_container").appendChild(input1);
                break;
            case "object":
                if (Array.isArray(value)) {
                    value.forEach(item => {
                        const input2 = document.createElement("input");
                        input2.type = "text";
                        input2.value = item;
                        document.querySelector(".form_container").appendChild(input2);
                    });
                }
                break;
            case "boolean":
                const input3 = document.createElement("input");
                input3.type = "checkbox";
                input3.checked = value; 
                document.querySelector(".form_container").appendChild(input3);
                break;
        }
    });
}

window.onload = crearForm;
