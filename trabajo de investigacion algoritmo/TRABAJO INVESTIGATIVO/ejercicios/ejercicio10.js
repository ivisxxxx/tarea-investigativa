const read = require('prompt-sync')();
const write = console.log;
//10.El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200,
//se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares. 
//Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.
//entrada:precio_traje=0(leer), descuento=0(leer), precio_final=0(calculado), iva=0(leer), pago=0(leer)
//proceso:
//si precio_traje > 200 entonces
        //descuento <- precio_traje * 0.10
    //sino
        //descuento <- 10
    //finSi

    //precio_final <- precio_traje - descuento
    //iva <- precio_final * 0.15
    //pago <- precio_final + iva
//salida:resultado del precio_traje,descuento,iva, preciofinal,pago

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