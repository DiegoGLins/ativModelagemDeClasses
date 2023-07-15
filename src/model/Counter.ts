// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.

export class Counter {
  private contador: number;
  constructor() {
    this.contador = 0;
    console.log(`O valor inicial do contador é:${this.contador}`);
  }

  incrementar(valor: number) {
    this.contador += valor;
    console.log(`O valor do contador após o incremento é: ${this.contador}`);
  }

  decrementar(valor: number) {
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
