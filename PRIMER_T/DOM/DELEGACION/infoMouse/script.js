document.querySelectorAll(".caja").forEach((element) => {
    element.addEventListener("mouseover", function(event) {
        if (event.target.tagName === "DIV") {
            event.target.classList.toggle("hover-bg");
            document.querySelector(".info").innerHTML = `
                <p><strong>Posicion en la pantalla:</strong> X: ${event.clientX}, Y: ${event.clientY}</p>
                <p><strong>Posicion en el elemento:</strong> X: ${event.offsetX}, Y: ${event.offsetY}</p>
            `;
        }
    });

    element.addEventListener("mouseout", function(event) {
        if (event.target.tagName === "DIV") {
            event.target.classList.toggle("hover-bg");
            document.querySelector(".info").innerHTML = " ";
        }
    });
});
