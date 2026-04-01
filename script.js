function revelarEfecto() {
    // Buscamos todos los elementos que tengan la clase 'revelar'
    var elementos = document.querySelectorAll(".revelar");

    for (var i = 0; i < elementos.length; i++) {
        var alturaVentana = window.innerHeight;
        var distanciaTop = elementos[i].getBoundingClientRect().top;
        var puntoCorte = 150; // Ajusta esto para que aparezcan antes o después

        if (distanciaTop < alturaVentana - puntoCorte) {
            elementos[i].classList.add("activo");
        }
    }
}

// Ejecutar la función cada vez que el usuario haga scroll
window.addEventListener("scroll", revelarEfecto);

// Función del botón que ya tenías
function solicitarCotizacion() {
    alert("¡Gracias por contactar a Mabu Pages! En breve nos comunicaremos contigo.");
}