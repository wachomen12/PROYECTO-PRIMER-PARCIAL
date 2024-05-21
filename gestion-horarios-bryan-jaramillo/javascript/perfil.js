document.addEventListener('DOMContentLoaded', function() {
    mostrarPerfil();
    mostrarHorarios();
    mostrarMatriculas();
    // Agregar event listeners a los botones de eliminar
    const eliminarButtons = document.querySelectorAll('.eliminar-btn');
    eliminarButtons.forEach(button => {
        button.addEventListener('click', function() {
            const matriculaId = parseInt(button.dataset.id);
            confirmarEliminacionMatricula(matriculaId);
        });
    });
});

// Función para mostrar el perfil del usuario
function mostrarPerfil() {
    // Obtener el ID único del usuario del localStorage
    var userId = localStorage.getItem('userId');

    // Obtener todos los usuarios del localStorage
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Encontrar el usuario actual por su ID
    var usuarioActual = usuarios.find(usuario => usuario.id === parseInt(userId));

    if (usuarioActual) {
        // Mostrar los datos del usuario en el perfil
        var perfilContainer = document.getElementById('perfil-container');
        perfilContainer.innerHTML = `
            <h2>Perfil de ${usuarioActual.nombre} ${usuarioActual.apellido}</h2>
            <p>Nombre: ${usuarioActual.nombre}</p>
            <p>Apellido: ${usuarioActual.apellido}</p>
            <p>Facultad: ${usuarioActual.facultad}</p>
            <p>Cédula: ${usuarioActual.cedula}</p>
            <p>Celular: ${usuarioActual.celular}</p>
            <p>Correo: ${usuarioActual.correo}</p>
            <p>Fecha de Nacimiento: ${usuarioActual.fechaNacimiento}</p>
        `;
    } else {
        // Mostrar un mensaje si no se encuentra el usuario
        var perfilContainer = document.getElementById('perfil-container');
        perfilContainer.innerHTML = `<p>No se encontró el perfil del usuario.</p>`;
    }
}

//función para ocultar y mostrar la barra de navegación
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

document.getElementById('boton-matriculas').addEventListener('click', function() {
    window.location.href = './matriculas.html';
});