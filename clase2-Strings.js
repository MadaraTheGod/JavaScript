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

// Interpolacion de texto,interpola variables con texto (ya lo habiamos hecho)
console.log(`${nombre} tiene ${charCantidad} letras`)

// Substrings: Se toman sub strings de un string con la funcion substr(posicion inicial, posicion final)
// La posicion 1 de Juan es 'u' y la posicion 3 es 'n'. Así que substr de 1 a 3 obtendra la substriin 'uan'
var str = nombre.substr(1,3) // = uan


// Resusmen: Funciones mas utilizadas en strings
// toUppercase(): convierte todo el string a mayusculas
// tolowerCase(): convierte todo el string a minusculas
// length: cuenta el nuemro de char en el strings
// charAt(): obtiene el char de una posicion en especifico
// substr(): ayuda a obtener un substring de un substring

// Mini desafio: Mostrar al usuario cual es la ultima letra de su nombre
var usuario1 = 'Carlos'
var usuario2 = 'Juan'

var lastChart1 = usuario1.charAt(usuario1.length-1)
var lastChart2 = usuario2.charAt(usuario2.length-1)

console.log(`La ultima letra de ${usuario1} es ${lastChart1}`);
console.log(`La ultima letra de ${usuario2} es ${lastChart2}`);


// Practica
/*
nombre.toUpperCase()
nombre.toUpperCase()
nombre.toUpperCase()
toUpperCase()
toUpperCase()
toUpperCase()

toLowerCase()
toLowerCase()
toLowerCase()
toLowerCase()
toLowerCase()

charAt()
charAt()
charAt()
charAt()
charAt()

length
length
length
length
length
length
length

strsub(1,2)
strsub(inicio, fin)
strsub(ini, fin)
strsub(ini,fin)
strsub(ini,fin)
*/
