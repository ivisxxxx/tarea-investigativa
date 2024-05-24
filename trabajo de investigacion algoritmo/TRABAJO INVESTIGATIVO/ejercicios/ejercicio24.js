const read = require('prompt-sync')();
const write = console.log;
//24.Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos
//entrada:arreglo=0(leer)
//proceso:
//Dimension arreglo[5]  // arreglo con 5 elementos
//Escribir "El arreglo tiene ", Longitud(arreglo), " elementos."
//salida:el resultado del arreglo
function arreglo(){
    let arreglo=0
arreglo = read("Ingrese los elementos del arreglo separados por comas:");

write(`El arreglo tiene ${arreglo} elementos.`);
}
arreglo()