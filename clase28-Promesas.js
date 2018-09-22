// En esta clase veremos las promesas, que son valores que aun no conocemos. Las promesas tienen tre estados:
    // pending
    // fullfilled
    // rejected
// Las promesas se invocan de la siguiente forma:

// new Promise( ( resolve, reject ) => {
//   // --- llamado asíncrono
//   if( todoOK ) {
//      // -- se ejecutó el llamado exitosamente
//      resolve()
//   } else {
//      // -- hubo un error en el llamado
//      reject()
//   }
// } )


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
	.then(function (personaje) {
		console.log(`Hola yo soy ${personaje.name}`);
	})
	.catch(onError)
