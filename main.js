const body = document.body;
const cambiarModo = document.getElementById('cambiar-modo');
const botonProyecto1 = document.getElementById("proyecto1");
const botonProyecto2 = document.getElementById("proyecto2");
const botonProyecto3 = document.getElementById("proyecto3");
const botonProyecto4 = document.getElementById("proyecto4");
const btnInicio = document.getElementById("inicio");


cambiarModo.addEventListener('click', function (event) {
    event.preventDefault();
    body.classList.toggle('white-mode');

    if (body.classList.contains('white-mode')) {
        cambiarModo.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        cambiarModo.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});
