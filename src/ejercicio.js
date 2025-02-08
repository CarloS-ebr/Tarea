

const numeroControl = prompt("Ingresa el número de control del estudiante:");
const calificacion1 = parseFloat(prompt("Ingresa la primera calificación:"));
const calificacion2 = parseFloat(prompt("Ingresa la segunda calificación:"));
const calificacion3 = parseFloat(prompt("Ingresa la tercera calificación:"));
const calificacion4 = parseFloat(prompt("Ingresa la cuarta calificación:"));

const promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;

console.log(`Número de Control: ${numeroControl}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);

