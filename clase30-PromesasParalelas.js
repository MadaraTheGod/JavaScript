// Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego
// construimos otro arreglo de Promesas, que pasaremos como parámetro a
// Promise.all( arregloDePromesas ), con las promesas podemos encadenar llamadas en paralelo, algo
// que no es posible usando callbacks.

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

// ID de los personajes a obtener
const ids  =  [1,2,3,4,5,6,7,8,9]
// Creamos una lista de promesas para cada personaje
const promesas = ids.map((id) => obtenerPersonaje(id))

Promise
	.all(promesas)
	.then(personajes => console.log(personajes))
	.catch(onError)
