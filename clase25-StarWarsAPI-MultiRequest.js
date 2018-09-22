// En esta clase accederemos a múltiples datos al mismo tiempo. Continuaremos trabajando con los
// jQuery y swapi.
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const onPeopleResponse = function (character)  {
	console.log(`Hola yo soy ${character.name}`);
}

function obtenerPersonaje(id) {
	const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	// Sirve para indicarle a JQuery que la busqueda la va a hacer en un servicor externo
	const opts = { crossDomain: true }
	$.get(URL, opts, onPeopleResponse)
}


// Todas las consultas externas de delegan al explorador, una vez que el explorador las termina entran
// a una lista de tareas,  pero no hay forma de saber cual de estas tareas va a terminar primero y
// o cual llega antes a la lista de tareas. Todo esto depende del servidor y cuanto demore en responder
// cada una de las consultas.
// Las sig consultas pueden responder en cualquier orden
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)


// Practica
// Para realizar una consulta a ua web API con JQuery se agrega el sig codigo antes de nuestro scrip en el archivo html
// <script
//   src="https://code.jquery.com/jquery-3.3.1.min.js"
//   integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
//   crossorigin="anonymous"></script>

// Ahora en el .js se realiza laconsulta con $.get
// $.get(URL_DE_LA_API, OPCIONES_PROPIAS_DEL_METODO_GET_EN_FORMA_DE_OBJETO, CALLBACK)
// $.get(URL, opciones, callback)
// $.get(URL, opciones, callback)
