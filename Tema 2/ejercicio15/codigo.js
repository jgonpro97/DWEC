/**
* 15. Completar el código JavaScript proporcionado para que:
*
* Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición del puntero respecto del navegador y respecto de la página:
* Información que se muestra para los events del ratón
*
* Para mostrar los mensajes, utilizar la función muestrainfo() deduciendo su funcionamiento a partir de su código fuente.
* Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo event y su información asociada:
* Información que se muestra para los events del teclado
*
* Añadir la siguiente característica al script: cuando se pulsa un botón del ratón, el color de fondo del cuadro de mensaje debe ser amarillo (#FFFFCC)
* y cuando se pulsa una tecla, el color de fondo debe ser azul (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser blanco.
* @author Juan Manuel González Prófumo
*/
{

  let info;

  let init = function () {
    info = document.getElementById('info');

    document.addEventListener("mousemove", mueveRaton);
    document.addEventListener("click", cambiarColor);
    document.addEventListener("keypress", pulsaTecla);
  }

  let mueveRaton = function (event) {
    info.style.backgroundColor = 'white';

    let coordenadaXNavegador = event.clientX;
    let coordenadaYNavegador = event.clientY;

    let coordenadaXPagina = event.pageX;
    let coordenadaYPagina = event.pageY;

    muestrainfo(['Ratón', 'Navegador [' + coordenadaXNavegador + ', ' + coordenadaYNavegador + ']',
    'Pagina [' + coordenadaXPagina + ', ' + coordenadaYPagina + ']']);

  }

  let pulsaTecla = function (event) {
    let tecla = event.keyCode;
    let letra = String.fromCharCode(tecla);
    let codigo = letra.charCodeAt(0);

    muestrainfo(['Teclado', 'Carácter [' + letra + ']', 'Código [' + codigo + ']']);
    info.style.backgroundColor = '#CCE6FF';
  }

  let cambiarColor = function (event) {
    info.style.backgroundColor = '#FFFFCC';
  }

  let muestrainfo = function (mensaje) {
    let texto = '<h1>'+mensaje[0]+'</h1>';
        for(let i=1; i<mensaje.length; i++) {
            texto += '<p>'+mensaje[i]+'</p>';
        }
        info.innerHTML = texto;
  }

  document.addEventListener("DOMContentLoaded", init);

}