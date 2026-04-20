/* Ejercicio 3
Crea un bucle for que recorra un array de productos.
Dentro del bucle, utiliza console.log() para imprimir un mensaje por cada elemento. El mensaje debe indicar lo que necesitas comprar, siguiendo el formato: "¡No te olvides de comprar [producto]!". */

const productos = ['manzana','pera','naranja','frutilla','anana','kiwi']

for (let i = 0; i < productos.length; i++){
    console.log(`No te olvides de comprar ${productos[i]}`)
}


