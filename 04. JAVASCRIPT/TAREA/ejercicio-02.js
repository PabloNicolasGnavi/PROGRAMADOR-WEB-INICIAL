/* Ejercicio 2
Utilizando estructura de control determinar el medio de transporte más adecuado para una persona. Dada una distancia en metros, sugiera un medio de transporte basado en las siguientes reglas:
0 a 1000 metros = pie
1000 a 10000 metros = bicicleta
10000 a 30000 metros = colectivo
30000 a 100000 metros = auto
+100000 = avion
 */

var distancia = 200000

if ((distancia >= 0) && (distancia < 1000)) {console.log('Debes ir a pie')}
else if ((distancia >= 1000) && (distancia < 10000)) {console.log('Debes ir en bicicleta')}
else if ((distancia >= 10000) && (distancia < 30000)) {console.log('Debes ir en colectivo')}
else if ((distancia >= 30000) && (distancia < 100000)) {console.log('Debes ir en auto')}
else {console.log('Debes ir en avión')}     
