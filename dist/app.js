"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        const importedHTML = document.importNode(this.templateElement.content, true);
        this.element = importedHTML.firstElementChild;
        this.element.id = "user-input";
        this.titleInputElement = document.querySelector("#title");
        this.descriptionInputElement = document.querySelector("#description");
        this.peopleInputElement = document.querySelector("#people");
        this.configure();
        this.attach();
    }
    submitHandler(event) {
        event.preventDefault();
        // console.log("Clicked");
        console.log(this.titleInputElement);
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler.bind(this));
        // console.log("Configure");
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}
const projInput = new ProjectInput();
//# sourceMappingURL=app.js.map