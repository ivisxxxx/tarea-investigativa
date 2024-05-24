const read = require('prompt-sync')();
const write = console.log;
//2.	Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número. 
// entrada= num=0(leer), 
//proceso
//doble = numero * 2
//triple = numero * 3
//salida= resultado del doble y triple
function numero() {
    let num=0
    num = parseInt(read("Ingrese un número entero:"));
    doble = num * 2;
    triple = num * 3;

write(`El doble del número es: ${doble}`);
write(`El triple del número es: ${triple}`);
}
numero()