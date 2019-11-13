/**
* 6. Crea  una función que devuelva un array con cada uno de los argumentos. En caso de que alguno de sus argumentos
* sea un array, que introduzca sus elementos uno a uno.
* @author Juan Manuel González Prófumo
 
*/
{
    let info, ej;

    let init = function () {
        info = document.getElementById('informacion');
        ej = document.getElementById('ejemplo');

        informacion();
        ej.innerHTML = ejemplo("argumento1", "argumento2", "argumento3", ["naranja", "manzana", "piña", "platano"]);
    }

    let informacion = function () {
        info.innerHTML = "6. Crea  una función que devuelva un array con cada uno de los argumentos. En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.";
    }

    let ejemplo = function () {
        let arrayArgumentos = [];

        for (let i = 0; i < arguments.length; i++) {
            if (Array.isArray(arguments[i])) {
                arguments[i].forEach(function (value) {
                    arrayArgumentos.push(value);
                });
            }

            else {
                arrayArgumentos.push(arguments[i]);
            }

        }

        return arrayArgumentos;

    }

    document.addEventListener("DOMContentLoaded", init);
}