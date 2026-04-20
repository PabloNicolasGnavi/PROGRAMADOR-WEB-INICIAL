/* Ejercicio 4 (un poquito más difícil) 
Recorrer un array de numeros y devuelva el mayor. */

let lista = [7,10,1,3,5,9,4,2]

for (let i = 0; i < lista.length; i++){
    let primerNumero = lista[i];
    let segundoNumero = lista[i+1];
    if (primerNumero < segundoNumero){
        console.log(`${segundoNumero} es el numero más grande`)
    }
}