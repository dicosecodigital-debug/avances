
document.addEventListener("DOMContentLoaded", () => {
    // Navegación suave entre las secciones
    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", (evento) => {
            const destino = enlace.getAttribute("href");

            if (!destino || destino === "#") return;

            const seccion = document.querySelector(destino);

            if (seccion) {
                evento.preventDefault();

                seccion.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Botones para cotizar: llevan al formulario
    const botonesCotizar = document.querySelectorAll(
        'a[href="#contacto"]'
    );

    botonesCotizar.forEach((boton) => {
        boton.addEventListener("click", () => {
            setTimeout(() => {
                document.querySelector("#nombre")?.focus();
            }, 500);
        });
    });

    console.log("DICOSECO: botones activados correctamente.");
});
