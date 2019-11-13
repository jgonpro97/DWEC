 /**
 * 7. Crea una función que elimine todos los undefined de un array.
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
        info.innerHTML = "7. Crea una función que elimine todos los undefined de un array.";
    }

    let ejemplo = function() {
        let array = ["naranja", undefined, "manzana", undefined, "piña", undefined, "platano"];
        let arraySinUndefined = array.filter(function name(value) {return value != undefined;})
 
        ej.innerHTML += "Array inicial: " + array;
        ej.innerHTML += "<br>Array sin undefined: "  + arraySinUndefined;

    }

    document.addEventListener("DOMContentLoaded", init);
}