const read = require('prompt-sync')();
const write = console.log;
//23.Dado una cadena indicar cuantos elementos tiene, sin usar ciclos 
//entrada: cadena=0
//proceso:
//Si Longitud(cadena) = 0 Entonces
		//Devolver 0
	//Sino
		//Devolver 1 + LongitudSinCiclo(SubCadena(cadena, 2, Longitud(cadena)-1))
	//FinSi
//salida:resultado de la cadena
function cadena(){
    let cadena=0
cadena = read("Ingrese la cadena:");
write(`La cadena tiene ${cadena.length} elementos.`);
}
cadena()