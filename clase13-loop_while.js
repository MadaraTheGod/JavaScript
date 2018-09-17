// En esta clase estudiaremos otra estructura repetitiva llamada while. While se
//  ejecuta únicamente mientras la condición que se está evaluando es verdadera.
//
// En ocasiones nuestro código puede fallar por errores de syntaxis o errores
// lógicos. En caso de que quieras verificar tu código, debes utilizar un debugger.
// El código se detiene cada vez que lee esta palabra.

const persona = {
  name: 'Juan Carlos',
  edad: 22,
  peso: 85
}

const DECREASE_WEIGHT = 0.2
const INCREASE_WEIGHT = 0.3
const VARIATION = 0.2

const aumentaPeso = (persona) => persona.peso+=VARIATION
const adelgaza = (persona) => persona.peso-=VARIATION
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.9
const META = persona.peso - 3
var dias = 0

while (persona.peso > META) {
  if (comeMucho()) {
    aumentaPeso(persona)
  }
  if (realizaDeporte()) {
    adelgaza(persona)
  }
  dias += 1
  console.log(`$Dia ${dias} {persona.name} pesa: ${persona.peso.toFixed(2)}`);
}
console.log(`A ${persona.name} le tomo ${dias} bajar a ${persona.peso.toFixed(2)} Kg`);
