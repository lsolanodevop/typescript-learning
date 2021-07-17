"use strict";
const add = (a, b = 30) => {
    return a + b; //Si defino un valor por defecto tiene que ser el segundo parametro en adelante a su vez, puedo llamar a la funcion con un solo parametro
};
console.log(add(10));
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", () => {
        console.log("Hello i'm an arrow function");
    });
}
//# sourceMappingURL=app.js.map