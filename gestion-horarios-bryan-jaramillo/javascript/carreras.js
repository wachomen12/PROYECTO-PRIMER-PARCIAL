document.addEventListener('DOMContentLoaded', function() {
    const verMasButtons = document.querySelectorAll('.ver-mas-btn');
    const infoFacultad = document.getElementById('info-facultad');
    const nombreFacultad = document.getElementById('nombre-facultad');
    const descripcionFacultad = document.getElementById('descripcion-facultad');
    const cerrarInfoButton = document.getElementById('cerrar-info-btn');

    // Datos de ejemplo para las facultades
    const facultades = [
        {
            id: 1,
            nombre: 'Facultad de Ciencias Médicas',
            descripcion: 'La Facultad de Ciencias Médicas se dedica a formar profesionales de la salud altamente capacitados y comprometidos con el bienestar y la atención médica de la comunidad. Nuestros programas académicos integran la teoría médica con la práctica clínica para preparar a los estudiantes para una amplia gama de carreras en el campo de la medicina.',
            ubicacion: 'Puerta 1',
            imagen: '../image/facu1.jpg'
        },
        {
            id: 2,
            nombre: 'Facultad de Ciencias Informáticas',
            descripcion: 'La Facultad de Ciencias Informáticas ofrece programas académicos innovadores y de vanguardia en el campo de la informática, preparando a los estudiantes para enfrentar los desafíos tecnológicos del futuro.',
            ubicacion: 'Puerta 1',
            imagen: '../image/facu2.jpg'
        },
        {
            id: 3,
            nombre: 'Facultad de Derecho',
            descripcion: 'La Facultad de Derecho se dedica a formar profesionales con una sólida formación ética y legal, capaces de contribuir al desarrollo y la justicia en la sociedad.',
            ubicacion: 'Puerta 2',
            imagen: '../image/facu3.jpg'
        },
        {
            id: 4,
            nombre: 'Facultad de Ciencias Administrativas',
            descripcion: 'La Facultad de Ciencias Administrativas ofrece una amplia gama de programas académicos en áreas como administración de empresas, contabilidad, marketing y gestión de recursos humanos.',
            ubicacion: 'Puerta 3',
            imagen: '../image/facu4.jpg'
        },
        {
            id: 5,
            nombre: 'Facultad de Educación',
            descripcion: 'La Facultad de Educación se compromete a formar profesionales altamente capacitados y comprometidos con la mejora continua de la educación en todos los niveles.',
            ubicacion: 'Puerta 1',
            imagen: '../image/facu5.jpg'
        },
        {
            id: 6,
            nombre: 'Facultad de Arquitectura',
            descripcion: 'La Facultad de Arquitectura ofrece programas académicos rigurosos que preparan a los estudiantes para diseñar y construir entornos habitables y sostenibles.',
            ubicacion: 'Puerta 2',
            imagen: '../image/facu6.jpg'
        },
        {
            id: 7,
            nombre: 'Facultad de Ingeniería',
            descripcion: 'La Facultad de Ingeniería ofrece una amplia variedad de programas de ingeniería que combinan teoría y práctica para preparar a los estudiantes para enfrentar los desafíos tecnológicos del mundo real.',
            ubicacion: 'Puerta 3',
            imagen: '../image/facu7.jpg'
        }
    ];

    // Función para mostrar la información de una facultad específica
    function mostrarInfoFacultad(facultadId) {
        const facultad = facultades.find(fac => fac.id == facultadId);
        if (facultad) {
            nombreFacultad.textContent = facultad.nombre;
            descripcionFacultad.textContent = facultad.descripcion + ' ' + facultad.ubicacion;
            // Puedes cambiar la lógica para mostrar la información como desees
            // Por ejemplo, podrías agregar más elementos HTML aquí para mostrar más detalles
            infoFacultad.classList.remove('oculto');
        }
    }

    verMasButtons.forEach(button => {
        button.addEventListener('click', function() {
            const facultadId = button.getAttribute('data-facultad');
            mostrarInfoFacultad(facultadId);
        });
    });

    cerrarInfoButton.addEventListener('click', function() {
        infoFacultad.classList.add('oculto');
    });
});


// Función para ocultar y mostrar la barra de navegación
document.getElementById('contenedorBoton-arriba').addEventListener('click', function() {
    var contenedorArriba = document.getElementById('contenedor-arriba');
    var contenedorMedio = document.getElementById('contenedor-medio');
    if (contenedorArriba.style.display === 'block') {
        contenedorArriba.style.display = 'none';
        contenedorMedio.style.marginLeft = '0';
    } else {
        contenedorArriba.style.display = 'block';
        contenedorMedio.style.marginLeft = '250px'; // Ajusta el valor según el ancho de tu barra lateral
    }
});

document.getElementById('boton-soporte').addEventListener('click', function() {
    window.location.href = 'https://wa.me/+593959919578';
});