"use strict";
//Almacenamos la función  en una variable
let pregunta = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
//Pasamos los 3 parametros de la función.
//Las funciones son reemplazadas por arrows
pregunta(
  "Do you agree?",
  () => {
    alert("You agreed.");
  },
  () => {
    alert("You canceled the execution.");
  }
);
