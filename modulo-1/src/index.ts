import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils";

const datos = [1, 12, 11, 94, 10, 60, 11, 0];

console.log("Media:", calcularMedia(datos));
console.log("Mediana:", calcularMediana(datos));
console.log("Sin atipicos:", filtrarAtipicos(datos, 20));