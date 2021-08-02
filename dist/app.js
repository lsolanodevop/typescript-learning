"use strict";
let user;
user = {
    name: "Leonardo",
    age: "26",
    greet(salute) {
        console.log(salute + " " + this.name);
    }
};
user.greet("Hello");
//# sourceMappingURL=app.js.map