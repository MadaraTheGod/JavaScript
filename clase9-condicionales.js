// En esta clase empezaremos a trabajar con estructuras de control,
// éstas nos permiten decidir el flujo de nuestro código.
//
// Empezaremos con los condiconales. Los condicionales nos permiten decidir si un código se ejecuta o no.
// También introducimos un nuevo tipo de datos primitivos: el booleano, que determina si un valor es falso o
//  verdadero. Mediante un condicional (if) decidiremos si se ejecuta una parte de nuestro código cuando
//  se cumpla o no cierta condición.


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

function imprimirProfeciones(persona) {
  console.log(`${persona.nombre} es: `);

  if (persona.ingeniero) {
    console.log('Ingeniero');
  } else {
    console.log('no es ingeniero');
  }

  if (persona.gamer) {
    console.log('Gamer');
  } else {
    console.log('no es gamer');
  }

  if (persona.cocinero) {
    console.log('Cocinero');
  } else {
    console.log('no es cocinero');
  }

  if (persona.cantante) {
    console.log('Cantante');
  } else {
    console.log('no es cantante');
  }

  if (persona.dj) {
    console.log('DJ');
  } else {
    console.log('no es DJ');
  }

  if (persona.drone) {
    console.log('Piloto de drone');
  } else {
    console.log('no es piloto de drones');
  }

  if (persona.guitarrista) {
    console.log('Guitarrista');
  } else {
    console.log('no es guitarrista');
  }
}

function isAdult({ nombre,edad }) {
  if (edad >= 18) {
    console.log(`${nombre} es mayor de edad!! :)`);
  } else {
    console.log(`${nombre} no es mayor de edad!! :(`);
  }
}

imprimirProfeciones(persona)
isAdult(persona) // Mayor de edad
isAdult({nombre: 'Erick', edad: 15}) // Menor de edad
