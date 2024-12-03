document.querySelector("#modo").addEventListener("click", function() {
    const modo = document.querySelector("#modo").value;
    const body = document.querySelector("body");
    if (modo === "claro") {
        body.style.background = "yellow";
    }else if (modo === "oscuro") {
        body.style.background = "black";
    }else if (modo === "minimalista") {
        body.style.background = "pink";
    }
})