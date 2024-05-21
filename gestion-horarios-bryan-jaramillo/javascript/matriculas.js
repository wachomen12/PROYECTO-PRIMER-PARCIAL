document.addEventListener('DOMContentLoaded', function() {
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

// Función para mostrar las matrículas del usuario
function mostrarMatriculas() {
    // Obtener el ID único del usuario del localStorage
    var userId = localStorage.getItem('userId');

    // Obtener todas las matrículas del localStorage
    var matriculas = JSON.parse(localStorage.getItem('matriculas')) || [];

    // Filtrar las matrículas para mostrar solo las del usuario actual
    var matriculasUsuario = matriculas.filter(function(matricula) {
        return matricula.userId === userId;
    });

    // Mostrar las matrículas del usuario en la interfaz de usuario
    var matriculasContainer = document.getElementById('matriculas-container');
    matriculasContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar las matrículas

    matriculasUsuario.forEach(function(matricula) {
        var matriculaElement = document.createElement('div');
        matriculaElement.classList.add('matricula-item');
        matriculaElement.innerHTML = `
            <span>Materia: ${matricula.materia}</span>
            <span>Créditos: ${matricula.creditos}</span>
            <span>Facultad: ${matricula.facultad}</span>
            <span>Profesor: ${matricula.profesor}</span>
            <span>Día: ${matricula.dia}</span>
            <span>Hora de inicio: ${matricula.horaInicio}</span>
            <span>Hora de fin: ${matricula.horaFin}</span>
            <button class="eliminar-btn" data-id="${matricula.id}">Eliminar</button>
        `;
        matriculasContainer.appendChild(matriculaElement);
    });
}

// Función para confirmar la eliminación de la matrícula
function confirmarEliminacionMatricula(matriculaId) {
    if (confirm('¿Estás seguro que deseas eliminar esta matrícula?')) {
        eliminarMatricula(matriculaId);
    }
}

// Función para eliminar una matrícula
function eliminarMatricula(matriculaId) {
    // Obtener todas las matrículas del localStorage
    var matriculas = JSON.parse(localStorage.getItem('matriculas')) || [];

    // Filtrar las matrículas para obtener la matrícula a eliminar
    var matriculaAEliminar = matriculas.find(matricula => matricula.id === matriculaId);

    if (!matriculaAEliminar) {
        alert('La matrícula no se encontró.');
        return;
    }

    // Incrementar en +1 los cupos disponibles de la materia eliminada
    var horarios = JSON.parse(localStorage.getItem('horarios')) || [];
    var horarioCorrespondiente = horarios.find(horario => horario.materia === matriculaAEliminar.materia);
    if (horarioCorrespondiente) {
        horarioCorrespondiente.cupos++;
        localStorage.setItem('horarios', JSON.stringify(horarios));
    }

    // Eliminar la matrícula del arreglo
    var nuevasMatriculas = matriculas.filter(matricula => matricula.id !== matriculaId);
    localStorage.setItem('matriculas', JSON.stringify(nuevasMatriculas));

    // Volver a mostrar las matrículas actualizadas
    mostrarMatriculas();
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


document.getElementById('boton-perfil').addEventListener('click', function() {
    window.location.href = '../html/perfil.html';
});