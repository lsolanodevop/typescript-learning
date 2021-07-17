const names = "Leo Solano" // El const permite definir variables que no van a cambiar, excelente para realizar inicializaciones de servidores y demas
let num = 15 // El let permite un uso mejor de varibles es una mejor forma del var

console.log(names + " " + num);

function add(a: number, b: number) {
  var result = a + b; //La diferencia principal entre let y var es el scope, var tiende a ser mas global que let
  return result;
}

if (num > 10) {
  // var isOld1 = true; // Esta se registra podria accesarla desde fuera
  let isOld = true;  // Esta no
}

// console.log(isOld1); //Aunque me de un error JS lo permite funcionar