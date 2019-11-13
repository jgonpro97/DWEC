/**
 * 9. Averigua qué método es el más eficiente para manejarse con arrays.  Compruébalo mediante performance.now() o similares
 * Introduce 100 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...
 * Eliminar 100 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...
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
        info.innerHTML += "9. Averigua qué método es el más eficiente para manejarse con arrays.  Compruébalo mediante performance.now() o similares";
        info.innerHTML += "<br>&nbsp;&nbsp;1. Introduce 100 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...";
        info.innerHTML += "<br>&nbsp;&nbsp;2. Eliminar 100 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...";
    }

    let ejemplo = function() {
        let array = [];
        let t0;
        let t1;

        array = new Array(100);

        t0 = performance.now();

        array.push(1, 2, 3, 4, 5, 6, 7 , 8, 9,10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
            81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
            91, 92, 93, 94, 95, 96, 97, 98, 99, 100);
        
        t1 = performance.now();
        
        ej.innerHTML += "Añadir 100 elementos usando push() tarda: " + (t1 - t0) + " ms<br>";
     
        array = new Array(100);

        t0 = performance.now();

        array.unshift(1, 2, 3, 4, 5, 6, 7 , 8, 9,10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
            81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
            91, 92, 93, 94, 95, 96, 97, 98, 99, 100);
        
        t1 = performance.now();
        
        ej.innerHTML += "Añadir 100 elementos usando unshift() tarda: " + (t1 - t0) + " ms<br>";
        
        t0 = performance.now();

        array = [1, 2, 3, 4, 5, 6, 7 , 8, 9,10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
            81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
            91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
        
        t1 = performance.now();

        ej.innerHTML += "Añadir 100 elementos directamente tarda: " + (t1 - t0) + " ms<br>";
        
        array = [1, 2, 3, 4, 5, 6, 7 , 8, 9,10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
            81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
            91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
        
        t0 = performance.now();

        for (let i = 0; i < 100; i++) {
            array.pop();
        }
        
        t1 = performance.now();
        
        ej.innerHTML += "Eliminar 100 elementos usando pop() tarda: " + (t1 - t0) + " ms<br>";
        
        array = [1, 2, 3, 4, 5, 6, 7 , 8, 9,10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
            81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
            91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
        
        t0 = performance.now();

        for (let i = 0; i < 100; i++) {
            array.shift();
        }
        
        t1 = performance.now();
        
        ej.innerHTML += "Eliminar 100 elementos usando shift() tarda: " + (t1 - t0) + " ms<br>";

    }

    document.addEventListener("DOMContentLoaded", init);
}