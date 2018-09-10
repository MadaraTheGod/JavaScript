
var persona1 = {
 // Dentro se le asignan los atributos (nombre, edad, sexo, etc)
 nombre: 'Juan',
 apellido: 'Gutierrez',
 edad: 22
}

var persona2 = {
 // Dentro se le asignan los atributos (nombre, edad, sexo, etc)
 nombre: 'Carlos',
 apellido: 'Soto',
 edad: 44
}


function imprimirNomMAY(persona){
  var { nombre, edad } = persona
  console.log(`Hola, me llamo ${ nombre } y tengo ${ edad }`);
}

imprimirNomMAY(persona1)


// Resusmen
// 1 Se pueden desconponer objetos de la sig manera
// Entre corcheres se ponen los arguumentos que queremos obtener de un objetos
// y se le asignan los atributos del objeto (persona1)
var {nombre, apellido, edad} = persona1

console.log(`Atributos de persona1: Nombre: ${nombre}. Apellido: ${apellido}. Edad: ${edad}.`);
