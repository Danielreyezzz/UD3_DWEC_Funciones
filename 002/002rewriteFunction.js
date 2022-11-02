"use strict";

//Almacenamos y retornamos en "resultado" true si age es mayor a 18 o el confirm si no lo es
function checkAge(age) {
  return (resultado =
    age > 18 ? true : confirm("¿Tienes permiso de tus padres?"));
}
/*Practicamente igual que con ? pero argumentamos que si age > 18 es verdadero
guardamos y retornamos verdadero, o si no lo es, pasa lo mismo con el confirm*/
function checkAge(age) {
  return (resultado =
    age > 18 == true || confirm("¿Tienes permiso de tus padres?"));
}

checkAge(9);
