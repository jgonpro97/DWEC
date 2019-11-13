/**
 * 1.
 * 1. Todo el código JavaScript se encuentre en un archivo externo llamado codigo.js y el script siga funcionando de la misma manera.
 * 2. Después del primer mensaje, se debe mostrar otro mensaje que diga "Soy el primer script"
 * 3. Añadir algunos comentarios que expliquen el funcionamiento del código
 * 4. Añadir en la página XHTML un mensaje de aviso para los navegadores que no tengan activado el soporte de JavaScript
 * @author Juan Manuel González Prófumo
 */
{   
    let mensaje1, mensaje2, boton;

    let init = function () {
        mensaje1 = document.getElementById('mensaje1');
        mensaje2 = document.getElementById('mensaje2');
        boton = document.getElementById('boton');

        boton.addEventListener('click', muestra);
    }

    let muestra = function () {
        mensaje1.innerHTML = "Hola Mundo!";
        mensaje2.innerHTML = "Soy el primer script";
    }

    document.addEventListener("DOMContentLoaded", init);
}