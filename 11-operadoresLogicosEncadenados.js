const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array ("Bogotá", "Lima", "Santiago", "Montevideo");

let edadPasajero = 12;
let estaAcompañado = true;
let valorPasaje = 1000;

console.log(`Verificando pasajes para ${ciudadDestino}`);
//Verificamos si cumple las reglas

if (edadPasajero >=18 && estaAcompañado){
    if (ciudadesDisponibles.indexOf(ciudadDestino)> -1){
        console.log(`La ciudad de destino ${ciudadDestino} está disponible`) ;
        console.log('El pasaje es:', valorPasaje ,'soles');
    } else{
        console.log(`No se puede llegar a ${ciudadDestino}`);
        console.log ('El pasaje no es válido')} 
    }else {
    console.log("Debes ser mayor de edad y tener un adulto");
}