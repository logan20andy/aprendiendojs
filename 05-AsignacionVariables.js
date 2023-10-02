// palabra const
// espacio de memoria que no cambia con el tiempo 
 const valorPasaje =1650;
 console.log(valorPasaje);
 //console.log("El pasaje del vuelo se cobra por: "+valorPasaje+" pesos");

 const nombrePasajero = "Leonardo";
 const apellidoPasajero = "De la cruz"
 nombreCompleto = nombrePasajero + " " + apellidoPasajero;
 console.log(`Nombre completo: ${nombreCompleto}`);
// palabra let
// espacio de memoria que pueda cambiar durante la ejecución del programa
let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(`${nombreCompletoPasajero} tiene un pasaje de $${valorPasaje}`);

// palabra var
// espacio de memoria que no cambia con el tiempo
//el alcance
var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;
{
    console.log(nombreCompletoDelPasajero);
}
//  solo sirve dentro del bloque

