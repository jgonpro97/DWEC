/**
 * 4. A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
 *
 * 1. Determinar cual de los dos elementos de texto es mayor
 * 2. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
 * 3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
 * @author Juan Manuel González Prófumo
 */
{
    let valores = [true, 5, false, "hola", "adios", 2];
    let info, boton;

    let init = function () {
        info = document.getElementById('info');
        boton = document.getElementById('boton');

        boton.addEventListener('click', comprobar);
        boton.addEventListener('click', calcular);
    }

    let comprobar = function() {
        let cadena1 = valores[3];
        let cadena2 = valores[4];
    
        info.innerHTML += "<p>" + cadena1 + " > " + cadena2 + " = " + (cadena1 > cadena2) + "</p>";
    
        let boolean1 = valores[0];
        let boolean2 = valores[2];
    
        //Resultado true
        info.innerHTML += "<p>" + boolean1 + " || " + boolean2 + " = " + (boolean1 || boolean2) + "</p>";
    
        //Resultado false
        info.innerHTML += "<p>" + boolean1 + " && " + boolean2 + " = " + (boolean1 && boolean2) + "</p>";
    }

    let calcular = function() {

        let numero1 = valores[1];
        let numero2 = valores[5];
    
       info.innerHTML += "<p>" + numero1 + " + " + numero2 + " = " + (numero1 + numero2) + "</p>";
    
        //Resta
        info.innerHTML += "<p>" + numero1 + " - " + numero2 + " = " + (numero1 - numero2)  + "</p>";
    
        //Multiplicación
        info.innerHTML += "<p>" + numero1 + " * " + numero2 + " = " + (numero1 * numero2) + "</p>";
    
        //División
        info.innerHTML += "<p>" + numero1 + " / " + numero2 +  " = " + (numero1 / numero2) + "</p>";
    
        //Módulo
        info.innerHTML += "<p>" + numero1 + " % " + numero2 + " = " + (numero1 % numero2) + "</p>";
    }

    document.addEventListener("DOMContentLoaded", init);

}