const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

function obtenerPersonaje(id, callback) {
	const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	// Sirve para indicarle a JQuery que la busqueda la va a hacer en un servicor externo
	const opts = { crossDomain: true }
	$.get(URL, opts, function (character) {
		console.log(`Hola yo soy ${character.name}`);
		if (callback) {
			callback()
		}
	})

}

// Todas las consultas externas de delegan al explorador, una vez que el explorador las termina entran
// a una lista de tareas,  pero no hay forma de saber cual de estas tareas va a terminar primero y
// o cual llega antes a la lista de tareas. Todo esto depende del servidor y cuanto demore en responder
// cada una de las consultas.
// Las sig consultas pueden responder en cualquier orden

// Para solucional el probema del orden de las consultas se utilizan los callback

//obtenerPersonaje(1, callback)
obtenerPersonaje(1, function() {
	obtenerPersonaje(2, function() {
		obtenerPersonaje(3, function() {
			obtenerPersonaje(4, function() {
				obtenerPersonaje(5, function() {
					obtenerPersonaje(6, function() {
						obtenerPersonaje(7, function() {
						})
					})
				})
			})
		})
	})
})

// Listo! Ahora el orden de las consultas es secuencial, pero surge un nuevo problema. No queda claro
// donde termina cada callback y se hace mas dificil de leer. A esto se le llama el callbacks Hell.
// En la clase 28 veremos como solucionarlo
