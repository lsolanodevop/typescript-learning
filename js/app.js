"use strict";
class Department {
    constructor(id, n, employees) {
        this._employees = [];
        this.id = id;
        this._name = n;
        this._employees = employees;
    }
    describe() {
        console.log("Department: " + this._name);
    }
    addEmployees(employee) {
        this._employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this._employees.length);
        console.log(this._employees);
    }
}
const emp = ["Leonardo, Jose, Joseph"];
const accounting = new Department("A1", "Human Resources", emp);
accounting.describe();
console.log(accounting);
accounting.printEmployeeInformation();
// const accountingCopy = { _name: "IT", employees: ["Leonardo","Raul"], describe: accounting.describe };
// accountingCopy.describe();
//# sourceMappingURL=app.js.map