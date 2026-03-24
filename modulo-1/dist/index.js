"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_1 = require("./math-utils");
const datos = [1, 12, 11, 94, 10, 60, 11, 0];
console.log("Media:", (0, math_utils_1.calcularMedia)(datos));
console.log("Mediana:", (0, math_utils_1.calcularMediana)(datos));
console.log("Sin atipicos:", (0, math_utils_1.filtrarAtipicos)(datos, 20));
