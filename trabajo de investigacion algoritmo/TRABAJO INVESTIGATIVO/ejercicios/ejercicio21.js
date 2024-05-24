const read = require('prompt-sync')();
const write = console.log;
//21.Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo
//entrada:primerCaracter=0(leer), segundoCaracter=0(leer)
//proceso:
//Si car1 = car2 Entonces
		//Escribir "Los caracteres son iguales"
	//SiNo
		//Si car1 < car2 Entonces
			//Escribir "El primer carácter es menor que el segundo"
		//SiNo
			//Escribir "El primer carácter es mayor que el segundo"
		//FinSi
	//FinSi
//salida:resultado si es mayor o menor  
function compararCaracteres() {
    let primerCaracter=0, segundoCaracter=0
    // Solicitar al usuario que ingrese dos caracteres
     primerCaracter = read("Ingrese el primer caracter: ");
     segundoCaracter = read("Ingrese el segundo caracter: ");

    // Comparar los caracteres
    if (primerCaracter === segundoCaracter) {
        write("Los caracteres son iguales.");
    } else if (primerCaracter < segundoCaracter) {
        write("El primer caracter es menor que el segundo.");
    } else {
        write("El primer caracter es mayor que el segundo.");
    }
}
compararCaracteres();
