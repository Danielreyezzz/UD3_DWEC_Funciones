"use strict";
/*Primero creamos una funcion que recibira como parametros los segundos y minutos.
Los minutos están inicializados a 0 por defecto*/
function contador(segundos, minutos = 0) {
  //Aquí tranformamos los minutos en segundos
  segundos += minutos * 60;
  //creamos la funcion setInterval, que muestra los segundos cada 1 segundo y se van restando con --
  let intervalo = setInterval(() => {
    console.log(segundos);
    segundos--;
    //Aquí controlamos que el intervalo se detenga cuando los segundos lleguen a 0
    if (segundos == 0) {
      clearInterval(intervalo);
    }
  }, 1000);
}

contador(5);
