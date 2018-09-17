// Los arrays son estructuras que nos permiten organizar elementos dentro de una
// collección. Estos elementos pueden ser números, strings, booleanos, objetos, etc.

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula]

const printAltura = ( {nombre, altura} ) => {
  console.log(`${nombre} mide ${altura}`);
}


console.log('Mediante for');
for (var i = 0; i < personas.length; i++) {
 let persona = personas[i]
 console.log(`${persona.nombre} mide: ${persona.altura}`);
}


// Se puede mostrar la altura de una persona dentro del array, utilizando la funcion
// map, la cual realiza un procedimiento para cada uno de los objetos,ints,strings etc, del array.

// Se declara directamente el callback
console.log('\nMediante callback como arrow function');
personas.map(( {nombre, altura} ) => {
  console.log(`${nombre} mide ${altura}`);
})

//Se crea el callback como un arrow function
console.log('\nSolo como funcion');
personas.map(printAltura)
