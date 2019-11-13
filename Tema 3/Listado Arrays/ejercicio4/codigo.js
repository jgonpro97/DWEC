/**
 * 4. Crea  una función que cree un array de la dimensión indicada, cuyo contenido sean los números naturales comenzando desde 0
 * @author Juan Manuel González Prófumo
 */
{
    let info, ej, boton;

    let init = function () {
        info = document.getElementById('informacion');
        ej = document.getElementById('ejemplo');
        boton = document.getElementById('boton');

        informacion();

        boton.addEventListener('click', ejemplo);
    }

    let informacion = function () {
        info.innerHTML += "4. Crea  una función que cree un array de la dimensión indicada, cuyo contenido sean los números naturales comenzando desde 0";
    }

    let ejemplo = function() {
        let tamanno = document.getElementById('tamanno').value;

        let numeros = new Array();

        for (let i = 0; i < tamanno; i++) {
            numeros[i] = i;
            ej.innerHTML += numeros[i] + "<br>";
        }
    }

    document.addEventListener("DOMContentLoaded", init);
}