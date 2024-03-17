$(document).ready(function() {

  $(".draggable-item").draggable();

  $(".droppable-area").droppable({
    over: function(event, ui) {
      ui.draggable.addClass("dragging-over");
    },
    out: function(event, ui) {
      ui.draggable.removeClass("dragging-over");
    },
    drop: function(event, ui) {
      $(this)
        .addClass("ui-state-highlight")
        .find("p")
        .html("Check!");
    }
  });

  $(".article3 img").hide().fadeIn(4000);

  $(".article3 img").resizable();

  $("#dialog").dialog();

  $("p").css("color", "blue");

  $('.btnComprar button').mouseenter(function(){
    alert("¡Sistema fuera de servicio! :(");
  });

});
