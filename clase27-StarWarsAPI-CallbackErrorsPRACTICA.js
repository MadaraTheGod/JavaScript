const URL_API = 'https://swapi.co/api/'
const URL_CHARACTER = 'people/:id'

function obtenerPersonaje(id, callback) {
	let url = `${URL_API}${URL_CHARACTER.replace(':id',id)}`
	const opts = { crossDomain: true}
	$.get(url, opts, callback)
}

obtenerPersonaje(1, function(character) {
	console.log(`Hola yo soy ${character.name}`);

	obtenerPersonaje(2, function(character) {
		console.log(`Hola yo soy ${character.name}`);

		obtenerPersonaje(3, function(character) {
			console.log(`Hola yo soy ${character.name}`);
		})
	})
})
