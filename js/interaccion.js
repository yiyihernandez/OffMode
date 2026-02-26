function mostrarPestaña(idPestaña) {
    const secciones = document.querySelectorAll('.pestaña');
    secciones.forEach(seccion => {
        seccion.classList.remove('active');
    });

    const pestañaActiva = document.getElementById(idPestaña);
    pestañaActiva.classList.add('active');
}