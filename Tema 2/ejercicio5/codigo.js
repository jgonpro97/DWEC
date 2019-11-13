/**
 * 5. Completar las condiciones de los if del siguiente script para que los mensajes de los alert() se muestren siempre de forma correcta:
 * @author Juan Manuel González Prófumo
 */
{
    let info, boton;

    let init = function () {
        info = document.getElementById('info');
        boton = document.getElementById('boton');

        boton.addEventListener('click', comprobar);
    }

    let comprobar = function() {
        let numero1 = 5;
        let numero2 = 8;
    
        if(numero1 < numero2) {
            info.innerHTML += "<p>numero1 no es mayor que numero2</p>";
        }
    
        if(numero2 > 0) {
            info.innerHTML += "<p>numero2 es positivo</p>";
        }
    
        if(numero1 < 0 || numero1 != 0) {
            info.innerHTML += "<p>numero1 es negativo o distinto de cero</p>";
        }
    
        if(++numero1 < numero2) {
            info.innerHTML += "<p>Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2</p>";
        }
    }

    document.addEventListener("DOMContentLoaded", init);
}
