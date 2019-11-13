/**
 * 2. Modificar el primer script del capítulo anterior para que:
 * 1. El mensaje que se muestra al usuario se almacene en una variable llamada mensaje y el funcionamiento del script sea el mismo.
 * 2. El mensaje mostrado sea el de la siguiente imagen:
 * @author Juan Manuel González Prófumo
 */
{   
    let mensaje, boton;

    let init = function () {
        mensaje = document.getElementById('mensaje');
        boton = document.getElementById('boton');

        boton.addEventListener('click', muestra);
    }

    let muestra = function () {
        let mensaje1 = "<p>Hola Mundo!</p>\n <p>Qué fácil es incluir \'comillas simples\' </p>\n <p>y \"comillas dobles\" </p>";

        mensaje.innerHTML = mensaje1;
    }

    document.addEventListener("DOMContentLoaded", init);
}