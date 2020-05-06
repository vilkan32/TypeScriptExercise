"use strict";
class Base {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log("Hello!");
    }
}
class User extends Base {
    constructor(name, age) {
        super(name);
        this.name = name;
        this.age = age;
    }
}
const ivan = new User("Ivan", 20);
ivan.sayHello();
