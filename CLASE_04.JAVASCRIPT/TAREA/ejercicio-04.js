/* Ejercicio 4 (un poquito más difícil) 
Recorrer un array de numeros y devuelva el mayor. */

const numeros = [7,10,1,3,5,9,4,2]

let mayor = 0;

for (let i = 0; i <= numeros.length; i++){
    if(numeros[1] > mayor){
        mayor = numeros[i]
    }
}

console.log(`El mayor de estos numeros ${numeros} es ${mayor}`)
