const read = require('prompt-sync')();
const write = console.log;
//16.	Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.
//entrada:nombre=0(leer), primerCaracter=0(calculado), ultimoCaracter=0(calculado)
//proceso:
//Para i <- 1 Hasta 3 Con Paso 1 Hacer
		//Escribir "Ingrese el nombre en la posición ", i
		//Leer arregloNombres[i]
	//FinPara
	
	//Escribir "Los primeros y últimos caracteres de cada nombre son:"
	
	//Para i <- 1 Hasta 3 Con Paso 1 Hacer
		//Escribir "Nombre ", i, ": Primer carácter = ", arregloNombres[i][1], " - Último carácter = ", arregloNombres[i][Longitud(arregloNombres[i])]
	//FinPara
//salida:resultado de primer y ultimo caracter

function procesarArreglo() {
    let nombres = [];
    let primerCaracter, ultimoCaracter;
  
    for (let i = 0; i < 3; i++) {
      nombres[i] = read("Ingrese un nombre: ");
    }
  
    for (let i = 0; i < 3 ;i++) {
      primerCaracter = nombres[i][0];
      ultimoCaracter = nombres[i][3];
      write("Primer carácter del nombre", i + 1, ":", primerCaracter);
      write("Último carácter del nombre", i + 1, ":", ultimoCaracter);
    }
  }
  
  procesarArreglo();