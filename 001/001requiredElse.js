"use strict";

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm("¿Tus padres te permitieron?");
}

checkAge(5);

/*El else en este caso resulta totalmente innecesario.
  La función retornará el confirm si la condición del if no se cumple aunque no haya else.
  No es erroneo incluir el else en este caso, pero es opcional*/
