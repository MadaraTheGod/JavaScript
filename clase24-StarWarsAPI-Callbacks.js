const API_URL = 'https://swapi.co/api/'
const PEAPLE_URL = 'people/:id'


const URL = `${API_URL}${PEAPLE_URL.replace(':id', 1)}`
// Sirve para indicarle a JQuery que la busqueda la va a hacer en un servicor externo
const opts = { crossDomain: true }

$.get(URL, opts, function(people) {
	console.log(`Hola yo soy ${people.name}`);
})
