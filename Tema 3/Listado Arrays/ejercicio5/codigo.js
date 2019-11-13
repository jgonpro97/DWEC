/**
 * 5. Crea  una función que devuelva un array con cada uno de los argumentos.
 * @author Juan Manuel González Prófumo
 */
{
    let info, ej;

    let init = function () {
        info = document.getElementById('informacion');
        ej = document.getElementById('ejemplo');

        informacion();
        ej.innerHTML = ejemplo("argumento1", "argumento2", "argumento3");
    }

    let informacion = function () {
        info.innerHTML += "5. Crea  una función que devuelva un array con cada uno de los argumentos";
    }

    let ejemplo = function() {
        let arrayArgumentos = [];

        for (let i = 0; i < arguments.length; i++) {
            arrayArgumentos.push(arguments[i]);
        }

        return arrayArgumentos;

    }

    document.addEventListener("DOMContentLoaded", init);
}