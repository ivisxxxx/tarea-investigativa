const read = require('prompt-sync')();
const write = console.log;
//9.	Determinar cuánto se  debe pagar por x  cantidad de colas, considerando que si 
//son menos de 12 colas, el costo por unidad es de $0,25 caso  contrario el precio será  10% menos.
//entrada:cantidadColas=0(leer), precioUnidad=0(leer), precioTotal=0(calculado)
//proceso:
//si cantidad_colas < 12 entonces
//costo_unitario <- 0.25
//sino
//costo_unitario <- 0.25 - (0.25 * 0.10) // 10% de descuento
//finSi

//costo_total <- cantidad_colas * costo_unitario
//salida:resultado del preciototal
function  cantidad(){
let cantidadColas=0, precioUnidad=0, precioTotal=0
 cantidadColas = parseInt(read("Ingrese la cantidad de colas:"));

if (cantidadColas < 12) {
  precioUnidad = 0.25;
} else {
  precioUnidad = 0.90;
}

precioTotal = cantidadColas * precioUnidad;

write(`El precio total a pagar es: $${precioTotal}`);
}
cantidad()