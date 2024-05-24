const read = require('prompt-sync')();
const write = console.log;

function  ivis() {
  console.log("1 /para grados Celsius")
  console.log("2 /doble y trible de un numero")
  console.log("3 /suma y media aritmetica")
  console.log("4 /libras a kg")
  console.log("5 /expresion matematica")
  console.log("6 /horas de jornada de un empleado ")
  console.log("7 /mayor   y si son par o impar ")
  console.log("8 /signos de puntuacion ")
  console.log("9 / facrtura de cpor cantidad de cola ")
  console.log("10 /promocion de traje ")
  console.log("11 /monbre de los dias ")
  console.log("12 /nombre de meses")
  console.log("13 /presenta 5 nombres ")
  console.log("14 / una direccion por carcater ")
  console.log("15 /par positivo impar negrativo")
  console.log("16 / nombre en arreglo " )
  console.log("17 /cadena con caracter de dijitos")
  console.log("18 /cadena con caracter de letra ")
  console.log("19 / cadena con caracter de vocal")
  console.log("20 /presenta el caracter de el medio siempre que sea de puntuacion ")
  console.log("21 / caracter si son inguales o son mayores o menores ")
  console.log("22 / nombres si  son iguales ")
  console.log("23 /cadena de elementos")
  console.log("24 / elemeto que tiene  el arreglo")
  console.log("0 / mensaje bonito")

  


  let menu = read("Ingrese una opción de menú: ");

  if(menu === '1') {
    function gradosCelsius() {
      write("Ingrese la temperatura en grados Celsius: ");
      let celsius = parseFloat(read());

      let fahrenheit = (celsius * 9/5) + 32;

      write(`La temperatura en grados Fahrenheit es: ${fahrenheit.toFixed(2)}`);
    }
    gradosCelsius();
  } else if(menu === '2') {
    function numero() {
      let num = 0;
      num = parseInt(read("Ingrese un número entero: "));
      let doble = num * 2;
      let triple = num * 3;

      write(`El doble del número es: ${doble}`);
      write(`El triple del número es: ${triple}`);
    }
    
    numero();
  } else if( menu ==='3') {
    function Algoritmo() {
        let num1=0, num2=0, num3=0, num4=0
        num1 = parseFloat(read("Ingrese el primer número:"));
        num2 = parseFloat(read("Ingrese el segundo número:"));
        num3 = parseFloat(read("Ingrese el tercer número:"));
        num4 = parseFloat(read("Ingrese el cuarto número:"));
    
        producto = num1 * num2 * num3 * num4;
        suma = num1 + num2 + num3 + num4;
        mediaAritmetica = (num1 + num2 + num3 + num4) / 4;
    
    write(`El producto de los 4 números es: ${producto}`);
    write(`La suma de los 4 números es: ${suma}`);
    write(`La media aritmética de los 4 números es: ${mediaAritmetica}`);
    }
    Algoritmo()
  }else if( menu ==='4'){
    function peso(){
        let libras=0, kilogramos=0, gramos=0
        libras=read("Ingrese el peso en libras:");
        
        kilogramos = libras * 0.453593;
        gramos = kilogramos * 1000;
        
        write(`El peso en kilogramos es: ${kilogramos}`);
        write(`El peso en gramos es: ${gramos}`);
        }
        
        peso()


  }else if(menu === '5'){
    function expresión(){
        let a=0, b=0, c=0
    
        a = parseFloat(read("Ingrese el valor de a: "));
        b = parseFloat(read("Ingrese el valor de b: "));
        c = parseFloat(read("Ingrese el valor de c: "));
    
        x = ((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + (Math.sqrt(Math.pow(a, 3)) / (a * b + c));
    
        write("El resultado de la expresión es: " + x);
    }
    
    expresión()
  }else if (menu === '6'){
    function calcularSueldo() {
        let horasTotales=0, horasNormales=40, horasNormalesTrabajadas=0, horasExtras=0, salarioExtras=0, salarioHora=0, salarioNormal=0
        let iess=0, ingresoTotal=0
        salarioHora = 5;
        horasNormales = 40;
      
        horasTotales = parseInt(read("Ingrese el número total de horas trabajadas: "));
    
        horasNormalesTrabajadas = horasTotales;
        horasExtras = 0;
        if (horasTotales > horasNormales) {
          horasExtras = horasTotales - horasNormales;
          horasNormalesTrabajadas = horasNormales;
        }
      
         salarioNormal = horasNormalesTrabajadas * salarioHora;
         salarioExtras = horasExtras * salarioHora * 2;
    
         ingresoTotal = salarioNormal + salarioExtras;
      
         iess = ingresoTotal * 0.10;
      
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
  }else if(menu ==='7'){
    function paroImpar(){
        let num1=0, num2=0
    
        num1=parseInt(read("Ingrese el primer número:"));
        num2=parseInt(read("Ingrese el segundo número:"));
    
        if (num1 % 2 === 0 && num2 % 2!== 0) {
            if (num1 > num2) {
              write(`El primer número es mayor que el segundo.`);
            } else {
              write(`El segundo número es mayor que el primer número.`);
            }
          } else {
            write("El primer número no es par o el segundo número no es impar.");
          }
    }
    
    paroImpar()

  }else if(menu === '8'){
    function carácter(){
        let caracter=0
    
        caracter=read("Ingrese un caracter:");
    
        if (caracter >= "a" && caracter <= "z" || caracter >= "A" && caracter <= "Z"){
            write(`El carácter está comprendido entre las letras a y z.`);
        } else if (caracter === "," || caracter === "." || caracter === ";" || caracter === ":") {
            write(`El carácter es un signo de puntuación.`);
          } else {
            write(`El carácter es: ${caracter}`);
          }
    }
    
    carácter()

  }else if(menu==='9'){
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
    
  }else if(menu ==='10'){
    function AlgoritmoX(){
        let precioTraje=0, descuento=0, precioConDescuento=0, iva=0, pago=0
        precioTraje=parseFloat(read("Ingrese el precio del traje:"));
        
        
        if (precioTraje > 200) {
            descuento = precioTraje * 0.10;
          } else {
            descuento = 10;
          }
        precioConDescuento = precioTraje - descuento 
        iva = precioConDescuento * 0.15 
        pago = precioConDescuento + iva;
        
        write(`Precio del traje: $${precioTraje}`);
        write(`Descuento: $${descuento}`);
        write(`Precio con descuento: $${precioConDescuento}`);
        write(`IVA: $${iva}`);
        write(`Pago: $${pago}`);
        }
        
        AlgoritmoX()

  }else if(menu==='11'){
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

  }else if(menu === '12'){

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
  }else if (menu === '13'){
    function Nombres() {
        let nombre
     
         for (let i = 0; i < 5; i++) {
             nombre = read("Ingrese un nombre: ");
         }
         write("Los nombres en orden inverso son:");
      }
      
      Nombres()

  }else if (menu === '14'){
    function obtenerCaracteresDireccion() {
        let direccion=0, primerCaracter=0,caracterMedio=0, ultimoCaracter=0 

        direccion = read("Ingrese la dirección: ");
      
        primerCaracter = direccion[0];
        write("Primer carácter:", primerCaracter);
      

        medio = (direccion.length / 2);
        caracterMedio = direccion[medio];
        write("Carácter del medio:", caracterMedio);
      
        ultimoCaracter = direccion[direccion.length - 1];
        write("Último carácter:", ultimoCaracter);
        
      }
      
      obtenerCaracteresDireccion();
    
  }else if (menu=== '15'){
    function almacenarEImprimir() {
        let valores=0
        valores = [];
    
        for (let i = 0; i < 5; i++) {
            valores[i] = parseFloat(read(`Ingrese el valor ${i + 1}: `));
        }
    
        write("Valores ingresados:", valores);
        if (valores[0] % 2 === 0 && valores[0] > 0) {
            write("El primer valor es par y positivo:", valores[0]);
        } else if (valores[4] % 2 !== 0 && valores[4] < 0) {
            write("El último valor es impar y negativo:", valores[4]);
        } else {
            write("No se cumple ninguna condición requerida.");
        }
    }
    
    almacenarEImprimir();
    

  }else if(menu === '16'){
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

  }else if (menu ==='17'){
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

  }else if (menu ==='18'){
    function procesarCadena() {
        let cadena=0, ultimoCaracter=0
        cadena = read("Ingrese una cadena: ");
          ultimoCaracter = cadena[cadena.length - 1];
        if ((ultimoCaracter >= 'a' && ultimoCaracter <= 'z') || (ultimoCaracter >= 'A' && ultimoCaracter <= 'Z')) {
          write("El último carácter de la cadena es:", ultimoCaracter);
        } else {
          write("El último carácter de la cadena no es una letra.");
        }
      }
      
      procesarCadena() 
    
  }else if (menu ==='19'){
    function vocal(){
        let cadena=0, carácter=0 
        cadena = read("Ingrese la cadena:")
        carácter = cadena[0]
        
        if (carácter === "a" || carácter === "e" || carácter === "i" || carácter === "o" || carácter === "u") {
          write(`El primer carácter es una vocal: ${carácter}`);
        } else {
          write("El primer carácter no es una vocal.")
        
        }
        }
        
        vocal()
    
  }else if (menu ==='20'){
    function carate(){
        let cadena=0, medio=0
        cadena = read("Ingrese la cadena:");
        medio = cadena[Math.floor(cadena/ 2)];
    
        if (medio === ";" || medio === ":" || medio === "." || medio === ",") {
            write(`El carácter de en medio es: ${medio}`);
          } else {
            write("El carácter de en medio no es de puntuación.");
          }
        }
        
        carate()
    
  }else if (menu ==='21'){
    function compararCaracteres() {
        let primerCaracter=0, segundoCaracter=0
         primerCaracter = read("Ingrese el primer caracter: ");
         segundoCaracter = read("Ingrese el segundo caracter: ");

        if (primerCaracter === segundoCaracter) {
            write("Los caracteres son iguales.");
        } else if (primerCaracter < segundoCaracter) {
            write("El primer caracter es menor que el segundo.");
        } else {
            write("El primer caracter es mayor que el segundo.");
        }
    }
    
    compararCaracteres();
    
    
  }else if (menu ==='22'){
    function Nombres(){
        let nombre1=0, nombre2=0
        
        nombre1 = read("Ingrese el primer nombre:");
        nombre2 = read("Ingrese el segundo nombre:");
        
        if (nombre1 === nombre2) {
          write("Los nombres son iguales.");
        } else if (nombre1 < nombre2) {
          write("El primer nombre es menor que el segundo.");
        } else {
          write("El primer nombre es mayor que el segundo.");
        }
        }
        
        Nombres()
    
  }else if (menu ==='23'){
    function cadena(){
        let cadena=0
    cadena = read("Ingrese la cadena:");
    write(`La cadena tiene ${cadena.length} elementos.`);
    }
    
    cadena()
    
  }else if (menu ==='24'){
    function arreglo(){
        let arreglo=0
    arreglo = read("Ingrese los elementos del arreglo separados por comas:");
    
    write(`El arreglo tiene ${arreglo} elementos.`);
    }
    
    arreglo()
    
    
  }else if(menu=== '0'){
    write("nos vemos mi llave y te los lavas ")
    
  }
}
ivis()