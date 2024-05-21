// Obtener referencia al formulario y a los campos de hora de inicio y fin para cada día
const form = document.getElementById('horarios-form');
const checkboxes = document.querySelectorAll('input[type="checkbox"][name="dia"]');
const horasInicio = document.querySelectorAll('input[type="time"][name^="hora-inicio-"]');
const horasFin = document.querySelectorAll('input[type="time"][name^="hora-fin-"]');

// Función para activar o desactivar los campos de hora según las selecciones del usuario
function toggleHoras() {
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            horasInicio[index].removeAttribute('disabled');
            horasFin[index].removeAttribute('disabled');
        } else {
            horasInicio[index].setAttribute('disabled', 'true');
            horasFin[index].setAttribute('disabled', 'true');
        }
    });
}

// Evento para activar o desactivar los campos de hora cuando se cambie la selección de días
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', toggleHoras);
});

// Evento para manejar el envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const materia = document.getElementById('materia').value.trim();
    const creditos = parseInt(document.getElementById('creditos').value.trim());
    const facultad = document.getElementById('facultad').value.trim();
    const paralelo = document.getElementById('paralelo').value.trim();
    const profesor = document.getElementById('profesor').value.trim();
    const cupos = parseInt(document.getElementById('cupos').value.trim());

    // Validar que los campos no estén vacíos
    if (!materia || !creditos || !facultad || !profesor || !cupos || !paralelo) {
        alert('Por favor, completa todos los campos del formulario.');
        return;
    }

    // Obtener los días y horas seleccionados
    const diasSeleccionados = [];
    const horasInicioSeleccionadas = [];
    const horasFinSeleccionadas = [];

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            diasSeleccionados.push(checkbox.value);
            horasInicioSeleccionadas.push(horasInicio[index].value);
            horasFinSeleccionadas.push(horasFin[index].value);
        }
    });

    // Almacenar los horarios en el localStorage
    const horarios = JSON.parse(localStorage.getItem('horarios')) || [];
    horarios.push({
        materia: materia,
        creditos: creditos,
        facultad: facultad,
        paralelo: paralelo,
        profesor: profesor,
        cupos: cupos,
        dias: diasSeleccionados,
        horasInicio: horasInicioSeleccionadas,
        horasFin: horasFinSeleccionadas
    });
    localStorage.setItem('horarios', JSON.stringify(horarios));

    // Mostrar mensaje de éxito y limpiar el formulario
    alert('Horario agregado exitosamente.');
    form.reset();
});


// mostrar cosos
// Función para mostrar los horarios en el contenedor
function mostrarHorarios() {
    const horariosContainer = document.getElementById('horarios-container');
    horariosContainer.innerHTML = ''; // Limpiar el contenido previo

    const horarios = JSON.parse(localStorage.getItem('horarios')) || [];
    if (horarios.length === 0) {
        horariosContainer.innerHTML = '<p>No hay horarios guardados.</p>';
    } else {
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
                <button class="eliminar-btn" data-index="${index}">Eliminar</button>
            `;
            horariosContainer.appendChild(horarioElement);
        });
    }
}

// Función para eliminar un horario
function eliminarHorario(index) {
    const horarios = JSON.parse(localStorage.getItem('horarios')) || [];
    horarios.splice(index, 1); // Eliminar el horario en la posición index
    localStorage.setItem('horarios', JSON.stringify(horarios));
    mostrarHorarios(); // Mostrar de nuevo los horarios actualizados
}

// Mostrar los horarios al cargar la página
mostrarHorarios();

// Escuchar eventos de clic en los botones de eliminar
document.getElementById('horarios-container').addEventListener('click', function(event) {
    if (event.target.classList.contains('eliminar-btn')) {
        const index = event.target.getAttribute('data-index');
        eliminarHorario(index);
    }
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