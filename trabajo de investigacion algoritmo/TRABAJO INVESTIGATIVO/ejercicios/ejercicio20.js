const read = require('prompt-sync')();
const write = console.log;
//20.	Dada una cadena presentar el carácter de en medio, 
//siempre y cuando sea un caracte de puntuación: “;” | “:” | “.” | “,”
//entrada:cadena=0(leer), medio=0(calculado)
//proceso:
//Si mostrarCaracterDeEnMedio(cadena) = Verdadero Entonces
		//Escribir "El carácter de en medio es: ", SubCadena(cadena, Longitud(cadena) / 2, 1)
	//SiNo
		//Escribir "El carácter de en medio no es un carácter de puntuación"
	//FinSi
//salida:resultado del medio
function carate(){
    let cadena=0, medio=0
    cadena = read("Ingrese la cadena:");
    medio = cadena[Math.floor(cadena/ 2)];

    if (medio === ";" || medio === ":" || medio === "." || medio === ",") {
        write(`El carácter de en medio es: ${medio}`);
      } else {
        write("El carácter de en medio no es de puntuación.");
      }
    }
    carate()