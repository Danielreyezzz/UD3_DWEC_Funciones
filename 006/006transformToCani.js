"use strict";

function toCani(cadena) {
  let cadenaCani = "";
  for (let i = 0; i < cadena.length; i++) {
    //Transformamos los pares en mayus y los impares en minus
    if (i % 2 == 0) {
      cadenaCani += cadena[i].toUpperCase();
    } else {
      cadenaCani += cadena[i].toLowerCase();
    }
  }
  //Reemplazamos las C por K y concatenamos HHH al final
  return cadenaCani.replace(/[cC]/g, "K") + "HHH";
}

console.log(toCani("hola prcCCCcCmitooooo"));
