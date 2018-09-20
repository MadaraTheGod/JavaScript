// Las clases son funciones cuya sintaxis tiene dos componentes:

//     expresiones
//     declaraciones

// En esta clase veremos el uso de this. Dentro de una función, el valor de this depende de cómo 
// es llamada ésta.

// Reto: agrega el atributo altura y la función soyAlto.


// Un prototipo se puede definir como una funcion (constructor)
function Persona(nombre, apellido, altura) {
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

Persona.prototype.saludar = function() {
	console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

	
Persona.prototype.soyAlto = function() {
	return this.altura > 1.8
}
	//console.log(`${this.nombre} mido ${this.altura} y ` + (this.altura > 1.8 ? "Soy alto!! :)" : "No soy alto :("))


// new es una palabra reservada que se utiliza para crear nuevos objetos
var carlos = new Persona('Carlos', 'Gutierrez', 1.82)
var juan = new Persona('Juan', 'Soto', 1.70)


juan.saludar()
console.log(juan.soyAlto())
carlos.saludar()
console.log(carlos.soyAlto())