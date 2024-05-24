const read = require('prompt-sync')();
const write = console.log;
//19.	Dada una cadena presentar el primer carácter siempre y cuando sea una vocal
//entrada:cadena=0, carácter=0 
//proceso:
//Si caracter = "a" O caracter = "e" O caracter = "i" O caracter = "o" O caracter = "u" Entonces
           // Retornar Verdadero
       // Sino
            //Retornar Falso
       // FinSi
//salida:el resultado de caracter
function vocal(){
let cadena=0, carácter=0 
cadena = read("Ingrese la cadena:");
carácter = cadena[0];

if (carácter === "a" || carácter === "e" || carácter === "i" || carácter === "o" || carácter === "u") {
  write(`El primer carácter es una vocal: ${carácter}`);
} else {
  write("El primer carácter no es una vocal.");

}
}
vocal()