// En esta clase aprenderemos que son los callbacks y usaremos una librería externa que se llama
//  jQuery.
//
// Un callback es una función que se pasa a otra función como un argumento. Esta función se invoca,
// después, dentro de la función externa para completar alguna acción.

const API_URL = 'https://swapi.co/api/'
const PEAPLE_URL = 'people/:id'


const URL = `${API_URL}${PEAPLE_URL.replace(':id', 1)}`
// Sirve para indicarle a JQuery que la busqueda la va a hacer en un servicor externo
const opts = { crossDomain: true }

$.get(URL, opts, function(people) {
	console.log(`Hola yo soy ${people.name}`);
})
