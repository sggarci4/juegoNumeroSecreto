let numerSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numerSecreto);
function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);   
    
    console.log(intentos)
    if ( numeroUsuario === numerSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto
        if(numeroUsuario > numerSecreto){
            asignarTextoElemento('p','El número es menor');
        }else{
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarInput();
    }
    return;
}
function limpiarInput() {

    /*
    let contenidoCaja = document.querySelector('#valorUsuario');
    contenidoCaja.value = '';
    */
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos lo números posibles');
    } else {
        // Si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return  numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numerSecreto=generarNumeroSecreto();
    intentos=1;
    
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarInput();
    // Indicar mensaje de intervalo de numeros
    // Generar nuevo numero aleatorio
    // Inicializar contador de intentos
    condicionesIniciales();
    // Deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
console.log(numerSecreto)