var nombre = 'Juan', apellido = 'Gutierrez'
var edad = 23

// Funcion de string para poner en mayusculas el texto "toUpperCase"
var nomMAY = nombre.toUpperCase()

// Funcion de string para poner en minusculas el texto "toLowerCase"
var apemin = apellido.toLowerCase()

console.log(`Hola yo soy ${nombre} ${apellido}`);
console.log(`Nombre en mayusculas: ${nomMAY}`);
console.log(`Nombre en mayusculas: ${apemin}`);

// Funcion de string para obtener una posicion especifica del string "charAt"
var firstChart = nombre.charAt(0)
console.log(firstChart);

// Atributo para contar la cantidad de caracteres de un string
// Un atributo no se llamam como a las funciones con (), solo es necesario espe-
// cificar el nombre del atributo.
var charCantidad = nombre.length
console.log(`${nombre} tiene ${charCantidad} letras`)

// Interpolacion de texto,interpola variables con texto


// Practica (repeticion)
