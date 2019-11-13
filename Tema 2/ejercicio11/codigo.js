/**
 * Ejercicio 11
 * 
 * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:
 *
 * Número de enlaces de la página
 * Dirección a la que enlaza el penúltimo enlace
 * Numero de enlaces que enlazan a http://prueba
 * Número de enlaces del tercer párrafo
 * @author Juan Manuel González Prófumo
*/
{
    let muestra = function() {
        let info = document.getElementById("informacion");
        // Numero de enlaces de la pagina
        let enlaces = document.getElementsByTagName("a");
        info.innerHTML = "Numero de enlaces: " + enlaces.length;
        // Direccion del penultimo enlace
        info.innerHTML = info.innerHTML + "<br>Direccion penultimo enlace : " + enlaces[enlaces.length-2].href;
        // Numero de enlaces que apuntan a http://prueba
        let contadorEnlaces = 0;
    
        for (let i = 0; i < enlaces.length; i++) {
            if (enlaces[i].href == "http://prueba/") {
                contadorEnlaces++;
            }
        }
    
        info.innerHTML = info.innerHTML + "<br>Enlaces que apuntan a http://prueba/: " + contadorEnlaces;
        // Numero de enlaces del tercer parrafo
        let parrafos = document.getElementsByTagName("p");
        enlaces = parrafos[2].getElementsByTagName("a");
    
        info.innerHTML = info.innerHTML + "<br>Enlaces del tercer parrafo: " + enlaces.length;
    }

    document.addEventListener("DOMContentLoaded", muestra);
}