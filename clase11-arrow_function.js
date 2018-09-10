// En esta clase aprenderemos a utilizar Arrow Functions que permiten una
// nomenclatura más corta para escribir expresiones de funciones. Este tipo de
//  funciones deben definirse antes de ser utilizadas.
//
// Al escribir las Arrow Functions no es necesario escribir la palabra function,
// la palabra return, ni las llaves.

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

///////////////////////////////////////////////////////

const ADULT_AGE = 18


// function isAdult(edad) {
//   return edad >= ADULT_AGE
// }

// La misma funcion anterior, pero em forma de arrow function

//declaracion de constante = (parametros de la funcion) => {codigo de la funcion}
const isAdult = (edad) => edad >= ADULT_AGE

// otro ejemplo en el cual se deniega el acceso a un menor de edad
const isAdmitted = ({ edad }) => {
  console.log(edad);
  if (!isAdult(edad)) {
    console.log('ACCESO DENEGADO');
  }
}

function printAdult({ nombre,edad }) {
  if (isAdult(edad)) {
    console.log(`${nombre} es mayor de edad!! :)`);
  } else {
    console.log(`${nombre} no es mayor de edad!! :(`);
  }
}

isAdmitted(persona)
isAdmitted(persona2)
