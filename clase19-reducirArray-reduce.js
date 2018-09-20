// El método reduce() nos permite reducir, mediante una función que se aplica a cada uno de 
// los elemento del array, todos los elementos de dicho array, a un valor único.

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    libros: 7
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    libros: 30
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    libros: 87
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    libros: 48
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    libros: 145
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    libros: 53
}

var personas = [sacha, alan, martin, dario, vicky, paula]

const reducer = (acum, {libros}) => acum + libros

// reduce(funcion, contador_inicial)
var totalLibros = personas.reduce(reducer,0)

console.log(`Total de libros: ${totalLibros}`)