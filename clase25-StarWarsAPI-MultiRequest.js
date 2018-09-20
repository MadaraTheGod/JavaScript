const onPeopleResponse = function {character}  {
	console.log(`Hola yo soy ${character.name}`);
}

function obtenerPersonaje(id) {
	const URL = `${API_URL}${PEAPLE_URL.replace(':id', id)}`
	// Sirve para indicarle a JQuery que la busqueda la va a hacer en un servicor externo
	const opts = { crossDomain: true }
	$.get(URL, opts, onPeopleResponse)
}

obtenerPersonaje(2)
