const read = require('prompt-sync')();
const write = console.log;
//11.	Dado un día en numero, presentar el nombre de ese día. Para la solución utilice arreglos.
//entrada:dia=0, nombredias=0
//proceso:
//Para i <- 1 Hasta 7 Hacer
       // Si nombres_dias[i, 1] = dia Entonces
           // Escribir("El día correspondiente al número ", dia, " es ", nombres_dias[i, 2])
           // Detener
       // FinSi
    //FinPara
//salida:resultado nombredias
function nombreDias(){
    let dia=0, nombredias=0

    dia = parseInt(read("Ingrese el día en número:"));
    nombredias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    if (dia >= 1 && dia <= 7) {
        write(`El día es: ${nombredias}`);
      } else {
        write("El día ingresado no es válido.");
      }
}
nombreDias()