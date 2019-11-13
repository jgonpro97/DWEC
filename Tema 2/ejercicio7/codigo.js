/**
 * 7. El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2)
 * x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
 * 
 * Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
 * @author Juan Manuel González Prófumo
 */
{
   let info, boton;

   let init = function () {
       info = document.getElementById('info');
       boton = document.getElementById('boton');

       boton.addEventListener('click', calcularFactorial);
   }

   let calcularFactorial = function() {
      let numero = document.getElementById('numero').value;

      let resultado = 1;
     
      for (let i = 1; i <= numero; i++) {
         resultado *= i;
      }
     
      info.innerHTML = "El factorial de " + numero + " es: " + resultado;
   }

   document.addEventListener("DOMContentLoaded", init);

}