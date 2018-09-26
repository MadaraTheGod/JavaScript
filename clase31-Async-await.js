// Async-await es la manera más simple y clara de realizar tareas asíncronas. Await detiene la
// ejecución del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma,
// hay que colocar async antes de la definición de la función, y encerrar el llamado a Promises.all()
// dentro de un bloque try … catch.

const URL_API = 'https://swapi.co/api/'
const URL_CHARACTER = 'people/:id'

function obtenerPersonaje(id) {
	return new Promise(function (resolve, reject) {
		let url = `${URL_API}${URL_CHARACTER.replace(':id',id)}`
		const opts = { crossDomain: true}
		$.get(url, opts, function(data) {
			resolve(data)
		})
		.fail(() => reject(id))
	})
}

onError = function(id) {
	console.log(`Error el personaje con ID: ${id} no se pudo obtener`);
}

async function obtenerPersonajes() {
	// ID de los personajes a obtener
	const ids  =  [1,2,3,4,5,6,7,8,9]
	// Creamos una lista de promesas para cada personaje
	const promesas = ids.map((id) => obtenerPersonaje(id))
	try {
		var personajes = await Promise.all(promesas)
		console.log(personajes)
	} catch (id) {
		onError(id)
	}
}

obtenerPersonajes()
