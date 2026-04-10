document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los elementos con la clase 'revelar'
    const elementosRevelar = document.querySelectorAll(".revelar");

    // Configuramos el observador
    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                // Añade la clase 'activo' cuando el elemento entra en pantalla
                entrada.target.classList.add("activo");
                // Opcional: deja de observar el elemento una vez revelado
                observador.unobserve(entrada.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Se activa cuando el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px" 
    });

    // Asignamos el observador a cada elemento
    elementosRevelar.forEach(elemento => {
        observador.observe(elemento);
    });
});