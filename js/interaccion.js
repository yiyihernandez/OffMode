function mostrarPestaña(idPestaña) {
    // Seleccionamos todas las secciones con la clase pestaña
    const secciones = document.querySelectorAll('.pestaña');
    
    // Las ocultamos todas
    secciones.forEach(seccion => {
        seccion.classList.remove('active');
    });

    // Mostramos solo la que clickeamos
    const pestañaActiva = document.getElementById(idPestaña);
    pestañaActiva.classList.add('active');
}