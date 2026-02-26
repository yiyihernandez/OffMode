Off-Mode

🛸Pantalla apagada, alienígenas contentos, porque tu tiempo vale más que un "like", mejor pasa más tiempo dominando la galaxia. 


¿Qué contiene?

-Navegación Dinámica (JS): Utiliza una lógica de cambio de secciones en interaccion.js que gestiona la visibilidad de las pestañas sin recargar la página, incluyendo un efecto de transición suave con opacity 0.5s y setTimeout.
-Interfaz Inmersiva: Un diseño "Dark Mode" con una cabecera fija (header_nav) que resalta la sección activa cambiando el color del menú a negro.

Componentes Visuales:

-Globitos de Texto: Elementos en la Home que reaccionan al pasar el cursor con desplazamientos y cambios de color.
-Tarjetas: Secciones de "About" con bordes de neón azul y púrpura que se elevan al interactuar con ellas.
-Trilogía de Dispositivos: Una composición visual en la sección de contacto con tres teléfonos escalados (330px y 260px) que crean un efecto de profundidad.
-Animaciones: Incluye una animación de entrada (fade-in-page) que suaviza la carga inicial de la aplicación.

👽Tecnologías Alienígenas Utilizadas

HTML5: Estructura de secciones, navegación y organización de activos.
CSS3: Magia visual que incluye el uso de Flexbox, filtros de sombra (drop-shadow), transiciones y estados :hover.
JavaScript (Vanilla): Un controlador eficiente que manipula el DOM para coordinar el encendido y apagado de las secciones Home, About y Contact.

Estructura del Cuartel General

├── assets/          # Imágenes (Alien, PC, Teléfonos)

├── css/
  └── styles.css   # Estilos, neones y animaciones

├── js/  
  └── interaccion.js # El cerebro detrás de las transiciones

└── index.html       # La puerta de entrada a la galaxia
