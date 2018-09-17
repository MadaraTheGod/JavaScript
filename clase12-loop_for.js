const persona = {
  name: 'Juan Carlos',
  edad: 22,
  peso: 85
}

const YEAR = 365
const DECREASE_WEIGHT = 0.25
const INCREASE_WEIGHT = 0.50
const VARIATION = 0.2

const aumentaPeso = (persona) => persona.peso+=VARIATION
const adelgaza = (persona) => persona.peso-=VARIATION

const cambioPesoKg = (persona) => {
  console.log(`Al inicio del año ${persona.name} pesaba ${persona.peso}`);
  for (var i = 0; i < YEAR; i++) {
    let random = Math.random()
    if (random < DECREASE_WEIGHT) {
      adelgaza(persona)
      console.log(`Dia ${i}: ${random} - ${persona.peso}`);
    }
    else if (random < INCREASE_WEIGHT){
      aumentaPeso(persona)
      console.log(`Dia ${i}: ${random} - ${persona.peso}`);
    }
    else {
      console.log(`No sube ni baja`);
    }
  }
  console.log(`Al final del año ${persona.name} pesa ${persona.peso}`);
}

cambioPesoKg(persona)
