
/**
 * Ejercicio 13
 * 
 * Completar el código JavaScript proporcionado para que se añadan nuevos elementos a la lista cada vez que se pulsa sobre el botón.
 * Utilizar las funciones DOM para crear nuevos nodos y añadirlos a la lista existente. Al igual que sucede en el ejercicio anterior,
 * la acción de pinchar sobre un botón forma parte de los "Eventos" de JavaScript que se ven en el siguiente capítulo. En este ejercicio,
 * sólo se debe saber que al pinchar sobre el botón, se ejecuta la función llamada anade()
 *
 * @author Juan Manuel González Prófumo
*/
{   
    let boton;

    let init = function() {
        boton = document.getElementById("annadir");
        boton.addEventListener("click", anade);
    }

    let anade = function() {
        let elemento = document.createElement("li");
        let nuevoElemento = document.createTextNode("Nuevo elemento");
        elemento.appendChild(nuevoElemento);

        let lista = document.getElementById("lista");
        lista.appendChild(elemento);
    }

    document.addEventListener("DOMContentLoaded", init);
}