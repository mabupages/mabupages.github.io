function revelarEfecto() {
    var elementos = document.querySelectorAll(".revelar");
    for (var i = 0; i < elementos.length; i++) {
        var alturaVentana = window.innerHeight;
        var distanciaTop = elementos[i].getBoundingClientRect().top;
        var puntoCorte = 100; 

        if (distanciaTop < alturaVentana - puntoCorte) {
            elementos[i].classList.add("activo");
        }
    }
}

// Ejecutar la función cada vez que el usuario haga scroll
window.addEventListener("scroll", revelarEfecto);
