const read = require('prompt-sync')();
const write = console.log;
//15.	Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo.
//entrada: valores=0(leer)
//proceso:
//Para i = 1 HASTA 5 HAGA
 // Genere un valor aleatorio entre -100 y 100 y guárdelo en la posición i del arreglo valores
//FinPara

//Si (valores[1] MOD 2 = 0 Y valores[1] > 0) Entonces
  //Escriba "El primer valor del arreglo es par positivo: " + valores[1]
//FinSi

//Dimensione ultimo As Entero = 0
//Para i = 1 HASTA 5 HAGA
  //Si (valores[i] MOD 2 = 1 Y valores[i] < 0) Entonces
   // ultimo = i
   // FinSi
//FinPara

//Si (ultimo > 0) Entonces
  //Escriba "El último valor impar negativo del arreglo es: " + valores[ultimo]
//FinSi
//salida el resultado de los valores

function almacenarEImprimir() {
    let valores=0
    // Arreglo para almacenar los valores ingresados
    valores = [];

    // Solicitar al usuario que ingrese 5 valores y almacenarlos en el arreglo
    for (let i = 0; i < 5; i++) {
        valores[i] = parseFloat(read(`Ingrese el valor ${i + 1}: `));
    }

    // Imprimir el arreglo
    write("Valores ingresados:", valores);

    // Imprimir el primer valor si es par y positivo, o el último si es impar y negativo
    if (valores[0] % 2 === 0 && valores[0] > 0) {
        write("El primer valor es par y positivo:", valores[0]);
    } else if (valores[4] % 2 !== 0 && valores[4] < 0) {
        write("El último valor es impar y negativo:", valores[4]);
    } else {
        write("No se cumple ninguna condición requerida.");
    }
}

almacenarEImprimir();
