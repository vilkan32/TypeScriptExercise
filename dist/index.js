"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("./request"));
var Data = new request_1.default("GET", "http://google.com", "HTTP/1.1", "");
console.log(Data);
var ticket_1 = __importDefault(require("./ticket"));
function processTickets(t, sortCrit) {
    var result = [];
    for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
        var data = t_1[_i];
        var args = data.split("|");
        var destination = args[0], price = args[1], status_1 = args[2];
        result.push(new ticket_1.default(destination, Number(price), status_1));
    }
    switch (sortCrit) {
        case "destination":
            result = result.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            break;
        case "price":
            result = result.sort(function (a, b) { return a.price - b.price; });
            break;
        case "status":
            result = result.sort(function (a, b) { return a.status.localeCompare(b.status); });
            break;
    }
    return result;
}
var sortedDest = processTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "destination");
var sortedStatus = processTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "status");
var sortedPrice = processTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "price");
console.log("--------------");
console.log(sortedDest);
console.log("--------------");
console.log(sortedStatus);
console.log("--------------");
console.log(sortedPrice);
console.log("--------------");
var employee_1 = require("./employee");
var junior = new employee_1.Junior("Dexter", 25);
var senior = new employee_1.Senior("Mike", 31);
var manager = new employee_1.Manager("John", 34);
junior.salary = 2000;
junior.work();
junior.collectSalary();
senior.salary = 4000;
for (var i = 1; i <= 4; i++) {
    senior.work();
}
senior.collectSalary();
manager.salary = 4000;
manager.divident = 800;
for (var i = 1; i <= 3; i++) {
    manager.work();
}
manager.collectSalary();
