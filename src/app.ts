const add = (a: number, b: number = 30) => { //Sintaxis para definir arrow functions, si solo ejecuta una linea puedo no usar las llaves
  return a + b; //Si defino un valor por defecto tiene que ser el segundo parametro en adelante a su vez, puedo llamar a la funcion con un solo parametro
};

console.log(add(10));

const button = document.querySelector("button")! as HTMLInputElement;

if (button) {
  button.addEventListener("click", () => {
    console.log("Hello i'm an arrow function");
  });
}

const hobbies = ["Videogames", "Watching stuff"];

const activeHobbies = ["Studing"];

activeHobbies.push(...hobbies); // los 3 puntos me permiten asignar un arreglo sin necesidad de especificar las posiciones

const person = { // tambien funciona con objetos de forma que me permite asignar todo un objeto usando los ...
  name: "Icaro",
  hobbies: "Getting Sun"
}

const cat = { ...person };