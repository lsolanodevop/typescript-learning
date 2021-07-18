class Department{
  _name: string;
 private _employees: string[] = [];

  constructor(n: string,employees:string[]) {
    this._name = n;
    this._employees = employees;
  }

  describe(this:Department){
    console.log("Department: " + this._name);
  }

  addEmployees(employee:string) {
    this._employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this._employees.length);
    console.log(this._employees);
  }
}
const emp = ["Leonardo, Jose, Joseph"];
const accounting = new Department("Human Resources",emp);

accounting.describe();

console.log(accounting);

accounting.printEmployeeInformation();
// const accountingCopy = { _name: "IT", employees: ["Leonardo","Raul"], describe: accounting.describe };

// accountingCopy.describe();