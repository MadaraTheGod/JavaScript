// Pasos para crear una "clase"
// 1 Definir la clase

class Persona {
	constructor(nombre, apellido, altura) {
		this.nombre = nombre
		this.apellido = apellido
		this.altura = altura
	}

	// 2 Agregar sus metodos
	saludar() {
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
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

	saludar() {
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
	}
}

// Notas ======================================
// ===========================================
// ===========================================================
// Pasos para crear una clase y una clase heredera
// 1- Definimos la clase con su constructor
class clasePadre {
	// 2- Creamos el constructor para esta clase con los parametros necesarios para crear el objeto
	constructor(par1, par2, par3) {
		this.par1 = par1
		this.par2 = par2
		this.par3 = par3
	}
	// 3- Creamos los metodos que va a tener la clases
	showPar1() {
		console.log(`Parametro1: ${this.par1}`);
	}

	showPar2() {
		console.log(`Parametro1: ${this.par2}`);
	}
}

// 4- Creamos la clase hijo
// Se especifica que hereda de la clase padre con extends
class claseHijo extends clasePadre {
	constructor(par1, par2, par3) {
		// 5 -Especificamos que los parametros de esta clase se van a enviar al constructor clasePadre
		super(par1, par2, par3)
	}

	// 6- Creamos los metodos que se requieran especificamente para esta function
	// Esta clase tambien va a poder sar los metodos de la clase padre ya que los hereda
	showPar3() {
		console.log(`Parametro3: ${this.par3}`);
	}

	// Podemos especializar una funcion para la clase hijo, yaque prime busta en los metodos del objeto actual
	// Si no existe lo busca en el objeto parent y asi sucesivamente hasta llegar al objeto "Object"
	showPar2() {
		console.log(`Parametro2 de la clase hijo: ${this.par2}`);
	}
}

// FIN NOTAS ===================================================
// ===================================================

// 3 LLamar al prototipo con new
// new es una palabra reservada que se utiliza para crear nuevos objetos
var carlos = new Persona('Carlos', 'Gutierrez', 1.82)
var juan = new Persona('Juan', 'Soto', 1.70)


juan.saludar()
console.log(juan.soyAlto())
carlos.saludar()
console.log(carlos.soyAlto())

var desa_juan = new Desarrolldor('Juan Carlos', 'Gutierrez')
desa_juan.saludar()
