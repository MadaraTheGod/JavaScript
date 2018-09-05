//Variable global que se puede acceder desde cualquier parte del codigo
var nombre = 'Juan', edad = 28

function imporimirEdad(n, e) {
  console.log(`Nombre: ${n} Edad: ${e}`);
}

imporimirEdad(nombre, edad)


// Alcance de las Funciones
function imprimirNombrMAY(nombre) {
  // Se trabaja con una variable local para no afectar a la global
  // Si no se pasara el nombre a la funcion como parametro la funcion tomaria la variable Nombre
  // que se definio globalmente
  nombre = nombre.toUpperCase()
  console.log(nombre);
}

imprimirNombrMAY()
