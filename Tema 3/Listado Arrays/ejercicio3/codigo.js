/**
 * 3. Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
 * @author Juan Manuel González Prófumo
 */
{
    let info, ej;

    let init = function () {
        info = document.getElementById('informacion');
        ej = document.getElementById('ejemplo');

        informacion();
        ejemplo();
    }

    let informacion = function () {
        info.innerHTML += "3. Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo<br>";
        info.innerHTML += "<br>El método Array.isArray() determina si el valor pasado es un Array";
    }

    let ejemplo = function() {
        let frutas = ["naranja", "manzana", "piña", "platano"];

        ej.innerHTML += "Pasandole un array: " + Array.isArray(frutas) + "<br>";
        ej.innerHTML += "Pasandole cadena de texto: " + Array.isArray("hola") + "<br>";
        ej.innerHTML += "Pasandole undefined: " + Array.isArray(undefined) + "<br>";

    }

    document.addEventListener("DOMContentLoaded", init);
}