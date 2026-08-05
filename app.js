// MODALES
document.addEventListener("DOMContentLoaded", () => {
    
    const botonesAbrir = document.querySelectorAll(".btn-abrir");
    
    botonesAbrir.forEach(boton => {
        boton.addEventListener("click", () => {
            const modalId = boton.getAttribute("data-target");
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.classList.add("mostrar");
            }
        });
    });

    const botonesCerrar = document.querySelectorAll(".cerrar");
    
    botonesCerrar.forEach(botonX => {
        botonX.addEventListener("click", () => {
            const modal = botonX.closest(".modal");
            if (modal) {
                modal.classList.remove("mostrar");
            }
        });
    });

    const modales = document.querySelectorAll(".modal");
    
    modales.forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("mostrar");
            }
        });
    });
});

// ANIMACIONES TEXTO
document.addEventListener("DOMContentLoaded", () => {
    const elementosAAnimar = document.querySelectorAll("p, h1, h2, h3, span");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elementosAAnimar.forEach(elemento => observer.observe(elemento));
});

// ANIMACIONES LI
document.addEventListener("DOMContentLoaded", () => {
    
    const vigilarElementos = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("animado");
                observador.unobserve(entrada.target); 
            }
        });
    }, {
        root: null,
        rootMargin: "0px", 
        threshold: 0.1
    });

    const elementosALaIzquierda = document.querySelectorAll(".entrada-izquierda");
    elementosALaIzquierda.forEach(elemento => {
        vigilarElementos.observe(elemento);
    });
    
});