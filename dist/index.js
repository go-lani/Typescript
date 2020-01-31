"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = __importDefault(require("./person"));
var person = new person_1.default('Lee');
// 타입추론
// let foo = 123;
// foo = 'hello';
person.sayHi();
