// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.

$(document).ready(function() {

// chiamata ajax per musica da server
$.ajax (
  {
    url : "https://flynn.boolean.careers/exercises/api/array/music",
    method : "GET",
    success: function(data) {
      var arrayMusica = data.response;
      console.log(arrayMusica);
      var source   = document.getElementById("template").innerHTML;
      var template = Handlebars.compile(source);
      for (var i = 0; i < arrayMusica.length; i++) {
          var context = {Author: arrayMusica[i].author, linkMusic: arrayMusica[i].poster, anno: arrayMusica[i].year, title: arrayMusica[i].title };
          var html = template(context);
          $(".cds-container").append(html);
      }
    },
    error: function(richiesta,stato,errore){
     console.log("C'è un problema con il server");
    }
  }
);


});
