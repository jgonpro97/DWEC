/**
* 17. Mejorar el ejemplo anterior indicando en todo momento al usuario el número de caracteres que aún puede escribir. 
* Además, se debe permitir pulsar las teclas Backspace, Supr. y las flechas horizontales cuando se haya llegado al máximo número de caracteres.
* @author Juan Manuel Gonzalez Profumo
*/
{
  let texto;
  let info;
  const MAXIMO_CARACTERES = 100;
  
  let init = function () {
    texto = document.getElementById('texto');
    info = document.getElementById('info');

    document.addEventListener("keydown", limita);
    document.addEventListener("keyup", actualiza);
  }

  let limita = function(event) {

    let codigoCaracter = event.key;

    if(codigoCaracter == "ArrowLeft" || codigoCaracter == "ArrowRight" || codigoCaracter == "Backspace" || codigoCaracter == "Delete"){
      return true;
    }
    
    else if(texto.value.length >= MAXIMO_CARACTERES ) {
      event.preventDefault();
    }

    else {
      return true;
    }
    
  }

  let actualiza = function(){

    if(texto.value.length >= MAXIMO_CARACTERES ) {
        info.innerHTML = "Máximo " + MAXIMO_CARACTERES + " caracteres";
    }

    else {
        info.innerHTML = "Se pueden escribir " + (MAXIMO_CARACTERES - texto.value.length) + " caracteres";
    }

  }    

  document.addEventListener("DOMContentLoaded", init);

}