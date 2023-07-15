"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaCorrente {
    constructor(numeroDaConta, nomeDoCorrentista, saldo) {
        this.numeroDaConta = numeroDaConta;
        this.nomeDoCorrentista = nomeDoCorrentista;
        this.saldo = 0;
    }
    alterarNome(nomeDoCorrentista) {
        this.nomeDoCorrentista = nomeDoCorrentista;
        console.log(`Nome do correntista alterado com sucesso!`);
    }
    deposito(valorDeposito) {
        this.saldo = this.saldo + valorDeposito;
        console.log(`Deposito de: R$ ${valorDeposito.toFixed(2)} reais efetuado com sucesso`);
    }
    saque(valorSaque) {
        if (valorSaque > this.saldo) {
            return console.error("O valor de saque é maior do que seu saldo! Por favor revise os valores");
        }
        else {
            this.saldo = this.saldo - valorSaque;
            console.log(`Saque de: R$ ${valorSaque.toFixed(2)} reais efetuado com sucesso`);
        }
    }
    mostrarSaldo() {
        console.log(`O seu saldo atual é de R$ ${this.saldo.toFixed(2)} reais`);
    }
}
exports.default = ContaCorrente;
