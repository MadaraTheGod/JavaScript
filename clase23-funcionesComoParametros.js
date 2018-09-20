// En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos,
 // en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe
 // como verdadero

class Persona {
	constructor(nombre, apellido, altura) {
		this.nombre = nombre
		this.apellido = apellido
		this.altura = altura
	}

	saludar(fn) {
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
		let { nombre,  apellido} = this
		if (fn) {
			fn(nombre, apellido, false)
		}
	}

	soyAlto() {
		return this.altura > 1.8
	}
}

class Desarrolldor extends Persona {
	constructor(nombre, apellido, altura) {
		// Se le pasan los arguementos al constructor padre con la palabra reservada super
		super(nombre, apellido, altura)
	}

	saludar(fn) {
		let { nombre,  apellido} = this
		console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
		if (fn) {
			fn(nombre, apellido, true)
		}
	}
}

// Funcion que se va utilizar como parametro
function responderSaludos(nombre, apellido, isDev) {
	console.log(`Buen dia ${nombre} ${apellido}. `)
	if (isDev) {
		console.log('Ah mira no sabia que eras desarrollador');
	}
}

// 3 LLamar al prototipo con new
// new es una palabra reservada que se utiliza para crear nu

let sacha = new Persona('Sasha', 'Lifszyc', 1.72)
let juan = new Persona('Juan', 'Gtz', 1.80)
let carlos = new Desarrolldor('Carlos', 'Gtz', 182)

sacha.saludar(responderSaludos)
juan.saludar(responderSaludos)
carlos.saludar(responderSaludos)
