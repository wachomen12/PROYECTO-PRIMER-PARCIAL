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