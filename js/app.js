"use strict";
class Department {
    constructor(n, employees) {
        this._employees = [];
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
const accounting = new Department("Human Resources", emp);
accounting.describe();
console.log(accounting);
accounting.printEmployeeInformation();
// const accountingCopy = { _name: "IT", employees: ["Leonardo","Raul"], describe: accounting.describe };
// accountingCopy.describe();
//# sourceMappingURL=app.js.map