// A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro de
// otros, cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada sino
// de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea mucho
// más legible y mantenible.


const URL_API = 'https://swapi.co/api/'
const URL_CHARACTER = 'people/:id'

function obtenerPersonaje(id) {
	return new Promise(function (resolve, reject) {
		let url = `${URL_API}${URL_CHARACTER.replace(':id',id)}`
		const opts = { crossDomain: true}
		$
			.get(url, opts, function(data) {
				resolve(data)
			})
			.fail(() => reject(id))
	})
}

onError = function(id) {
	console.log(`Error el personaje con ID: ${id} no se pudo obtener`);
}

obtenerPersonaje(1)
	.then(function (personaje1) {
		console.log(`Hola yo soy el personaje 1: ${personaje1.name}`);
		return obtenerPersonaje(2)
	})
	.then(function (personaje2) {
		console.log(`Hola yo soy el personaje 2: ${personaje2.name}`);
		return obtenerPersonaje(3)
	})
	.then(function (personaje3) {
		console.log(`Hola yo soy el personaje 3: ${personaje3.name}`);
		return obtenerPersonaje(4)
	})
	.then(function (personaje4) {
		console.log(`Hola yo soy el personaje 4 :${personaje4.name}`);
		return obtenerPersonaje(5)
	})
	.then(function (personaje5) {
		console.log(`Hola yo soy el personaje 5: ${personaje5.name}`);
		return obtenerPersonaje(6)
	})
	.then(function (personaje6) {
		console.log(`Hola yo soy el personaje 6: ${personaje6.name}`);
	})
	.catch(onError)
