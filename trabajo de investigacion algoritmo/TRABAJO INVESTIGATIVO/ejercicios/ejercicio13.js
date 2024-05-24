const read = require('prompt-sync')();
const write = console.log;
//13.Dado 5 nombres almacenarlo en un arreglo y
 //luego presentar cada nombre del arreglo desde el ultimo al primero sin usar ciclos.
 //entrada:nombre=0(leer)
 //proceso:
 //Para i = 5 HASTA 1 CON PASO -1 HAGA
 // Escriba el nombre en la posición i del arreglo nombres
//FinPara
//Para i = 1 HASTA 5 HAGA
 // Escriba el nombre en la posición i del arreglo nombres
//FinPara
 //salida:resultado de los nombre
 function Nombres() {
   let nombre

    for (let i = 0; i < 5; i++) {
        nombre = read("Ingrese un nombre: ");
    }
    write("Los nombres en orden inverso son:");
 }
 Nombres()