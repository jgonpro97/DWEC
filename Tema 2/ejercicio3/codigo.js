/**
 * 3. Crear un array llamado meses y que almacene el nombre de los doce meses del año.
 * Mostrar por pantalla los doce nombres utilizando la función alert().
 * @author Juan Manuel González Prófumo
 */

{   
    let contenido, boton;

    let init = function () {
        contenido = document.getElementById('meses');
        boton = document.getElementById('boton');

        boton.addEventListener('click', mostrarMeses);
    }

    let mostrarMeses = function () {
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        for (let i = 0; i < meses.length; i++) {
            contenido.innerHTML += "<p>" + meses[i] + "</p>\n";              
        }

    }

    document.addEventListener("DOMContentLoaded", init);

}
