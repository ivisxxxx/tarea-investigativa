const read = require('prompt-sync')();
const write = console.log;
//22.Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo
//entrada:longitud1=0(leer), longitud2=0(leer)
//proceso:
//Si longitud1 < longitud2 Entonces
   // Escribir "El primer nombre es menor que el segundo"
//SiNo
   // Definir i Como Entero
   // Para i <- 1 Hasta longitud1 Hacer
       // Si SubCadena(nombre1, i, 1) > SubCadena(nombre2, i, 1) Entonces
          //  Escribir "El primer nombre es mayor que el segundo"
          //  Salir
        //FinSi
    //FinPara
    
    //Si i > longitud2 Entonces
       // Escribir "El primer nombre es menor que el segundo"
    //FinSi
//FinSi
//FinSi
//salida:resultado de longitud
function Nombres(){
let nombre1=0, nombre2=0

nombre1 = read("Ingrese el primer nombre:");
nombre2 = read("Ingrese el segundo nombre:");

if (nombre1 === nombre2) {
  write("Los nombres son iguales.");
} else if (nombre1 < nombre2) {
  write("El primer nombre es menor que el segundo.");
} else {
  write("El primer nombre es mayor que el segundo.");
}
}
Nombres()