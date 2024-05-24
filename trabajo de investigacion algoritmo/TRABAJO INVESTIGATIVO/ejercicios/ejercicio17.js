const read = require('prompt-sync')();
const write = console.log;
//17.	Dada una cadena presentar el primer carácter siempre y cuando sea un digito
//entrada=cadena=0(leer),primerCarater=0(calculado)
//proceso:
//primerCaracter <- cadena[1]
	
	//Si EsDigito(primerCaracter) Entonces
		//Escribir "El primer carácter es un dígito: ", primerCaracter
	//SiNo
		//Escribir "El primer carácter no es un dígito"
	//FinSi
//salida:el resultado del primer caracter
function procesarCadena() {
  let cadena=0, primerCaracter=0
    // Pedir al usuario que ingrese una cadena
  cadena = read("Ingrese una cadena: ");

  // Verificar si el primer carácter es un dígito
  primerCaracter = cadena[0];
  if (primerCaracter >= '0' && primerCaracter <= '9') {
    // Imprimir el primer carácter de la cadena
    write("El primer carácter de la cadena es:", primerCaracter);
  } else {
    // Imprimir un mensaje de error
    write("El primer carácter de la cadena no es un dígito.");
  }
}



procesarCadena();