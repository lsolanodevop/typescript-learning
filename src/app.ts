class ProjectInput{
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;
  constructor() {
    this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    
    const importedHTML = document.importNode(this.templateElement.content, true);
    this.element = importedHTML.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputElement = document.querySelector("#title")! as HTMLInputElement;
    this.descriptionInputElement = document.querySelector("#description")! as HTMLInputElement;
    this.peopleInputElement = document.querySelector("#people")! as HTMLInputElement;


    this.configure();
    this.attach();
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    // console.log("Clicked");
    console.log(this.titleInputElement);
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
    // console.log("Configure");
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin",this.element);
  }

  }

const projInput = new ProjectInput();


