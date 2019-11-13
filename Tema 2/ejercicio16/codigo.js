/**
* 16. Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. 
* Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. 
* Para determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() proporcionada.
* @author Juan Manuel González Prófumo
*/
{
  let info;

  let init = function () {
    info = document.getElementById('info');

    document.addEventListener("click", informacion);

  }

  let informacion = function (event) {

    let coordenadaX = event.clientX;
    let coordenadaY = event.clientY;

    let [tamannioX,tamannioY] = tamanoVentanaNavegador();

    let posVertical = (coordenadaX > tamannioX/2) ? "derecha" : "izquierda";
    let posHorizontal = (coordenadaY > tamannioY/2) ? "abajo" : "arriba";

    muestraInformacion(['Posicion', posHorizontal, posVertical]);
  }

  let muestraInformacion = function (mensaje) {
    info.innerHTML = '<h1>'+mensaje[0]+'</h1>';
    for(let i = 1; i < mensaje.length; i++) {
      info.innerHTML += '<p>'+mensaje[i]+'</p>';
    }
  }

  let tamanoVentanaNavegador = function (){
    return [document.body.clientWidth, document.body.clientHeight];
  }

  document.addEventListener("DOMContentLoaded", init);
}
