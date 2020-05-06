"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("./request"));
const Data = new request_1.default("GET", "http://google.com", "HTTP/1.1", "");
console.log(Data);
const ticket_1 = __importDefault(require("./ticket"));
function processTickets(t, sortCrit) {
    let result = [];
    for (const data of t) {
        const args = data.split("|");
        const [destination, price, status] = args;
        result.push(new ticket_1.default(destination, Number(price), status));
    }
    switch (sortCrit) {
        case "destination":
            result = result.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            result = result.sort((a, b) => a.price - b.price);
            break;
        case "status":
            result = result.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }
    return result;
}
const sortedDest = processTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "destination");
const sortedStatus = processTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "status");
const sortedPrice = processTickets([
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
const employee_1 = require("./employee");
const junior = new employee_1.Junior("Dexter", 25);
const senior = new employee_1.Senior("Mike", 31);
const manager = new employee_1.Manager("John", 34);
junior.salary = 2000;
junior.work();
junior.collectSalary();
senior.salary = 4000;
for (let i = 1; i <= 4; i++) {
    senior.work();
}
senior.collectSalary();
manager.salary = 4000;
manager.divident = 800;
for (let i = 1; i <= 3; i++) {
    manager.work();
}
manager.collectSalary();
const melon_1 = require("./melon");
const watermelon = new melon_1.Watermelon(12.5, "Kingsize");
const firemelon = new melon_1.Firemelon(21, "SuperDuperSize");
const earthmelon = new melon_1.Earthmelon(10, "Normalsize");
const airmelon = new melon_1.Airmelon(5, "Smallsize");
const melolemonmelon = new melon_1.Melolemonmelon(13, "Kingsize");
console.log(watermelon.toString());
console.log(firemelon.toString());
console.log(earthmelon.toString());
console.log(airmelon.toString());
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
