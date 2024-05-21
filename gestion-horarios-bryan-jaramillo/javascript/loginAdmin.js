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


//logeo
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores de usuario y contraseña ingresados
    var usuario = document.getElementById('usuario').value.trim();
    var contrasena = document.getElementById('contrasena').value.trim();

    // Verificar si las credenciales son válidas
    if (usuario === 'bryanCano' && contrasena === 'bryan123') {
        // Credenciales válidas, redirigir a la página de administración
        window.location.href = 'admin.html'; // Cambiar 'admin.html' por la página de administración
    } else {
        // Credenciales inválidas, mostrar mensaje de error
        alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
});

//botonees

document.getElementById('boton-login').addEventListener('click', function() {
    window.location.href = './login.html';
});