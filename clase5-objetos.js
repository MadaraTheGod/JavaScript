// Creacion de Objetos

// - Se declara como una variable
 var persona1 = {
  // Dentro se le asignan los atributos (nombre, edad, sexo, etc)
  nombre: 'Juan',
  apellido: 'Carlos',
  edad: 22
 }

var persona2 = {
  nombre: 'Carlos',
  apellido: 'Soto',
  edad: 23
}

//Utilizamaos la funcion imprimirNombrMAY de la clase 4 para imprimir el atributo Nombre
function imprimirNombrMAY(persona) {
  console.log(persona.nombre.toUpperCase());
}

// Como el unico atributo de la persona que nos intereza es el nombre, podemos
// desglosar el objeto y selecionar unicamente los atributos que requiere la funcion
function imprimirNombrMAY_nombre({ nombre }) {
  console.log(nombre.toUpperCase());
}

//Para acceder al contenido de un atributo se accede de la sig manera (objeto.atributo)
//console.log(persona1.nombre); // imp con la funcion imprimirNombrMAY
//console.log(persona2.nombre); // imp con la funcion imprimirNombrMAY

imprimirNombrMAY(persona1)
imprimirNombrMAY_nombre(persona2)

// Se puede crear el objeto que necesita la funcion en la misma imvocacion
imprimirNombrMAY_nombre({nombre: 'Sasha'})



// Resusmen: practica
// 1 Declaracion de Objetos
// 2 Asignasion de atributos al objetos
// 3 Pasar obnjetos como parametros
// 4 Acceder a esos atributos desde la funcion

// 1 Declaracion de Objetos
var persona = {
  edad: 22
}
var libro = {
  duracion: 65,
  titulo: 'La Tienda'
}
var celular = {
  modelo: 'samsung',
  precio: 8900
}
var videogame = {
  clasificacion: 'pg13'
}
var pc = {
  precio: 8900
}
var monitor = {
  precio: 8900
}

// 2 Asignasion de atributos al objetos
// edad: 22
// duracion: 65
// titulo: 'La Tienda'
// paginas: 486
// modelo: 'samsung'
// precio: 8900
// clasificacion: 'pg13'

// 4 Pasar obnjetos como parametros
imprimirNombrMAY_nombre(persona1)
// imprimirNombrMAY_nombre({ nombre })
// imprimirNombrMAY_nombre({ nombre })
// imprimirNombrMAY_nombre({ nombre })
