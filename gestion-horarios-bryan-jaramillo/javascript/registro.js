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


document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var facultad= document.getElementById('facultad').value.trim();
    var cedula = document.getElementById('cedula').value.trim();
    var celular = document.getElementById('celular').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var contrasena = document.getElementById('contrasena').value.trim();
    var verificarContrasena = document.getElementById('verificar-contrasena').value.trim();
    var fechaNacimiento = document.getElementById('fecha-nacimiento').value;


    // Validaciones

    // Validación de campos vacíos
    if (nombre === "" || apellido === "" || facultad === "" || cedula === "" || celular === "" || correo === "" || contrasena === "" || verificarContrasena === "" || fechaNacimiento === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    if (!/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]{1,20}$/.test(nombre)) {
        alert("Por favor ingresa un primer nombre válido (solo letras, máximo 20 caracteres).");
        return;
    }

    if (!/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]{1,20}$/.test(apellido)) {
        alert("Por favor ingresa un apellido válido (solo letras, máximo 20 caracteres).");
        return;
    }

    if (facultad === "") {
        alert("Por favor selecciona una carrera.");
        return;
    }

    if (!/^\d{10}$/.test(cedula)) {
        alert("Por favor ingresa una cédula válida (10 dígitos numéricos).");
        return;
    }

    if (!/^\d{10}$/.test(celular)) {
        alert("Por favor ingresa un número de celular válido (10 dígitos numéricos).");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
        alert("Por favor ingresa un correo electrónico válido.");
        return;
    }

    if (contrasena.length < 4 || contrasena.length > 10) {
        alert("La contraseña debe tener entre 4 y 10 caracteres.");
        return;
    }

    if (contrasena !== verificarContrasena) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    var fechaNacimientoObj = new Date(fechaNacimiento);
    var fechaNacimientoLimite = new Date('1950-01-01');
    var fechaNacimientoMaxima = new Date('2007-12-31');
    
    if (isNaN(fechaNacimientoObj.getTime()) || fechaNacimientoObj < fechaNacimientoLimite || fechaNacimientoObj > fechaNacimientoMaxima) {
        alert("Por favor ingresa una fecha de nacimiento válida (entre 1950 y 2007).");
        return;
    }

    // Almacenar datos en el localStorage
    // Almacenar datos en el localStorage
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; // Obtener usuarios existentes o inicializar array vacío
    var nuevoUsuario = {
        id: usuarios.length + 1, // Generar ID automáticamente
        nombre: nombre,
        apellido: apellido,
        facultad: facultad,
        cedula: cedula,
        celular: celular,
        correo: correo,
        contrasena: contrasena,
        fechaNacimiento: fechaNacimiento
    };
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Usuario registrado exitosamente.");
});

document.getElementById('boton-soporte').addEventListener('click', function() {
    window.location.href = 'https://wa.me/+593959919578';
});

document.getElementById('boton-login').addEventListener('click', function() {
    window.location.href = './login.html';
});
