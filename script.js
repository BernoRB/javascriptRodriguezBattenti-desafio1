/* 
    Este es un juego en el cual tenés que adivinar si el próximo número generado al azar es mayor o menor que el actual.
    Tiene un "puntaje" que suma los aciertos y que se resetea al perder.
*/

// Se inician variables globales: los números iniciales y el puntaje en cero.
numeroAnterior = 5
numeroProximo = 5
puntaje = 0

// Esta función le indica el número actual y le consulta si cree que el próximo será menor o mayor.
// Checkea la validez de su respuesta y lo envía o no a la función que evalúa el acierto o el error.
function inicio() {
    rta = prompt("El numero actual es " + numeroProximo + ", ¿el próximo generado al azar será mayor o menor? escriba MAYOR o MENOR")
    rta = rta.toLowerCase()
    if ((rta != "mayor") && (rta != "menor")) {
        alert("Respuesta incorrecta, vamos de nuevo")
        inicio()
    } else
        evaluar(rta)
}

// Esta función recibe la respuesta del usuario. Arranca llamando a la función que genera el número próximo
// y luego envía a funciones según haya acertado o no la respuesta.
function evaluar(rta) {
    generarNumeros()
    if (((rta == "mayor") && (numeroProximo > numeroAnterior)) || ((rta == "menor") && (numeroProximo < numeroAnterior)))
        acerto()
    else
        erro()
}

// Genera un número al azar entre 1 y 10
function generarNumeros() {
    numeroAnterior = numeroProximo
    numeroProximo = Math.floor(Math.random() * 10) + 1
}

// Si acertó su puntaje se incrementa, se le indica al usuario como viene y juega de nuevo.
function acerto() {
    puntaje++
    alert("¡Acertaste!, el número era " + numeroProximo + ". Llevas acumulados " + puntaje + " puntos. Dale al boton para seguir jugando")
    inicio()
}

// Si le erró se le indica junto a su puntaje final. Se resetean a los valores iniciales las variables globales. Juega de nuevo.
function erro() {
    alert("¡Le erraste!, el número era " + numeroProximo + ". Le acertaste " + puntaje + " veces. Dale al botón para volver a jugar.")
    puntaje = 0
    numeroAnterior = 5
    numeroProximo = 5
    inicio()
}

// Inicia la aplicación
inicio()