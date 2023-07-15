"use strict";
// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
class Counter {
    constructor() {
        this.contador = 0;
        console.log(`O valor inicial do contador é:${this.contador}`);
    }
    incrementar(valor) {
        this.contador += valor;
        console.log(`O valor do contador após o incremento é: ${this.contador}`);
    }
    decrementar(valor) {
        this.contador -= valor;
        console.log(`O valor do contador após o decremento é: ${this.contador}`);
    }
    zerarContador() {
        this.contador = 0;
    }
    mostrarContador() {
        console.log(`O valor atual do contador é: ${this.contador}`);
    }
}
exports.Counter = Counter;
