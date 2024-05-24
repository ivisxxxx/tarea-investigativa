const read = require('prompt-sync')();
const write = console.log;
//18.	Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra
//entrada:cadena=0, ultimoCaracter=0
//proceso:
//Si Longitud(cadena) > 0 Entonces
//		ultimoCaracter <- cadena[Longitud(cadena)]
	//	Si EsLetra(ultimoCaracter) Entonces
			//Escribir "El último carácter es una letra: ", ultimoCaracter
		//SiNo
		//	Escribir "El último carácter no es una letra"
		//FinSi
	//SiNo
		//Escribir "La cadena está vacía"
	//FinSi
//salida:el resultado del ultimocarcater
function procesarCadena() {
    let cadena=0, ultimoCaracter=0
    // Pedir al usuario que ingrese una cadena
    cadena = read("Ingrese una cadena: ");
  
    // Verificar si el último carácter es una letra
      ultimoCaracter = cadena[cadena.length - 1];
    if ((ultimoCaracter >= 'a' && ultimoCaracter <= 'z') || (ultimoCaracter >= 'A' && ultimoCaracter <= 'Z')) {
      // Imprimir el último carácter de la cadena
      write("El último carácter de la cadena es:", ultimoCaracter);
    } else {
      // Imprimir un mensaje de error
      write("El último carácter de la cadena no es una letra.");
    }
  }
  
  procesarCadena(); 