
$(function(){

    var texto = "Desarrollador De sofware.";
    maquina("typer",texto,200);

});


function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   tagHtml = document.getElementById(contenedor);
   tagHtml.innerHTML="";
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      tagHtml.innerHTML = tagHtml.innerHTML.substr(0,tagHtml.innerHTML.length-1) + texto.charAt(i) + "_";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         tagHtml.innerHTML = tagHtml.innerHTML.substr(0,longitud);

         maquina("typer",texto,200);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }
   },intervalo);
};