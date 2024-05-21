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


// Botones para cambiar de pestañas
document.getElementById('boton-registro').addEventListener('click', function() {
    window.location.href = './registro.html';
});

document.getElementById('boton-admin').addEventListener('click', function() {
    window.location.href = './loginAdmin.html';
});

//coso veri
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var correo = document.getElementById('correo').value.trim();
    var contrasena = document.getElementById('contrasena').value.trim();

    // Verificar las credenciales
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    var usuario = usuarios.find(function(usuario) {
        return usuario.correo === correo && usuario.contrasena === contrasena;
    });

    if (usuario) {
        // Almacenar el ID único del usuario en el localStorage
        localStorage.setItem('userId', usuario.id);
        alert('Inicio de sesión exitoso.');
        // Redirigir al usuario a la página de matrículas
        window.location.href = 'perfil.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos.');
    }
});

document.getElementById('boton-soporte').addEventListener('click', function() {
    window.location.href = 'https://wa.me/+593959919578';
});