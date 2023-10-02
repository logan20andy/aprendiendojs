//Definición de un lista con tipo  de dato alfanumérico
const ciudadesDisponibles = new Array ("Bogotá", "Lima", "Santiago", "Montevideo");
//Definición de un lista con tipo  de dato alfanumérico
const paisesDisponibles = new Array ("Colombia", "Perú", "Chile", "Uruguay", "Brasil", "Paraguay","Venezuela");

console.log(`En la lista de países tenemos ${paisesDisponibles.length} elementos`)

//Remover el primer elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);
//Remover el ultimo elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//filtro de elementos de la lista
const paisesFiltrados = paisesDisponibles.filter((e) => e.length >8);
console.log(`En la lista de países filtrados tenemos ${paisesFiltrados.length} y esos elementos son :`, paisesFiltrados);

//Unificar las listas
console.log(paisesDisponibles.join('/'));

//ordenar la lista
console.log(paisesDisponibles.sort());

//reconociendo la posición
console.log(`Perú esta en la posición: ${paisesDisponibles.indexOf('Perú')}`);

//Unificar dos listas
const listaPaisesYCuidades = paisesDisponibles.concat(ciudadesDisponibles);
console.log("Lista Unida:",listaPaisesYCuidades );