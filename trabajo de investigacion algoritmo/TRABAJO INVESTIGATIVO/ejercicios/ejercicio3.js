const read = require('prompt-sync')();
const write = console.log;
//3.Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.
//entrada: num1=0(leer), num2=0(leer), num3=0(leer), num4=0(leer)
//proceso:
//producto <- num1 * num2 * num3 * num4
   // suma <- num1 + num2 + num3 + num4
   // media <- suma / 4
   //salida:resultado producto , suma, medio
function Algoritmo() {
    let num1=0, num2=0, num3=0, num4=0
    num1 = parseFloat(read("Ingrese el primer número:"));
    num2 = parseFloat(read("Ingrese el segundo número:"));
    num3 = parseFloat(read("Ingrese el tercer número:"));
    num4 = parseFloat(read("Ingrese el cuarto número:"));

    producto = num1 * num2 * num3 * num4;
    suma = num1 + num2 + num3 + num4;
    mediaAritmetica = (num1 + num2 + num3 + num4) / 4;

write(`El producto de los 4 números es: ${producto}`);
write(`La suma de los 4 números es: ${suma}`);
write(`La media aritmética de los 4 números es: ${mediaAritmetica}`);
}
Algoritmo()