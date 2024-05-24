const read = require('prompt-sync')();
const write = console.log;
//ejercicio1
//1.Algoritmo que transforme de grados Celsius a Fahrenheit
//entrada:temperatura=0(leer), fahrenheit=0(calculado) 
//proceso:
// Escribir "Por favor, ingresa la temperatura en grados Celsius: "
// Leer celsius
//fahrenheit <- (celsius * 9/5) + 32

//Escribir "La temperatura en grados Fahrenheit es: ", fahrenheit
//salida:fahrenheit
function gradosCelius(){
write("Ingrese la temperatura en grados Celsius:");
let celsius = parseFloat(read());

let fahrenheit = (celsius * 9/5) + 32;

write(`La temperatura en grados Fahrenheit es: ${fahrenheit.toFixed(2)}`);
}
gradosCelius()