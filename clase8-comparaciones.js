// Existen varias maneras de comparar variables u objetos dentro de javascript. En el primer ejemplo le asignamos a X un valor numérico y a Y un string. Para poder compararlos debemos agregar dos signos de igual (==). Esto los convierte al mismo tipo de valor y permite que se puedan comparar.
//
// Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). Esto permite que JavasScript no iguale las variables que son de distinto tipo. Te recomendamos que uses el triple igual siempre que estés comparando variables.
//
// Existen cinco tipos de datos que son primitivos:
//
//     Boolean
//     Null
//     Undefined
//     Number
//     String


const persona1 = {
  nombre: 'Juan'
}

const persona2 = {
  nombre: 'Juan'
}

x = 4
y = '4'

// Persona3 y persona1, son el mismo objeto, hacen referencia al mismo segmento de memoria
const persona3 = persona1 // Cualquier cambio que se haga a persona3 va a afectar a persona1
const persona4 = {
  ...persona1
}

// 1 El == compara dos valores sin importar de que tipo son, primer convierte ambas comparaciones
// en un tipo de dato que sea igual y luego hace la comparacion. En resumen, no toma en cuenta
// el tipo de dato
x == y // true: son de tipo diferente (int, string) pero su valor es el mismo


// 2 El === compara valores tomando en cuenta su tipo de dato
x === y // false: aun que contengan lo mismo sus timpos de datos son diferentes

// Objetos
// Los objetos son un caso especial, son tratados de manera distinata.
// Cuando se usa == se comparan las referencias en memoria RAM, por lo que aunque dos
// objetos tengan los mismos argumentos y valores, su referencia en memoria es distinta,
// haciendo diferente el objeto.
// No importa mucho si se usa == o === el resultado es el mismo.
persona1 == persona2 //false
persona1 === persona2 //false

// Hacen referencia al mismo segmento en memoria
// Cualquier cambio que se hagaa persona1 va a afectar a persona3 y persona4
persona1 === persona3 //true
persona1 === persona4 //true
persona3 === persona4 //true
