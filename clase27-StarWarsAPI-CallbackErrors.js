const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

function obtenerPersonaje(id, callback) {
	const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	// Sirve para indicarle a JQuery que la busqueda la va a hacer en un servicor externo
	const opts = { crossDomain: true }
	$.get(URL, opts, callback).fail(function () {
		console.log(`No se pudo obtener los datos del personaje: ${id}`);
	})
	// Tambien se puede escribir de la sig manera
	// $
	// .get(URL, opts, callback)
	// .fail(function () {
	// 	console.log(`Error. No se pudo obtener los datos del personaje: ${id}`);
	// })
}

obtenerPersonaje(1, function(character) {
	console.log(`Hola yo soy ${character.name}`);

	obtenerPersonaje(2, function(character) {
		console.log(`Hola yo soy ${character.name}`);

		obtenerPersonaje(3, function(character) {
			console.log(`Hola yo soy ${character.name}`);

			obtenerPersonaje(4, function(character) {
				console.log(`Hola yo soy ${character.name}`);

				obtenerPersonaje(5, function(character) {
					console.log(`Hola yo soy ${character.name}`);

					obtenerPersonaje(6, function(character) {
						console.log(`Hola yo soy ${character.name}`);

						obtenerPersonaje(7, function(character) {
							console.log(`Hola yo soy ${character.name}`);

						})
					})
				})
			})
		})
	})
})
