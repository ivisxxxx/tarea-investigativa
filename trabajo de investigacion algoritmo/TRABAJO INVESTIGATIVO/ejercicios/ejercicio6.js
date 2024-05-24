const read = require('prompt-sync')();
const write = console.log;
//6.	Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora.
//Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan al doble
//de la hora de la jornada normal. El porcentaje del seguro social(iess) es del 10% del ingreso total.
//Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.
//entrada:horasTotales=0, horasNormales=40, horasNormalesTrabajadas=0, horasExtras=0, salarioExtras=0, salarioHora=0, salarioNormal=0
  //iess=0, ingresoTotal=0
//proceso:
//si horas_trabajadas > horas_normales entonces
   //sueldo_extra <- (horas_trabajadas - horas_normales) * sueldo_hora * 2
   //sueldo <- horas_normales * sueldo_hora
 // sino
    //sueldo_extra <- 0
    //sueldo <- horas_trabajadas * sueldo_hora
//finSi

//ingreso_total <- sueldo + sueldo_extra
//seguro_social <- ingreso_total * 0.10
//neto <- ingreso_total - seguro_social
//salida:resultado de  horasExtras, horasNormalesTrabajadas,salarioNormal, salarioExtras,ingresoTotal, iess,salarioNeto
function calcularSueldo() {
  let horasTotales=0, horasNormales=40, horasNormalesTrabajadas=0, horasExtras=0, salarioExtras=0, salarioHora=0, salarioNormal=0
  let iess=0, ingresoTotal=0
    // Definir el salario por hora y el número de horas normales trabajadas por semana
  salarioHora = 5;
  horasNormales = 40;

  // Pedir al usuario que ingrese el número total de horas trabajadas
  horasTotales = parseInt(read("Ingrese el número total de horas trabajadas: "));

  // Calcular las horas normales y las horas extras
  horasNormalesTrabajadas = horasTotales;
  horasExtras = 0;
  if (horasTotales > horasNormales) {
    horasExtras = horasTotales - horasNormales;
    horasNormalesTrabajadas = horasNormales;
  }

  // Calcular el salario normal y el salario de horas extras
   salarioNormal = horasNormalesTrabajadas * salarioHora;
   salarioExtras = horasExtras * salarioHora * 2;

  // Calcular el ingreso total
   ingresoTotal = salarioNormal + salarioExtras;

  // Calcular el IESS (10% del ingreso total)
   iess = ingresoTotal * 0.10;

  // Calcular el salario neto
   salarioNeto = ingresoTotal - iess;

  write("Horas normales trabajadas:", horasNormalesTrabajadas);
  write("Horas extras trabajadas:", horasExtras);
  write("Salario normal:", salarioNormal);
  write("Salario de horas extras:", salarioExtras);
  write("Ingreso total:", ingresoTotal);
  write("IESS (10%):", iess);
  write("Salario neto:", salarioNeto);
}

calcularSueldo()