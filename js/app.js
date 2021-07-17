"use strict";
const add = (a, b) => {
    return a + b;
};
console.log(add(10, 16));
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", () => {
        console.log("Hello i'm an arrow function");
    });
}
//# sourceMappingURL=app.js.map