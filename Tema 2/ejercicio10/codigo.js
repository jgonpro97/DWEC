/**
 * 10 . Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, 
 * es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: 
 * "La ruta nos aporto otro paso natural".
 * @author Juan Manuel González Prófumo
 */
{
    let info, boton;

    let init = function () {
        info = document.getElementById('info');
        boton = document.getElementById('boton');

        boton.addEventListener('click', esPalindromo);
    }

    let esPalindromo = function() {
        let cadena = document.getElementById('cadena').value;

        let cadenaMinuscula = cadena.toLowerCase();
        let palabrasCadena = cadenaMinuscula.split(" ");
        let cadSinEspacios = "";
        let cadenaInvertida = "";

        for (i in palabrasCadena) {
            cadSinEspacios += palabrasCadena[i];
        }
        
        for (let i = cadSinEspacios.length; i >= 0; i--) {
            cadenaInvertida += cadSinEspacios.charAt(i);
        };

        if (cadSinEspacios == cadenaInvertida) {
            info.innerHTML = "Es palindromo";
        }

        else {
            info.innerHTML = "No es palindromo";
        }

    }

    document.addEventListener("DOMContentLoaded", init);
    
}
