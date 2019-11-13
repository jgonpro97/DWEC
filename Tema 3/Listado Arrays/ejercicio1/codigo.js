/**
 * 1. Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
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
        info.innerHTML += "1. Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ej<br>";
        info.innerHTML += "<br>Argumentos: value, index, array";
    }

    let ejemplo = function() {
        let frutas = ["naranja", "manzana", "piña", "platano"];

        frutas.forEach(function(value, index, array){
            ej.innerHTML += "Valor: " + value + " Indice: " + index + " Array: " + array + "<br>";
        })
    }

    document.addEventListener("DOMContentLoaded", init);
}