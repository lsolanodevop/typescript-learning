const add = (a: number, b: number) => { //Sintaxis para definir arrow functions, si solo ejecuta una linea puedo no usar las llaves
  return a + b;
};

console.log(add(10, 16));

const button = document.querySelector("button")! as HTMLInputElement;

if (button) {
  button.addEventListener("click", () => {
    console.log("Hello i'm an arrow function");
  })
}