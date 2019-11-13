/**
 * 9. Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
 * A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
 * sólo por minúsculas o por una mezcla de ambas.
 * @author Juan Manuel González Prófumo
 */
{
    let info, boton;

    let init = function () {
        info = document.getElementById('info');
        boton = document.getElementById('boton');

        boton.addEventListener('click', informacionCadena);
    }

    let informacionCadena = function() {

        let cadena = document.getElementById('cadena').value;

        if (cadena == cadena.toUpperCase()) {
            info.innerHTML = "La cadena es en mayúsculas";
        }

        else if (cadena == cadena.toLowerCase()) {
            info.innerHTML = "La cadena es en minúsculas";
        }

        else {
            info.innerHTML = "La cadena tiene mayúsculas y minúsculas";    
        }
    }

    document.addEventListener("DOMContentLoaded", init);

}