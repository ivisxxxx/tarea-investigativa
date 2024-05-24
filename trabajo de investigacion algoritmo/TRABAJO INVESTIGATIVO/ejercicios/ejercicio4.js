const read = require('prompt-sync')();
const write = console.log;
//4.Diseñar un algoritmo que lea el peso de un hombre en 
//libras y nos devuelva su peso en kilogramos y gramos(nota: una libra equivale a 0.453593 kilogramos)
//entrad: libras=0(leer), kilogramos=0(calculada), gramos=0(calculada)
//proceso:
//kilogramos = libras * 0.453593
//gramos = kilogramos * 1000
//salida: resultado kilogramos y gramos
function peso(){
let libras=0, kilogramos=0, gramos=0
libras=read("Ingrese el peso en libras:");

kilogramos = libras * 0.453593;
gramos = kilogramos * 1000;

write(`El peso en kilogramos es: ${kilogramos}`);
write(`El peso en gramos es: ${gramos}`);
}
peso()