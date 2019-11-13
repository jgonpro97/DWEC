/**
 * 8. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado
 * una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 * @author Juan Manuel González Prófumo
 */
{
    let info, boton;

    let init = function () {
        info = document.getElementById('info');
        boton = document.getElementById('boton');

        boton.addEventListener('click', esParImpar);
    }

    let esParImpar = function() {

        let numero = document.getElementById('numero').value;

        if (numero % 2 == 0) {
            info.innerHTML = "Es par"
        }

        else {
            info.innerHTML =  "Es impar"
        }
    }

    document.addEventListener("DOMContentLoaded", init);
}