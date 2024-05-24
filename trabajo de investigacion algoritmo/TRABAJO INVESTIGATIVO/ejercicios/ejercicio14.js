const read = require('prompt-sync')();
const write = console.log;
//14.	Dado una dirección cualquiera presentar la dirección, el primer carácter,
// el del medio y el ultimo de dicha dirección.
//entrada:direccion=0(leer), primerCaracter=0(calculado),caracterMedio=0(calculado), ultimoCaracter=0(calculado) 
//proceso:
//Dimensione longitud As Entero = Longitud(direccion)
//Si (longitud MOD 2 = 0) Entonces
  //Escriba "Carácter del medio: " + direccion.subString(longitud / 2 - 1, 2)
//Sino
  //Escriba "Carácter del medio: " + direccion.subString(longitud / 2, 1)
//FinSi

//Escriba "Último carácter: " + direccion.subString(longitud - 1, 1)
//salida:resultado de primer, medio , ultimo
function obtenerCaracteresDireccion() {
  let direccion=0, primerCaracter=0,caracterMedio=0, ultimoCaracter=0 
  // Pedir al usuario que ingrese la dirección
  direccion = read("Ingrese la dirección: ");

  // Obtener el primer carácter de la dirección
  primerCaracter = direccion[0];
  write("Primer carácter:", primerCaracter);

  // Obtener el carácter del medio de la dirección
  medio = (direccion.length / 2);
  caracterMedio = direccion[medio];
  write("Carácter del medio:", caracterMedio);

  // Obtener el último carácter de la dirección
  ultimoCaracter = direccion[direccion.length - 1];
  write("Último carácter:", ultimoCaracter);
  
}

obtenerCaracteresDireccion();