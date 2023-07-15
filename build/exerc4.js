"use strict";
// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = __importDefault(require("./model/Calculator"));
const operation1 = new Calculator_1.default();
operation1.add(125, 30);
operation1.multiply(20, 140);
operation1.subtract(10, 5);
operation1.toDivid(10, 5);
operation1.showHistory();
console.log(operation1);
