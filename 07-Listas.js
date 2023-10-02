const cuidad1 = "Bogotá";
const cuidad2 = "Lima";
const cuidad3 = "Santiago";
// const cuidad4 = "Bogotá";
// const cuidad5 = "Bogotá";

//Definición de una lista de tipo alfanumérico
const ciudadesDisponibles = new Array (cuidad1,cuidad2,cuidad3);
// console.log("Lista de países disponibles: ",ciudadesDisponibles);

//Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia","Perú","Chile"];
// console.log("Lista de países disponibles: ",paisesDisponibles);

{   //agregar al final
    paisesDisponibles.push('Uruguay');
    ciudadesDisponibles .push ('Montevideo');

    // console.log("Lista de países agregados: ",paisesDisponibles);
    // console.log("Lista de ciudades agregados: ",ciudadesDisponibles);

    //agregar al inicio
    paisesDisponibles.unshift('Ecuador');
    ciudadesDisponibles .unshift('Quito');

    console.log("Lista de países insertados: ",paisesDisponibles);
    console.log("Lista de ciudades insertados: ",ciudadesDisponibles);

    //mostrar por posición
    console.log("Lista de países por posición son: ",paisesDisponibles[2]);
    console.log("Lista de ciudades por posición son: ",ciudadesDisponibles[2]);

    //quitar paises y remplazar pro otros
    paisesDisponibles.splice(1,2,'Venezuela', 'Paraguay');
    console.log(paisesDisponibles);

}