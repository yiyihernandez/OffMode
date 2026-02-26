function cambiarSeccion(id) {
    const secciones = document.querySelectorAll('.pestaña');
    const links = document.querySelectorAll('.nav_link');
    
    // Ocultar todas
    secciones.forEach(sec => {
        sec.classList.remove('active');
        sec.style.opacity = "0"; // Reset para la transición suave
    });

    // Mostrar activa
    const activa = document.getElementById(id);
    if(activa) {
        activa.classList.add('active');
        // Transición de opacidad simple al cambiar
        setTimeout(() => {
            activa.style.opacity = "1";
            activa.style.transition = "opacity 0.5s ease";
        }, 10);
    }

    // Actualizar menú
    links.forEach(link => {
        link.classList.remove('active_link');
        if(link.getAttribute('data-sec') === id) {
            link.classList.add('active_link');
        }
    });
}

// Al cargar la página
window.onload = () => {
    cambiarSeccion('home');
};