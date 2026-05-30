/* Ejercicio 1:
Generar una función que calcule el promedio de 2 notas de parciales por ejemplo la materia
Historia */

function promedio(nota01,nota02){
    let resultado = ((nota01+nota02)/2)
    return resultado
}

const nota01 = 50;
const nota02 = 70;

console.log(`La primer nota es ${nota01}`)
console.log(`La segunda nota es ${nota02}`)
console.log(`El promedio de las notas es ${promedio(nota01,nota02)}`)