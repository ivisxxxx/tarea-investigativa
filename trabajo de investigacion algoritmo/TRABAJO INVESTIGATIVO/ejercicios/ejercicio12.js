const read = require('prompt-sync')();
const write = console.log;
//12.	Dado un mes en número, presentar el nombre de ese mes. Para la solución utilice arreglos.
//entrada:mes=0(leer), nombreMeses=0(calculado)
//proceso:
//Para i <- 1 Hasta 12 Hacer
       // Si nombres_meses[i, 1] = numero_mes Entonces
           // Escribir("El mes correspondiente al número ", numero_mes, " es ", nombres_meses[i, 2])
           // Detener
        //FinSi
    //FinPara
//salida:resultado nombresmeses
function numeroMes(){
    let mes=0, nombreMeses=0
     
    mes = parseInt(read("Ingrese el mes en número:"));
     
    nombreMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    if (mes >= 1 && mes <= 12) {
        write(`El mes es: ${nombreMeses[mes - 1]}`);
      } else {
        write("El mes ingresado no es válido.");
      }
}
numeroMes()