"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    constructor() {
        this.history = [];
    }
    add(valor1, valor2) {
        const resultAdd = valor1 + valor2;
        this.history.push(resultAdd);
        console.log(`A soma dos valores: ${valor1} + ${valor2} é = ${resultAdd}`);
    }
    subtract(valor1, valor2) {
        const resultSubtract = valor1 - valor2;
        this.history.push(resultSubtract);
        console.log(`A subtracao dos valores: ${valor1} - ${valor2} é = ${resultSubtract}`);
    }
    multiply(valor1, valor2) {
        const resultMultiply = valor1 * valor2;
        this.history.push(resultMultiply);
        console.log(`A multiplicacao dos valores: ${valor1} x ${valor2} é = ${resultMultiply}`);
    }
    toDivid(valor1, valor2) {
        const resultDivid = valor1 / valor2;
        this.history.push(resultDivid);
        console.log(`A divisao dos valores: ${valor1} : ${valor2} é = ${resultDivid}`);
    }
    showHistory() {
        console.log(this.history);
    }
}
exports.default = Calculator;
