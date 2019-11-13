/**
* 14. A partir de la página web proporcionada, completar el código JavaScript para que:
*
* a) Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
* b) Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
* c) Completar el resto de enlaces de la página para que su comportamiento sea identico al del primer enlace
* d) Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML)
* @author Juan Manuel González Prófumo
*/
{

    let c1, c2, c3, e1, e2, e3;
    
    let init = function () {
        c1 = document.getElementById("contenidos_1");
        e1 = document.getElementById("enlace_1");

        c2 = document.getElementById("contenidos_2");
        e2 = document.getElementById("enlace_2");

        c3 = document.getElementById("contenidos_3");
        e3 = document.getElementById("enlace_3");
    
        e1.addEventListener('click', function(event){
            event.preventDefault;
            mostrarOcultar(c1, e1);
        });


        e2.addEventListener('click', function(event){
            event.preventDefault;
            mostrarOcultar(c2, e2)
        });

        e3.addEventListener('click', function(event){
            event.preventDefault;
            mostrarOcultar(c3, e3)
        });

    }

    let mostrarOcultar = function(elemento, enlace) {

        if(elemento.style.display == "" || elemento.style.display == "block"){
            elemento.style.display = "none";
            enlace.innerHTML = "Mostrar elemento";
        }
        
        else{
            elemento.style.display = "block";
            enlace.innerHTML = "Ocultar elemento";

        }
    }

    document.addEventListener("DOMContentLoaded", init);

}