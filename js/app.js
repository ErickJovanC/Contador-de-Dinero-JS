// Variables y constantes
// Seleccionamos los elementos que contienen la unidades
const mil = document.querySelector('#mil');
const quinientos = document.querySelector('#quinientos');
const docientos = document.querySelector('#docientos');
const cien = document.querySelector('#cien');
const cincuenta = document.querySelector('#cincuenta');
const veinte = document.querySelector('#veinte');
const diez = document.querySelector('#diez');
const cinco = document.querySelector('#cinco');
const dos = document.querySelector('#dos');
const uno = document.querySelector('#uno');
const cincuentaC = document.querySelector('#cincuentaC');

// Seleccionamos las etiquetas que contendran los totales
const totalMil = document.querySelector('#totalMil');
const totalQuinientos = document.querySelector('#totalQuinientos');
const totalDocientos = document.querySelector('#totalDocientos');
const totalCien = document.querySelector('#totalCien');
const totalCincuenta = document.querySelector('#totalCincuenta');
const totalVeinte = document.querySelector('#totalVeinte');
const totalDiez = document.querySelector('#totalDiez');
const totalCinco = document.querySelector('#totalCinco');
const totalDos = document.querySelector('#totalDos');
const totalUno = document.querySelector('#totalUno');
const totalCincuentaC = document.querySelector('#totalCincuentaC');

// Elementos de interes
const sumaTotal = document.querySelector('#sumaTotal');
const btnBorrar = document.querySelector('#btnBorrar');

// Evetos que se ejecutaran cada que se escriba en una campo
eventos();

function eventos(){
    mil.addEventListener('input', sumarValor);
    quinientos.addEventListener('input', sumarValor);
    docientos.addEventListener('input', sumarValor);
    cien.addEventListener('input', sumarValor);
    cincuenta.addEventListener('input', sumarValor);
    veinte.addEventListener('input', sumarValor);
    diez.addEventListener('input', sumarValor);
    cinco.addEventListener('input', sumarValor);
    dos.addEventListener('input', sumarValor);
    uno.addEventListener('input', sumarValor);
    cincuentaC.addEventListener('input', sumarValor);
    btnBorrar.addEventListener('click', borrar);
};

// Funciones

/** Esta función obtine la denominaci{on de la moneda a traves
 *  del id de cada elemento, lo multiplica por el valor correcto
 *  e imprime el resultado
 */ 
function sumarValor(){
    switch(this.id){
        case 'mil':
            totalMil.textContent = this.value * 1000;
        break;
        case 'quinientos':
            totalQuinientos.textContent = this.value * 500;
        break;
        case 'docientos':
            totalDocientos.textContent = this.value * 200;
        break;
        case 'cien':
            totalCien.textContent = this.value * 100;
        break;
        case 'cincuenta':
            totalCincuenta.textContent = this.value * 50;
        break;
        case 'veinte':
            totalVeinte.textContent = this.value * 20;
        break;
        case 'diez':
            totalDiez.textContent = this.value * 10;
        break;
        case 'cinco':
            totalCinco.textContent = this.value * 5;
        break;
        case 'dos':
            totalDos.textContent = this.value * 2;
        break;
        case 'uno':
            totalUno.textContent = this.value * 1;
        break;
        case 'cincuentaC':
            totalCincuentaC.textContent = this.value * 0.5;
        break;
    }
    sumarTotal();
}

// Se realiza la sima de los totales y se imprime en pantalla
function sumarTotal(){
    sumaTotal.textContent = (
        parseInt(totalMil.textContent) +
        parseInt(totalQuinientos.textContent) +
        parseInt(totalDocientos.textContent) +
        parseInt(totalCien.textContent) +
        parseInt(totalCincuenta.textContent) +
        parseInt(totalVeinte.textContent) +
        parseInt(totalDiez.textContent) +
        parseInt(totalCinco.textContent) +
        parseInt(totalDos.textContent) +
        parseInt(totalUno.textContent) +
        parseFloat(totalCincuentaC.textContent)
    );
}

// Tras precionar el botón de borrar, las sumas se cambian a 0
function borrar(e){
    totalMil.textContent = 0;
    totalQuinientos.textContent = 0;
    totalDocientos.textContent = 0;
    totalCien.textContent = 0;
    totalCincuenta.textContent = 0;
    totalVeinte.textContent = 0;
    totalDiez.textContent = 0;
    totalCinco.textContent = 0;
    totalDos.textContent = 0;
    totalUno.textContent = 0;
    totalCincuentaC.textContent = 0;
    sumarValor();
}