"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("./request"));
var Data = new request_1.default("GET", "http://google.com", "HTTP/1.1", "");
console.log(Data);
