// En esta clase seguiremos trabajando con condicionales para desglosar las funciones
// en funciones más pequeñas que retornen un valor.
//
// Debemos de tener en cuenta que el número 18 esta incluido dentro del rango de edad.
//  Para ello utilizamos los símbolos >=.
//
// Return detiene la ejecución de una función y devuelve el valor de esa función.
//
// Las variables definidas con const se comportan como las variables, excepto que
// no pueden ser reasignadas. Las constantes pueden ser declaradas en mayúsculas o
// minúsculas. Pero por convención, para distinguirlas del resto de variables,
//  se escribe todo en mayusculas.

const persona = {
  nombre: 'Juan',
  apellido: 'Gutierrez',
  edad: 22,
  ingeniero: true,
  gamer:true,
  cocinero:  false,
  cantante: true,
  dj: false,
  drone: false,
  guitarrista: true
}

const persona2 = {
  nombre: 'Carlos',
  apellido: 'Gutierrez',
  edad: 14,
}


function isAdult({ nombre,edad }) {
  if (edad >= 18) {
    console.log(`${nombre} es mayor de edad!! :)`);
  } else {
    console.log(`${nombre} no es mayor de edad!! :(`);
  }
}
