$(document).ready(function() {
  //Oculta el articulo3 al cargar la página.
  $('.articulo3').hide();

  // Muestra el artículo3 al hacer clic en el botón "Cotizar".
  $('.btnCotizar').click(function() {
    $('.articulo3').slideDown();
  });

  // Muestra el artículo3 al hacer click en el botón "Cancelar" y muestra un mensaje de alerta.
  $('#formulario-viaje button[type="cancelar"]').click(function(event) {
    event.preventDefault();
    $('.articulo3').fadeOut(3000);
    alert("¡Qué lástima, vuelve pronto!");
  });

  // Muestra las imágenes dentro de .col-md-4 con fadeIn de 4s.
  $('.col-md-4').hide().fadeIn(4000);

  // Cambia la opacidad de las imágenes dentro de .logos al pasar el mouse sobre ellas.
  $('.logos img').hover(function() {
    $(this).css('opacity', '0.7');
  }, function() {
    $(this).css('opacity', '1');
  });

  // Anima las imágenes dentro de .col-md-4 al hacer click en ellas.
  $('.col-md-4 img').click(function() {
    $(this).animate({
      width: '+=50px',
      height: '+=50px'
    }, 500);
  });

  // Muestra una alerta con el nombre y destino seleccionados al hacer click en el botón "Enviar".
  $('#formulario-viaje button[type="submit"]').click(function(event) {
    event.preventDefault();
    var nombre = $('#nombre').val();
    var destino = $('#destino').val();
    alert('¡Hola ' + nombre + '!' + ' Has seleccionado viajar a ' + destino + '. Pronto te contactaremos!');
  });

  // Recarga la página al hacer click en el botón "Inicio".
  $('#formulario-viaje button[type="volver"]').click(function(event) {
    event.preventDefault();
    location.reload();
  });

  // Cambiar el tamaño de la letra de los elementos <h1> al pasar el mouse sobre ellos.
  $('h1').hover(function() {
    $(this).css('font-size', '50px');
  }, function() {
    $(this).css('font-size', '30px');
  });

  // Oculta los elementos <p> del articulo2 al pasar el mouse sobre ellos y los muestra nuevamente al salir.
  $('.articulo2 p').hover(function() {
    $(this).hide();
  }, function() {
    $(this).show();
  });

  // Datapickers
  $('#fechasalida').datepicker();
  $('#fecharegreso').datepicker();
});
