const read = require('prompt-sync')();
const write = console.log;
//7.	Algoritmo que pida dos números y presenta el mayor de los dos 
//siempre y cando el primero sea par y el segundo impar
//entrada:num1=0(leer), num2=0(leer)
//proceso:
//si num1 % 2 = 0 y num2 % 2 ≠ 0 entonces
       // si num1 > num2 entonces
           // mayor <- num1
        //sino
           // mayor <- num2
       // finSi
       // Escribir("El mayor número es:", mayor)
    //sino
       // Escribir("No se cumple la condición requerida.")
    //finSi
//salida:resultado si es mayor
function paroImpar(){
    let num1=0, num2=0

    num1=parseInt(read("Ingrese el primer número:"));
    num2=parseInt(read("Ingrese el segundo número:"));

    if (num1 % 2 === 0 && num2 % 2!== 0) {
        if (num1 > num2) {
          write(`El primer número es mayor que el segundo.`);
        } else {
          write(`El segundo número es mayor que el primer número.`);
        }
      } else {
        write("El primer número no es par o el segundo número no es impar.");
      }
}
paroImpar()