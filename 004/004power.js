"use strict";

let x = +prompt("Escribe un número:");
let n;
//Te meto en un bucle hasta el el valor sea un entero mayor que 1
do {
  n = +prompt("Escribe cuantas veces quieres multiplicarlo por si mismo:");
} while (n < 1 || !Number.isInteger(n));

function pow(x, n) {
  // n**n eleva el n de la izquierda a la potencia del n de la derecha
  return x ** n;
}

alert(pow(x, n));
