var signo = prompt('Cuál es tu signo?')
console.log(signo);


switch (signo) {
  case 'acuario':
  //codigo
  console.log('Acuario: prosperidad');
  break;
  case 'piscis':
    console.log('Piscis: prosperidad');
    break;
  case 'cancer':
  case 'cáncer':
  case 'Cancer':
    console.log('Cancer: prosperidad');
    break;
  case 'libra':
  case 'Libra':""
    console.log('Libra: prosperidad');
    break;
  case 'capricornio':
    console.log('Capricornio: prosperidad');
    break;
  case 'leo':
    console.log('Leo: prosperidad');
    break;
  case 'sagitario':
    console.log('Sagitario: prosperidad');
    break;
  case 'escorpion':
    console.log('Escorpion: prosperidad');
    break;
  default:
  console.log('No es un signo zodiacal valido');

}
