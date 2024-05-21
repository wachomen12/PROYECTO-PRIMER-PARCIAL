// Obtener referencia al contenedor de horarios
const horariosContainer = document.getElementById('horarios-container');

// Función para mostrar los horarios
function mostrarHorarios() {
    // Limpiar el contenido previo
    horariosContainer.innerHTML = '';

    // Obtener los horarios del localStorage
    const horarios = JSON.parse(localStorage.getItem('horarios')) || [];
    
    // Mostrar cada horario como una "notita"
    horarios.forEach((horario, index) => {
        const horarioElement = document.createElement('div');
        horarioElement.classList.add('horario-item');
        horarioElement.innerHTML = `
            <span>Materia: ${horario.materia}</span>
            <span>Créditos: ${horario.creditos}</span>
            <span>Facultad: ${horario.facultad}</span>
            <span>Paralelo: ${horario.paralelo}</span>
            <span>Profesor: ${horario.profesor}</span>
            <span>Cupos disponibles: ${horario.cupos}</span>
            <span>Días: ${horario.dias.join(', ')}</span>
            <span>Horas: ${horario.horasInicio.join(' - ')} a ${horario.horasFin.join(' - ')}</span>
            <button class="matricular-btn" data-index="${index}">Matricularse</button>
        `;
        horariosContainer.appendChild(horarioElement);
    });
}

// Función para matricularse en una materia
function matricularseEnMateria(index) {
    // Obtener el ID único del usuario del localStorage
    var userId = localStorage.getItem('userId');

    if (!userId) {
        alert('Debes iniciar sesión para matricularte en una materia.');
        return;
    }

    // Obtener el horario seleccionado
    const horarios = JSON.parse(localStorage.getItem('horarios')) || [];
    const horario = horarios[index];

    // Verificar si hay cupos disponibles
    if (horario.cupos <= 0) {
        alert('Lo sentimos, no hay cupos disponibles para esta materia.');
        return;
    }

    // Obtener todas las matrículas del localStorage
    const matriculas = JSON.parse(localStorage.getItem('matriculas')) || [];

    // Verificar si el usuario ya está matriculado en esta materia
    const matriculaExistente = matriculas.find(matricula => matricula.userId === userId && matricula.materia === horario.materia);
    if (matriculaExistente) {
        alert('Ya estás matriculado en esta materia.');
        return;
    }

    // Crear una nueva matrícula y almacenarla
    const nuevaMatricula = {
        id: matriculas.length + 1,
        userId: userId,
        materia: horario.materia,
        creditos: horario.creditos,
        facultad: horario.facultad,
        profesor: horario.profesor,
        dia: horario.dias[0], // Solo toma el primer día por simplicidad
        horaInicio: horario.horasInicio[0], // Solo toma la primera hora de inicio por simplicidad
        horaFin: horario.horasFin[0], // Solo toma la primera hora de fin por simplicidad
    };

    // Agregar la nueva matrícula al arreglo de matrículas
    matriculas.push(nuevaMatricula);

    // Disminuir el número de cupos disponibles
    horario.cupos--;

    // Actualizar los datos en el localStorage
    localStorage.setItem('matriculas', JSON.stringify(matriculas));
    localStorage.setItem('horarios', JSON.stringify(horarios));

    // Actualizar la visualización de los horarios
    mostrarHorarios();
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarHorarios();

    // Agregar un event listener al contenedor de horarios para delegación de eventos
    horariosContainer.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('matricular-btn')) {
            const index = parseInt(target.getAttribute('data-index'));
            matricularseEnMateria(index);
        }
    });
});

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