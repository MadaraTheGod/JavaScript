// Las clases son funciones cuya sintaxis tiene dos componentes:

//     expresiones
//     declaraciones

// En esta clase veremos el uso de this. Dentro de una función, el valor de this depende de cómo 
// es llamada ésta.

// Reto: agrega el atributo altura y la función soyAlto.

// ========================================================================================

// Para que un prototipo "herede" (en javascript no hay clases asi que no pueden heredar) los metodos
// de otro prototipo se crea una funcion que pase el prototipo de un objeto a otro
// Hay una mejor forma de hacer este procedimiento con ECMA Script 6. LO cual veremos en la sig clase
function heredade(prototipoHijo, prototipoPadre) {
	// Funcion vacia 
	var fn = function () {}
	fn.prototype = prototipoPadre.prototype
	// Se pasa el prototype de la funcion padre al prototipo de la funcion hijo
	prototipoHijo.prototype = new fn
	// Asignar el prototipo del prototipo padre al prototipo hijo
	prototipoHijo.prototype.constructor = prototipoHijo
}


// Pasos para crear un prototipo
// 1 Definir una funcion que va a funcionar como constructor del prototipo.
// Un prototipo se puede definir como una funcion (constructor)
function Persona(nombre, apellido, altura) {
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

// 2 Crear las funciones que va a poder ejecuar el prototipo

Persona.prototype.saludar = function() {
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

	
Persona.prototype.soyAlto = function() {
	return this.altura > 1.8
}
	//console.log(`${this.nombre} mido ${this.altura} y ` + (this.altura > 1.8 ? "Soy alto!! :)" : "No soy alto :("))

// ========================================================================================
// Se heredan los metodos
heredade(Desarrollador, Persona)

function Desarrollador(nombre, apellido) {
	this.nombre = nombre
	this.apellido = apellido
}

Desarrollador.prototype.saludar = function () {
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

// ========================================================================================

// 3 LLamar al prototipo con new
// new es una palabra reservada que se utiliza para crear nuevos objetos
var carlos = new Persona('Carlos', 'Gutierrez', 1.82)
var juan = new Persona('Juan', 'Soto', 1.70)


juan.saludar()
console.log(juan.soyAlto())
carlos.saludar()
console.log(carlos.soyAlto())


var desa_juan = new Desarrollador('Juan Carlos', 'Gutierrez')
desa_juan.saludar()