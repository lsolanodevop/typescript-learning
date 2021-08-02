interface Person{
  name: string,
  age: string

  greet(salute:string):void
}

let user: Person

user = {
  name: "Leonardo",
  age: "26",
  greet(salute: string) {
    console.log(salute + " " + this.name);
  }
};

user.greet("Hello");