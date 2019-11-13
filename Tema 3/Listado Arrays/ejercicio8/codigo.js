/**
 * 8. Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:  Array.prototype.forEach(), Array.prototype.every(), 
 * Array.prototype.some() y Array.prototype.filter()
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
        info.innerHTML += "8. Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:  Array.prototype.forEach(), Array.prototype.every(), Array.prototype.some() y Array.prototype.filter()<br>";
        info.innerHTML += "<br>forEach: ejecuta la función indicada una vez por cada elemento del array<br>";
        info.innerHTML += "every(): devuelve un booleano, true si todos los elementos cumplen la condición y false si alguno no la cumple<br>";
        info.innerHTML += "some(): comprueba si al menos un elemento del array cumple con la condición<br>";
        info.innerHTML += "filter(): crea un nuevo array con todos los elementos que cumplan la condición";
    }

    let ejemplo = function() {
        let numeros = [1, 2, 3, 4, 5, 6];

        ej.innerHTML += "Recorrer array con forEach():";

        numeros.forEach(function(value){
            ej.innerHTML += "<br>" + value;
        });

        ej.innerHTML += "<br><br>Uso de every():";

        ej.innerHTML += "<br>Array " + numeros + " todos los números mayores de 0: " + numeros.every(value => value > 0);
        ej.innerHTML += "<br>Array " + numeros + " todos los números mayores de 3: " + numeros.every(value => value > 3);

        ej.innerHTML += "<br><br>Uso de some():";

        ej.innerHTML += "<br>Array " + numeros + " números mayores de 3: " + numeros.some(value => value > 3);
        ej.innerHTML += "<br>Array " + numeros + " números mayores de 6: " + numeros.some(value => value > 6);

        ej.innerHTML += "<br><br>Uso de filter():";

        ej.innerHTML += "<br>Array " + numeros;
        ej.innerHTML += "<br>Array filtrado numeros mayores de 3: " + numeros.filter(function (value) { return value > 3});

    }

    document.addEventListener("DOMContentLoaded", init);
}