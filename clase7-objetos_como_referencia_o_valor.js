
var persona1 = {
 // Dentro se le asignan los atributos (nombre, edad, sexo, etc)
 nombre: 'Juan',
 apellido: 'Gutierrez',
 edad: 22
}

var persona2 = {
 // Dentro se le asignan los atributos (nombre, edad, sexo, etc)
 nombre: 'Carlos',
 apellido: 'Soto',
 edad: 44
}


function imprimirNomMAY(persona){
  var { nombre, edad } = persona
  // Si modificamos el valor edad del objeto resivido, tambien se modifica globalmente.
  // Ya que los objetos, cuando se pasan como parametros, son usados como una referencia
  // del original.

  // Aumenta en 1 el valor edad del objeto resivido. Efecto de lado en el objeto global
  //persona.edad += 1

  // Suma en uno el atributo edad. Sin efecto de lado, ya que se desestructuro el objeto
  // edad += 1

  // Se crea otro objeto, conservando el original y creando uno nuevo con los cambios necesarios.
  return {
    ...persona, // Se desglosan los atributos del objeto persona dentro del objeto return, tambien se pueden agregar nuevos con una ','

    // Se modifican los atributos que se necesiten
    edad: edad += 1
  }
}


// Resusmen:
 // Cuando los objetos se pasan como parametros a una funcion, en realidad estan siendo tratados como una referencia
 // al objeto original. Asi que cualquier cambio a este objeto modificara, tambien, los valores del objeto original.
 // Si queremos este resultado, trabajamos con el objeto directamente en la funcion. Si no, podemos descomponer el objeto
 // y trabajar con los atributos directamente sin afectar al objeto original. En caso de que necesitemos crear  un nuevo objeto,
 // y que este contenga todos las modificaciones, se reguresa en el return
