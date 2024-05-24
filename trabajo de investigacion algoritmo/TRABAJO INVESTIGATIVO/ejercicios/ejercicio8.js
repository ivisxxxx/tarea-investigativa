const read = require('prompt-sync')();
const write = console.log;
//8.	Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas 
//inclusive y sino verificar si es un signo de puntuacion ", . ; :" y si no presentar solo el carácter.
//entrada:caracter=0(leer)
//proceso:
//si caracter >= "a" y caracter <= "z" entonces
        //Escribir("El carácter está comprendido entre las letras a y z.")
    //sino si caracter = "," o caracter = "." o caracter = ";" o caracter = ":" entonces
        //Escribir("El carácter es un signo de puntuación.")
    //sino
        //Escribir("El carácter no está comprendido entre las letras a y z, ni es un signo de puntuación.")
    //finSi
//salida:resultado del caracter
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