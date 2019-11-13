/**
 * 2. Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
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
        info.innerHTML += "2. Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo<br>";
        info.innerHTML += "<br>El operador in devuelve true si la propiedad especificada está en el objeto especificado";
    }

    let ejemplo = function() {
        let frutas = ["naranja", "manzana", "piña", "platano"];

        ej.innerHTML += "indice 0 en el array: " + (0 in frutas) + "<br>";
        ej.innerHTML += "indice 4 en el array: " + (4 in frutas) + "<br>";
        ej.innerHTML += "'naranja' en el array: " + ("naranja" in frutas) + "<br>";

    }

    document.addEventListener("DOMContentLoaded", init);
}