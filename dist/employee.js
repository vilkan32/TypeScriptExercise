"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = new Array();
    }
    getSalary() {
        return this.salary;
    }
    work() {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask);
    }
    collectSalary() {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
}
class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(" is working on a simple task");
    }
}
exports.Junior = Junior;
class Senior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(" is working on a complicated task.");
        this.tasks.push(" is taking time off work.");
        this.tasks.push(" is supervising junior workers");
    }
}
exports.Senior = Senior;
class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        this.divident = 0;
        this.tasks.push(" scheduled a meeting.");
        this.tasks.push(" is preparing a quarterly meeting.");
    }
    getSalary() {
        return this.salary + this.divident;
    }
}
exports.Manager = Manager;
