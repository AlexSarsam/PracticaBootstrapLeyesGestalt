// Efecto de aparición al hacer scroll
window.addEventListener('scroll', function () {
  var secciones = document.querySelectorAll('#ley2, #ley4, #ley6, #ley8');

  secciones.forEach(function (seccion) {
    var posicion = seccion.getBoundingClientRect().top;
    if (posicion < window.innerHeight - 100) {
      seccion.classList.add('visible');
    }
  });
});
