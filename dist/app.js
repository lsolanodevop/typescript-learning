"use strict";
/// <reference path="drag-drop-interface.ts">
/// <reference path="project-model.ts">
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var App;
(function (App) {
    // Class State
    class State {
        constructor() {
            this.listerners = [];
        }
        addListener(listenerFn) {
            this.listerners.push(listenerFn);
        }
    }
    //autobind decorator
    function autobind(_, _2, descriptor) {
        const originalMethod = descriptor.value;
        const adjDescriptor = {
            configurable: true,
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            }
        };
        return adjDescriptor;
    }
    //Project State Management
    class ProjectState extends State {
        constructor() {
            super();
            this.projects = [];
        }
        static getInstance() {
            if (this.instance) {
                return this.instance;
            }
            this.instance = new ProjectState();
            return this.instance;
        }
        addProject(title, description, numOfPeople) {
            const newProject = new App.Project(Math.random.toString(), title, description, numOfPeople, App.ProjectStatus.Active);
            this.projects.push(newProject);
            this.updateListeners();
        }
        moveProject(prjID, newStatus) {
            const project = this.projects.find(prj => prj.id === prjID);
            if (project && project.status !== newStatus) {
                project.status = newStatus;
                this.updateListeners();
            }
        }
        updateListeners() {
            for (const listenerFn of this.listerners) {
                listenerFn(this.projects.slice());
            }
        }
    }
    const projectState = ProjectState.getInstance();
    // Component Base class
    class Component {
        constructor(templateID, hostElementID, insertAtStart, newElementID) {
            this.templateElement = document.getElementById(templateID);
            this.hostElement = document.getElementById(hostElementID);
            const importedNode = document.importNode(this.templateElement.content, true);
            this.element = importedNode.firstElementChild;
            if (newElementID) {
                this.element.id = newElementID;
            }
            this.attach(insertAtStart);
        }
        attach(position) {
            this.hostElement.insertAdjacentElement(position ? "afterbegin" : "beforeend", this.element);
        }
    }
    class ProjectItem extends Component {
        constructor(hostID, project) {
            super("single-project", hostID, false, project.id);
            this.project = project;
            this.configure();
            this.renderContent();
        }
        get persons() {
            if (this.project.people === 1)
                return "1 person";
            else
                return `${this.project.people} persons`;
        }
        dragStartHandler(event) {
            event.dataTransfer.setData("text/plain", this.project.id);
            event.dataTransfer.effectAllowed = "move";
        }
        ;
        dragEndHandler(event) {
            console.log("DragEnd");
        }
        ;
        configure() {
            this.element.addEventListener("dragstart", this.dragStartHandler);
            this.element.addEventListener("dragend", this.dragEndHandler);
        }
        renderContent() {
            this.element.querySelector("h2").textContent = this.project.title;
            this.element.querySelector("h3").textContent = this.persons + " assigned";
            this.element.querySelector("p").textContent = this.project.description;
        }
    }
    __decorate([
        autobind
    ], ProjectItem.prototype, "dragStartHandler", null);
    __decorate([
        autobind
    ], ProjectItem.prototype, "dragEndHandler", null);
    // ProjectListClass
    class ProjectList extends Component {
        constructor(type) {
            super("project-list", "app", false, `${type}-projects`);
            this.type = type;
            this.assignedProjects = [];
            this.configure();
            this.renderContent();
        }
        dragOverHandler(event) {
            if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
                event.preventDefault();
                const listEl = this.element.querySelector("ul");
                listEl.classList.add("droppable");
            }
        }
        dropHandler(event) {
            const prjItem = event.dataTransfer.getData("text/plain");
            projectState.moveProject(prjItem, this.type === "active" ?
                App.ProjectStatus.Active : App.ProjectStatus.Finished);
        }
        dropLeaveHandler(_) {
            const listEl = this.element.querySelector("ul");
            listEl.classList.remove("droppable");
        }
        renderProjects() {
            const listEl = document.getElementById(`${this.type}-projects-list`);
            listEl.innerHTML = "";
            for (const prjItem of this.assignedProjects) {
                new ProjectItem(this.element.querySelector("ul").id, prjItem);
            }
        }
        configure() {
            this.element.addEventListener("dragover", this.dragOverHandler);
            this.element.addEventListener("dragleave", this.dropLeaveHandler);
            this.element.addEventListener("drop", this.dropHandler);
            projectState.addListener((projects) => {
                const relevantProjects = projects.filter(prj => {
                    if (this.type === "active")
                        return prj.status === App.ProjectStatus.Active;
                    else
                        return prj.status === App.ProjectStatus.Finished;
                });
                this.assignedProjects = relevantProjects;
                this.renderProjects();
            });
        }
        renderContent() {
            const listId = `${this.type}-projects-list`;
            this.element.querySelector("ul").id = listId;
            this.element.querySelector("h2").textContent =
                this.type.toUpperCase() + " PROJECTS";
        }
    }
    __decorate([
        autobind
    ], ProjectList.prototype, "dragOverHandler", null);
    __decorate([
        autobind
    ], ProjectList.prototype, "dropHandler", null);
    __decorate([
        autobind
    ], ProjectList.prototype, "dropLeaveHandler", null);
    // ProjectInputClass
    class ProjectInput extends Component {
        constructor() {
            super("project-input", "app", true, "user-input");
            this.titleInputElement = this.element.querySelector('#title');
            this.descriptionInputElement = this.element.querySelector('#description');
            this.peopleInputElement = this.element.querySelector('#people');
            this.configure();
        }
        gatherUserInput() {
            const enteredTitle = this.titleInputElement.value;
            const enteredDescription = this.descriptionInputElement.value;
            const enteredPeople = this.peopleInputElement.value;
            const titleValidatable = {
                value: enteredTitle,
                required: true
            };
            const descriptionValidatable = {
                value: enteredDescription,
                required: true,
                minLength: 5
            };
            const peopleValidatable = {
                value: +enteredPeople,
                required: true,
                min: 1,
                max: 5
            };
            if (!validate(titleValidatable) ||
                !validate(descriptionValidatable) ||
                !validate(peopleValidatable)) {
                alert("Invalid Input Please try again");
                return;
            }
            else {
                return [enteredTitle, enteredDescription, +enteredPeople];
            }
        }
        clearInputs() {
            this.titleInputElement.value = "";
            this.descriptionInputElement.value = "";
            this.peopleInputElement.value = "";
        }
        submitHandler(event) {
            event.preventDefault();
            const userInput = this.gatherUserInput();
            if (Array.isArray(userInput)) {
                const [title, desc, people] = userInput;
                projectState.addProject(title, desc, people);
                this.clearInputs();
            }
        }
        configure() {
            this.element.addEventListener('submit', this.submitHandler);
        }
        renderContent() {
        }
    }
    __decorate([
        autobind
    ], ProjectInput.prototype, "submitHandler", null);
    function validate(validatableInput) {
        let isValid = true;
        if (validatableInput.required) {
            isValid = isValid && validatableInput.value.toString().trim().length !== 0;
        }
        if (validatableInput.minLength != null &&
            typeof validatableInput.value === "string") {
            isValid = isValid && validatableInput.value.length > validatableInput.minLength;
        }
        if (validatableInput.maxLength != null &&
            typeof validatableInput.value === "string") {
            isValid = isValid && validatableInput.value.length > validatableInput.maxLength;
        }
        if (validatableInput.min != null && typeof validatableInput.value === "number") {
            isValid = isValid && validatableInput.value > validatableInput.min;
        }
        if (validatableInput.max != null && typeof validatableInput.value === "number") {
            isValid = isValid && validatableInput.value < validatableInput.max;
        }
        return isValid;
    }
    new ProjectInput();
    new ProjectList("active");
    new ProjectList("finished");
})(App || (App = {}));
//# sourceMappingURL=app.js.map