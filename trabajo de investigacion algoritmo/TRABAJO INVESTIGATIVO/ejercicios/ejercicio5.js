const read = require('prompt-sync')();
const write = console.log;
//5.	Diseñar un algoritmo que resuelva la siguiente expresión matemática:
// x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))
 function expresión(){
    let a=0, b=0, c=0

    a = parseFloat(read("Ingrese el valor de a: "));
    b = parseFloat(read("Ingrese el valor de b: "));
    c = parseFloat(read("Ingrese el valor de c: "));

    x = ((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + (Math.sqrt(Math.pow(a, 3)) / (a * b + c));

    write("El resultado de la expresión es: " + x);
}
expresión()