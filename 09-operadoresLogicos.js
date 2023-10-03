const cuidadDestino = "Lima";
const ciudadesDisponibles = new Array ("Bogotá", "Lima", "Santiago", "Montevideo");

//condición if
// console.log(ciudadesDisponibles.indexOf(cuidadDestino));
// if (valorPasaje === 1000){
//     console.log('El pasaje es:', valorPasaje ,'soles');
// } else {
// console.log ('El pasaje no es válido')}
const valorPasaje = 1000; 
const edadPasajero = 17;
const estaAcompañado = true;
// AND = && Se devén cumplir las dos condiciones
// OR = || Cualquiera de las dos condiciones
// NOT = ! No se cumple la condición
if (edadPasajero >= 18 || estaAcompañado){
    if ((ciudadesDisponibles.indexOf(cuidadDestino) >= -1) && edadPasajero >= 18){
        console.log(`La ciudad de destino ${cuidadDestino} está disponible`) ;
        console.log('El pasaje es:', valorPasaje ,'soles');
    } else {
        console.log(`No se puede llegar a ${cuidadDestino}`)
        console.log ('El pasaje no es válido')
    }
}

const edadPasajero1 = 17;
const estaAcompañado1 = false;
if (!(ciudadesDisponibles.indexOf(cuidadDestino) >= -1) && edadPasajero1 >= 18 || estaAcompañado1){
    console.log(`No se puede llegar a ${cuidadDestino}`)
    console.log ('El pasaje no es válido')
} else {
    console.log(`La ciudad de destino ${cuidadDestino} está disponible`);
    console.log('El pasaje es:', valorPasaje ,'soles');
}





