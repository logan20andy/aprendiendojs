//tipos de datos
//Alfanuméricos
// const nombrePasajero = "Pedro Silva";
//console.log(nombrePasajero); <NAME>
NombrePasajero = "Ramon Silva";
console.log(NombrePasajero);

//numéricos
// const valorBoleto = 1650;
// console.log(valorBoleto);

let valorBoleto= 1650;
const tasaEmbarque = (valorBoleto*0.5)/100;
var gestionAgencia = 120.55;

//lógicos (true, false)
let boletoActivo = true;

//operadores aritméticos

// Suma
let totalBoletos =  valorBoleto + tasaEmbarque + gestionAgencia;
console.log("el total del pasaje es:"+ totalBoletos);
console.log("y el total del desembarque es " + tasaEmbarque);

// concatenación textos
// let mensajeCompleto = "El valor del boleto es: "+totalBoletos+" y la agencia cobra un porcentaje " + tasaEmbarque; console.log(mensajeCompleto);

let nombrePasajero = "Leonardo";
let apellidoPasajero = " De la Cruz";

let nombreCompleto = nombrePasajero + apellidoPasajero;
let pasaporte = parseInt('1000') + parseFloat('12');
let multiplicación = parseInt('1000') / parseFloat('100');

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicación);

let noEsUnNumero = parseInt('NASDMSO');
console.log(noEsUnNumero);

